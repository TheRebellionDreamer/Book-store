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
import { Close } from "@material-ui/icons";
import React from "react";
import { BaggageList } from "./BagggeList.components";
import { IBaggageProps } from "../../interfaces";
import { OrderPlacement } from "./OrderPlacement.components";
import { useTypedSelector } from "../../hooks/typed-selector.hook";
import { Header } from "../Header.components"

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
    justifyContent: "space-between",
  },
  tooltipText: {
    fontSize: "2rem",
    whiteSpace: "nowrap",
  },
  icon: {
    fontSize: 45,
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
            <Close />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box style={{ display: "flex", justifyContent: "center" }}>
        <Box style={{ width: "80vw" }}>
          <Header text={"Your order"}/>
          <Box
            className={
              !products.length
                ? classes.basketIsEmpty
                : classes.basketisNotEmpty
            }
          >
            <BaggageList />
            {products.length ? <OrderPlacement /> : <Box></Box>}
          </Box>
        </Box>
      </Box>
    </Dialog>
  );
};
