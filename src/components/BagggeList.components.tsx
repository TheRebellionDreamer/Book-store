import React from "react";
import { Box, Divider, List, Paper, Typography } from "@material-ui/core";
import { useTypedSelector } from "../hooks/typed-selector.hook";
import { BaggageItem } from "./BaggageItem.component";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  listContainer: {
    display: "flex",
    flexDirection: "row",
    // justifyContent: "center"
  },
  emoji: {
    fontSize: "6rem",
    textAlign: "center",
  },
});

export const BaggageList: React.FC = (): JSX.Element => {
  const { products, totalCost, totalSize } = useTypedSelector(
    (state) => state.shopList
  );
  const classes = useStyles();
  return (
    <List className={classes.listContainer} >
      {!products.length ? (
        <Box>
          <Typography className={classes.emoji}>😔</Typography>
          <Typography variant="h2">Your cart is empty</Typography>
        </Box>
      ) : (
        <Paper elevation={5}>
        {products.map(({ item, count }) => (
          <BaggageItem {...item} count={count} key={item.image} />
        ))}
        </Paper>
      )}
    </List>
  );
};
