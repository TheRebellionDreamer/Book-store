import {
  Grid,
  Container,
  TextField,
  makeStyles,
  Typography,
  Dialog,
  DialogContentText,
  Select,
  MenuItem,
  InputLabel,
  Box,
  FormControl,
  Snackbar,
} from "@material-ui/core";
import React, { useEffect } from "react";
import { IGood } from "../types/types";
import { CatalogueItem } from "../components/CatalogueItem.component";
import { Alert } from "@material-ui/lab";
import axios from "axios";

const useStyle = makeStyles({
  message: {
    fontWeight: 300,
    fontSize: 60,
  },
  errorMessage: {
    padding: "3rem",
    textAlign: "center",
  },
  formContainer: {
    margin: "5rem 0rem 3rem 0rem",
    display: "flex",
    flexDirection: "row",
  },
  select: {
    paddingLeft: "1rem",
    width: "10rem",
  },
});

export const Catalogue: React.FC = () => {
  const [searchValue, setSearchValue] = React.useState<string>("");
  const [serverError] = React.useState<boolean>(false);
  const [sortingMethod, setSortingMethod] = React.useState<string>();
  const [minPrice, setMinPrice] = React.useState<string>("");
  const [maxPrice, setMaxPrice] = React.useState<string>("");
  const [open, setOpen] = React.useState<boolean>(false);
  const [goods, setGoods] = React.useState<IGood[]>([]);
  const classes = useStyle();

  useEffect(() => {
    fetchingUser();
  }, []);

  const fetchingUser = async () => {
    await axios.get("/goods").then(response => setGoods(response.data));
  }
  interface IFilteringItem {
    (book: IGood): boolean;
  }

  const changeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  }; // ввод в поле поиска

  const filteringItems: IFilteringItem = ({ title, author }) =>
    title.toLowerCase().includes(searchValue.toLowerCase()) ||
    author.toLowerCase().includes(searchValue.toLowerCase()); // метод поиска книг по названию и автору

  let filtredItems =
    searchValue.trim() !== "" ? goods.filter(filteringItems) : goods; // принимаемый колбэк для метода

  const handleChangeSortingMethod = (
    event: React.ChangeEvent<{ value: unknown }>
  ) => {
    setSortingMethod(event.target.value as string);
  };

  enum typesOfSorting {
    Title = "Title",
    DescendingPrice = "Descending price",
    AscendingPrice = "Ascending price",
  }

  if (sortingMethod === typesOfSorting.Title) {
    filtredItems.sort((a: IGood, b: IGood): number => {
      if (a.title > b.title) return 1;
      if (a.title < b.title) return -1;
      return 0;
    });
  }

  if (sortingMethod === typesOfSorting.DescendingPrice)
    filtredItems.sort((a: IGood, b: IGood): number => a.price - b.price);

  if (sortingMethod === typesOfSorting.AscendingPrice)
    filtredItems.sort((a: IGood, b: IGood): number => b.price - a.price);

  const changeMin = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMinPrice(event.target.value);
  };

  const changeMax = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMaxPrice(event.target.value);
  };

  if (minPrice && maxPrice) {
    filtredItems = filtredItems.filter(
      (item) => item.price >= Number(minPrice) && item.price <= Number(maxPrice)
    );
  }

  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <Container>
      <Box className={classes.formContainer}>
        <FormControl fullWidth>
          <TextField
            title={searchValue}
            onChange={changeValue}
            label="Search by title or author"
            variant="standard"
            fullWidth
          />
        </FormControl>
        <FormControl className={classes.select}>
          <InputLabel
            id="demo-simple-select-label"
            style={{ paddingLeft: "1rem" }}
          >
            Sorted by
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            variant="standard"
            value={sortingMethod}
            onChange={handleChangeSortingMethod}
          >
            <MenuItem value={typesOfSorting.Title}>Title</MenuItem>
            <MenuItem value={typesOfSorting.DescendingPrice}>
              Descending price
            </MenuItem>
            <MenuItem value={typesOfSorting.AscendingPrice}>
              Ascending price
            </MenuItem>
          </Select>
        </FormControl>
        <FormControl>
          <TextField
            title={minPrice}
            onChange={changeMin}
            label="Min"
            variant="standard"
            fullWidth
          />
          <TextField
            title={maxPrice}
            onChange={changeMax}
            label="Max"
            variant="standard"
            fullWidth
          />
        </FormControl>
      </Box>
      <Container>
        {filtredItems.length ? (
          <Grid container spacing={3}>
            {filtredItems.map((item) => (
              <Grid item key={item.id} xs={12} sm={6} md={4} lg={4}>
                <CatalogueItem {...item} setOpen={setOpen}/>
              </Grid>
            ))}
          </Grid>
        ) : (
          <Typography variant="h3" className={classes.message}>
            Sorry, but your query did not match
          </Typography>
        )}
      </Container>
      {serverError && (
        <Dialog open={serverError}>
          <DialogContentText variant="h3" className={classes.errorMessage}>
            Sorry, but the catalog is experiencing temporary technical
            difficulties
          </DialogContentText>
        </Dialog>
      )}
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      >
        <Alert severity="success">Item added to cart</Alert>
      </Snackbar>
    </Container>
  );
};
