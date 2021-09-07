import {
  Container,
  Divider,
  List,
  Typography,
  makeStyles,
  Box,
} from "@material-ui/core";
import React from "react";
import { BaggageItem } from "../components/BaggageItem.component";
import { useTypedSelector } from "../hooks/typed-selector.hook";

const useStyle = makeStyles({
  container: {
    marginTop: "5rem",
  },
});

export const Baggage: React.FC = (): JSX.Element => {
  const classes = useStyle();
  const { products, totalCost, totalSize } = useTypedSelector(
    (state) => state.shopList
  );
  return (
    <Container className={classes.container}>
      <List>
        {!products.length ? (
          <Typography variant="h2">Your cart is empty :(</Typography>
        ) : (
          products.map(({ item, count }) => (
            <>
              <BaggageItem {...item} count={count} key={`${item.id.toString()}`} />
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
    </Container>
  );
};
