import {
  makeStyles,
  Card,
  CardContent,
  Typography,
  Grid,
  CardMedia,
  CardActions,
  Tooltip,
  Zoom,
  Grow,
} from "@material-ui/core";
import { StyledCatalogButton } from "../custom/StyledCatalogButton.custom";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import React from "react";
import { useDispatch } from "react-redux";
import { IGood } from "../types/types";
import { shopListActions } from "../store/reducers/shopList.reducer";

const useStyles = makeStyles({
  footer: {
    marginTop: "1.5rem",
  },
  card: {
    height: "100%",
    transition: ".5s ease-in-out 0s",
    "&:hover": {
      transform: "scale(1.05)",
    },
  },
  cardMedia: {
    height: 140,
  },
  cardAction: {
    display: "flex",
    justifyContent: "flex-end",
  },
});
interface IProps {
  setOpen(value: boolean): void;
}

export const CatalogueItem: React.FC<IGood & IProps> = ({
  id,
  category,
  title,
  author,
  image,
  price, 
  setOpen
}): JSX.Element => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [cheked] = React.useState<boolean>(true);

  const addInBag = (): void => {
    const payload = {
      id,
      category,
      title,
      author,
      price,
    };

    dispatch({ type: shopListActions.ADD_ITEM, payload: payload });
    setOpen(true);
  };

  return (
    <Grow in={cheked} {...(cheked ? { timeout: 1500 } : {})}>
      <Grid item xs={12}>
        <Card className={classes.card} color="">
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
            <Typography variant="body1">Price: {price}₽</Typography>
          </CardContent>
          <CardActions className={classes.cardAction}>
            <Tooltip
              title="Add in cart"
              aria-label="add"
              TransitionComponent={Zoom}
              placement="top"
            >
              <StyledCatalogButton
                color="secondary"
                variant="contained"
                endIcon={<ShoppingBasketIcon fontSize="large" />}
                onClick={addInBag}
              >
                Buy
              </StyledCatalogButton>
            </Tooltip>
          </CardActions>
        </Card>
      </Grid>
    </Grow>
  );
};
