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
} from "@material-ui/core";
import { TransitionProps } from "@material-ui/core/transitions";
import CloseIcon from "@material-ui/icons/Close";
import React from "react";
import { BaggageItem } from "../components/BaggageItem.component";
import { useTypedSelector } from "../hooks/typed-selector.hook";

const useStyle = makeStyles({
  container: {
    marginTop: "5rem",
  },
});

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});
interface IPropsBaggage {
  bagOpen: boolean;
  setBagOpen(value: boolean): void;
}
export const Baggage: React.FC<IPropsBaggage> = ({
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

  console.log(typeof totalCost)

  return (
    // <Container className={classes.container}>
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
      <List className={classes.container}>
        {!products.length ? (
          <Typography variant="h2">Your cart is empty</Typography>
        ) : (
          products.map(({ item, count }) => (
            <>
              <BaggageItem
                {...item}
                count={count}
                key={item.image}
              />
              <Divider variant="fullWidth" />
            </>
          ))
        )}
        {products.length ? (
          <Container>
            <Typography variant="h4">
              You have {totalSize} items in your basket with a value of {totalCost}₽
            </Typography>
          </Container>
        ) : (
          <Box></Box>
        )}
      </List>
    </Dialog>
  );
};
