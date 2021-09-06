import { Container, Divider, List, Typography, makeStyles } from "@material-ui/core";
import React from "react";
import { BaggageItem } from "../components/BaggageItem.component";
import { useTypedSelector } from "../hooks/typed-selector.hook";

const useStyle = makeStyles({
  container: {
    marginTop: "5rem"
  }
})

export const Baggage: React.FC = (): JSX.Element => {
  const classes = useStyle()
  const itemsInBag = useTypedSelector((state) => state.shopList);
  return (
    <Container className={classes.container}>
      <List>
        {!itemsInBag.length ? (
          <Typography>Your cart is empty</Typography>
        ) : (
          itemsInBag.map(({ item, count }) => (
            <>
              <BaggageItem {...item} count={count} key={item.id + "_2D"} />
              <Divider variant="fullWidth" />
            </>
          ))
        )}
      </List>
    </Container>
  );
};
