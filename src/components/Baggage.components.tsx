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
import { BaggageItem } from "./BaggageItem.component";
import { BaggageList } from "./BagggeList.components";
import { useTypedSelector } from "../hooks/typed-selector.hook";
import { IBaggageProps } from "../interfaces";

const useStyle = makeStyles({
  toolBar: {
    display: "flex",
    justifyContent: "flex-end",
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
      {/* <Box>
        
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
      <Box style={{ display: "flex", justifyContent: "center" }}>
        <Box style={{ width: "80vw" }}>
          <Typography style={{ margin: "5rem 0 0 0" }} variant="h2">
            Your order
          </Typography>
          <Divider style={{ margin: "2rem 0 2rem 0" }} />
          <Box>
            <BaggageList />
            
          </Box>
        </Box>
      </Box>
    </Dialog>
  );
};
