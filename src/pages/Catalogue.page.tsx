import {
  Grid,
  Container,
  TextField,
  makeStyles,
  Typography,
  Dialog,
  DialogContentText,
} from "@material-ui/core";
import React, { useEffect } from "react";
import { IGood } from "../data/goods.data";
import { CatalogueItem } from "../components/CatalogueItem.component";
import axios from "axios";

const useStyle = makeStyles({
  field: {
    marginTop: "5rem",
    marginBottom: "3rem",
  },
  message: {
    fontWeight: 300,
    fontSize: 60,
  },
  errorMessage: {
    padding: "3rem",
    textAlign: "center"
  }
});

export const Catalogue: React.FC = () => {
  const [searchValue, setSearchValue] = React.useState<string>("");
  const [goods, setGoods] = React.useState<IGood[]>([]);
  const [serverError, setServerError] = React.useState<boolean>(false);
  const classes = useStyle();

  useEffect(() => {
    loadingCatalog();
  }, []);

  const loadingCatalog = async () => {
    try {
      await axios.get("/goods").then((response) => {
        setGoods(response.data);
      });
    } catch {
      setServerError(true);
    }
  };

  interface IFilteringItem {
    (book: IGood): boolean;
  }

  const changeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  }; // ввод в поле поиска

  const filteringItems: IFilteringItem = ({ title, author }) =>
    title.toLowerCase().includes(searchValue.toLowerCase()) ||
    author.toLowerCase().includes(searchValue.toLowerCase()); // метод поиска книг по названию и автору

  const filtredItems =
    searchValue.trim() !== "" ? goods.filter(filteringItems) : goods; // принимаемый колбэк для метода

  return (
    <Container>
      <form noValidate autoComplete="off">
        <TextField
          title={searchValue}
          onChange={changeValue}
          className={classes.field}
          label="Search by title or author"
          variant="standard"
          fullWidth
        />
      </form>
      <Container>
        {filtredItems.length ? (
          <Grid container spacing={3}>
            {filtredItems.map((item) => (
              <Grid item key={item.id} xs={12} sm={6} md={4} lg={4}>
                <CatalogueItem {...item} />
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
            Sorry, but the catalog is experiencing temporary technical difficulties
          </DialogContentText>
        </Dialog>
      )}
    </Container>
  );
};
