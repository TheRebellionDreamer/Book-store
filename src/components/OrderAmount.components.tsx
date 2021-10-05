import { Paper, Typography } from "@material-ui/core";
import React from "react";
import { useTypedSelector } from "../hooks/typed-selector.hook";


export const OrderAmount: React.FC = (): JSX.Element => {
  const {totalCost, products} = useTypedSelector(
    (state) => state.shopList
  );
 
  return (
    <Paper>
      <Typography>{totalCost}</Typography>
      <Typography>{products}</Typography>
    </Paper>
  );
};
