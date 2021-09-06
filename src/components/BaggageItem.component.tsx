import { Container, Divider, ListItem, Typography } from "@material-ui/core";
import React from "react";

interface IBaggageItemProps {
  title: string;
  author: string;
  price: number;
  count: number;
}

export const BaggageItem: React.FC<IBaggageItemProps> = ({
  title,
  author,
  price,
  count,
}): JSX.Element => {
  return (
    <ListItem>
      <Container>
        <Typography variant="h5">{title}</Typography>
        <Typography variant="body1">{author}</Typography>
      </Container>
      <Divider />
      <Typography>Price: {price}, Qty: {count}, Summary: {price * count}</Typography>
    </ListItem>
  );
};
