import React from "react";
import { Box, Container, List, Paper, Typography } from "@material-ui/core";
import { useTypedSelector } from "../hooks/typed-selector.hook";
import { BaggageItem } from "./BaggageItem.component";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  emoji: {
    fontSize: "124px",
    textAlign: "center"
  },
});

export const BaggageList: React.FC = (): JSX.Element => {
  const { products } = useTypedSelector(
    (state) => state.shopList
  );
  const classes = useStyles();
  return (
    <Box>
      <List>
        {!products.length ? (
          <Container>
            <Typography className={classes.emoji}>😔</Typography>
            <Typography variant="h3">Your cart is empty</Typography>
          </Container>
        ) : (
          <Paper elevation={5}>
            {products.map(({ item, count }) => (
              <BaggageItem {...item} count={count} key={item.image} />
            ))}
          </Paper>
        )}
      </List>
    </Box>
  );
};
