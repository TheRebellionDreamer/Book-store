import React from "react";
import { Box, Container, makeStyles } from "@material-ui/core";
import { Header } from "../components/Header.components";
import { useTypedSelector } from "../hooks/typed-selector.hook";
import { BaggageList } from "../components/BaggageList.components";
import { Order } from "../components/Order.components";

const useStyle = makeStyles((theme) => ({
  root: {
    height: "80vh",
    animation: `$openEffect 1000ms ${theme.transitions.easing.easeInOut}`,
  },
  "@keyframes openEffect": {
    "0%": {
      opacity: 0,
    },
    "100%": {
      opacity: 1,
    },
  },
  basketIsEmpty: {
    display: "flex",
    justifyContent: "center",
  },
  basketisNotEmpty: {
    display: "flex",
    justifyContent: "space-between",
  },
}));

export const Baggage: React.FC = (): JSX.Element => {
  const classes = useStyle();
  const { products } = useTypedSelector((state) => state.shopList);
  return (
    <Container className={classes.root}>
      <Header text={"Your order"} variant={"h3"} />
      <Box
        className={
          !products.length ? classes.basketIsEmpty : classes.basketisNotEmpty
        }
      >
        <Box style={{ display: "flex", flexDirection: "column" }}>
          <BaggageList />
        </Box>
        {products.length ? <Order /> : <Box></Box>}
      </Box>
    </Container>
  );
};
