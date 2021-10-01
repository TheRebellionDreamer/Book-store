import {
  Divider,
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
import { BaggageList } from "./BagggeList.components";
import { IBaggageProps } from "../interfaces";
import { OrderPlacement } from "./OrderPlacement.components";
import { useTypedSelector } from "../hooks/typed-selector.hook";

const useStyle = makeStyles({
  toolBar: {
    display: "flex",
    justifyContent: "flex-end",
  },
  basketIsEmpty: {
    display: "flex",
    justifyContent: "center",
  },
  basketisNotEmpty: {
    display: "flex",
    justifyContent: "space-between"
  }
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
  const handleClose = () => {
    setBagOpen(false);
  };

  const { products, totalCost, totalSize } = useTypedSelector(
    (state) => state.shopList
  );

  return (
    <Dialog open={bagOpen} fullScreen={true} TransitionComponent={Transition}>
      <AppBar>
        <Toolbar className={classes.toolBar}>
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
      <Box style={{ display: "flex", justifyContent: "center" }}>
        <Box style={{ width: "80vw" }}>
          <Typography style={{ margin: "5rem 0 0 0" }} variant="h2">
            Your order
          </Typography>
          <Divider style={{ margin: "2rem 0 2rem 0" }} />
          <Box className={!products.length ? classes.basketIsEmpty : classes.basketisNotEmpty}>
            <BaggageList />
            {products.length ? (<OrderPlacement />) : (<Box></Box>)}
          </Box>
        </Box>
      </Box>
    </Dialog>
  );
};
