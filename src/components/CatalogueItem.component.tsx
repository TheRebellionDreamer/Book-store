import {
  makeStyles,
  Card,
  CardContent,
  Typography,
  Button,
  Grid,
  CardMedia,
  CardActions,
  Snackbar,
  Tooltip,
  Zoom,
  Grow,
} from "@material-ui/core";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import React from "react";
import { useDispatch } from "react-redux";
import { IGood } from "../data/goods.data";
import { shopListActions } from "../store/reducers/shopListReducer.reducer";
import Alert from "@material-ui/lab/Alert";

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

export const CatalogueItem: React.FC<IGood> = ({
  id,
  category,
  title,
  author,
  image,
  price,
}): JSX.Element => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState<boolean>(false);
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

  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <Grow in={cheked} {...(cheked ? { timeout: 1500 } : {})}>
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
            <Typography variant="body1">Price: {price}₽</Typography>
          </CardContent>
          <CardActions className={classes.cardAction}>
            <Tooltip
              title="Add in cart"
              aria-label="add"
              TransitionComponent={Zoom}
              placement="top"
            >
              <Button
                color="secondary"
                variant="contained"
                endIcon={<ShoppingBasketIcon fontSize="large" />}
                onClick={addInBag}
              >
                Buy
              </Button>
            </Tooltip>
          </CardActions>
        </Card>
        <Snackbar
          open={open}
          autoHideDuration={3000}
          onClose={handleClose}
          anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        >
          <Alert severity="success">Item added to cart</Alert>
        </Snackbar>
      </Grid>
    </Grow>
  );
};
