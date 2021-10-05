import { Box, makeStyles } from "@material-ui/core";
import { OrderPlacement } from "./OrderPlacement.components";
import React from "react";
import { OrderAmount } from "./OrderAmount.components";
import { Header } from "./Header.components";

const useStyle = makeStyles({
  root: {
    background: "rgba(0,0,0,.02)",
    width: "20vw",
    maxHeight: "30rem",
    position: "sticky",
    top: 100,
    
    // float: "left",
    // right: "29rem",
    // marginRight: "20vw",
  },
});

export const Order: React.FC = (): JSX.Element => {
  const classes = useStyle();
  return (

      <Box className={classes.root}>
        <Header text={"Enter your information"} variant="h6"/>
        <OrderPlacement />
        <OrderAmount />
      </Box>
  );
};
