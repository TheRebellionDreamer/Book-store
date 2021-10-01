import {
  Container,
  Divider,
  List,
  Typography,
  makeStyles,
  Box,
  Dialog,
  AppBar,
  Toolbar,
  IconButton,
  Slide,
  Button,
} from "@material-ui/core";
import { TransitionProps } from "@material-ui/core/transitions";
import CloseIcon from "@material-ui/icons/Close";
import React from "react";
import { BaggageItem } from "../components/BaggageItem.component";
import { useTypedSelector } from "../hooks/typed-selector.hook";
import { IBaggageProps } from "../interfaces";

const useStyle = makeStyles({
  container: {
    marginTop: "5rem",
  },
  emoji: {
    fontSize: "6rem",
    textAlign: "center",
  },
  messageContainer: {
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  resultContainer: {
    paddingTop: "2rem",
    marginTop: "3rem",
    display: "flex",
    justifyContent: "space-between",
  },
  sizeCart: {
    marginBottom: "1rem",
  },
});

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const Baggage: React.FC<IBaggageProps> = ({
  bagOpen,
  setBagOpen,
}): JSX.Element => {
  const classes = useStyle();
  const { products, totalCost, totalSize } = useTypedSelector(
    (state) => state.shopList
  );

  const handleClose = () => {
    setBagOpen(false);
  };

  return (
    <Dialog open={bagOpen} fullScreen={true} TransitionComponent={Transition}>
      <AppBar>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={handleClose}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      {/* <Box>
        <List className={classes.container}>
          {!products.length ? (
            <Box className={classes.messageContainer}>
              <Typography className={classes.emoji}>😔</Typography>
              <Typography variant="h2">Your cart is empty</Typography>
            </Box>
          ) : (
            products.map(({ item, count }) => (
              <>
                <BaggageItem {...item} count={count} key={item.image} />
                <Divider variant="fullWidth" />
              </>
            ))
          )}
        </List>
        {products.length ? (
          <Box className={classes.resultContainer}>
            <Box>
              <Typography variant="h3" className={classes.sizeCart}>
                Total items in cart: {totalSize}
              </Typography>
              <Typography variant="h3">Total: {totalCost}</Typography>
            </Box>
            <Button color="primary" variant="contained">
              <Typography variant="button" >Place an order</Typography>
            </Button>
          </Box>
        ) : (
          <Box></Box>
        )}
      </Box> */}
      <Box>
        <Box>
          <Typography>Your order</Typography>
          
        </Box>
      </Box>
    </Dialog>
  );
};
