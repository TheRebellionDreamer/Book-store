import {
  makeStyles,
  Card,
  CardContent,
  Typography,
  Button,
  Grid,
  CardMedia,
  CardActions,
} from "@material-ui/core";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import React from "react";
import { useDispatch } from "react-redux";
import { IGood } from "../data/goods.data";
import { useTypedSelector } from "../hooks/typed-selector.hook";
import { shopListActions } from "../store/reducers/shopListReducer.reducer";

const useStyles = makeStyles({
  root: {
    height: "450px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    transition: ".4s ease 0s",
    "&:hover": {
      transform: "scale(1.01)",
    },
  },
  footer: {
    marginTop: "1.5rem",
  },
  card: {
    height: "100%",
  },
  cardMedia: {
    height: 140,
  },
  cardAction: {
    display: "flex",
    justifyContent: "flex-end",
  },
  button: {
    
  }
});

export const CatalogueItem: React.FC<IGood> = ({
  id,
  category,
  title,
  author,
  image,
  price,
}): JSX.Element => {
  const classes = useStyles();
  const shopList = useTypedSelector((state) => state);
  const dispatch = useDispatch();

  const addInBag = (): void => {
    const payload = {
      id,
      category,
      title,
      author,
      price,
    };
    dispatch({ type: shopListActions.ADD_ITEM, payload: payload });
    console.log(shopList.shopList);
  };

  return (
    <Grid item xs={12}>
      <Card className={classes.card}>
        <CardMedia
          image={image}
          component="img"
          alt={title}
          title={title}
          className={classes.cardMedia}
        />
        <CardContent>
          <Typography variant="h6" component="h3">
            {title}
          </Typography>
          <Typography variant="body1">Price: {price} $.</Typography>
        </CardContent>
        <CardActions className={classes.cardAction}>
          <Button
            color="secondary"
            variant="contained"
            endIcon={<ShoppingBasketIcon fontSize="large"/>}
            onClick={addInBag}
          >
            Buy
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};
