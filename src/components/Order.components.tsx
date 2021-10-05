import { Box, makeStyles, Typography } from "@material-ui/core";
import { OrderPlacement } from "./OrderPlacement.components";
import React from "react";
import { OrderAmount } from "./OrderAmount.components";

const useStyle = makeStyles({
  root: {
    background: "rgba(0,0,0,.02)",
    width: "20vw",
    maxHeight: "30rem",
    position: "sticky",
    top: 100,
  },
});

export const Order: React.FC = (): JSX.Element => {
  const classes = useStyle();
  return (
    <Box className={classes.root}>
      <Box style={{ paddingBottom: "2rem", backgroundColor: "white" }}>
        <Typography
          variant="h5"
          align="center"
          style={{ fontWeight: "bolder" }}
        >
          Enter your information
        </Typography>
      </Box>
      <OrderPlacement />
      <OrderAmount />
    </Box>
  );
};
