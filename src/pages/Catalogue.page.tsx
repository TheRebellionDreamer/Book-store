import {
  Grid,
  Container,
  TextField,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import { goods, IGood } from "../data/goods.data";

import { CatalogueItem } from "../components/CatalogueItem.component";

const useStyle = makeStyles({
  field: {
    marginTop: "5rem",
    marginBottom: "3rem",
  },
  message: {
    fontWeight: 300,
    fontSize: 60,
  },
});

export const Catalogue: React.FC = () => {
  const [searchValue, setSearchValue] = React.useState<string>("");
  const classes = useStyle();


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
    </Container>
  );
};
