import {
  Container,
  Divider,
  IconButton,
  ListItem,
  Typography,
  makeStyles,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import React from "react";
import { useDispatch } from "react-redux";
import { shopListActions } from "../store/reducers/shopListReducer.reducer";

const useStyle = makeStyles({
  baggageItem: {
    display: "inline-flex",
  },
  numberOfItems: {
    display: "inline-flex",
  },
  item: {
    margin: 5,
  },
});

interface IBaggageItemProps {
  id: number;
  category: string;
  title: string;
  author: string;
  price: number;
  count: number;
}

export const BaggageItem: React.FC<IBaggageItemProps> = ({
  id,
  category,
  title,
  author,
  price,
  count,
}): JSX.Element => {
  const classes = useStyle();
  const dispatch = useDispatch();
  const addInBag = (): void => {
    const payload = {
      id,
      category,
      title,
      author,
      price,
    };

    const numberPayload = {
      item: 1,
    };
    dispatch({ type: shopListActions.ADD_ITEM, payload: payload });
  };

  const removeInBag = (): void => {
    const secPayload = {
      price,
      id
    }
    const numberPayload = {
      item: 1,
    };
    dispatch({type: shopListActions.REMOVE_ITEM, payload: secPayload.id})
  }

  return (
    <ListItem>
      <Container>
        <Typography variant="h5">{title}</Typography>
        <Typography variant="body1">{author}</Typography>
      </Container>
      <Divider />
      <Container className={classes.baggageItem}>
        <Typography>
          Price: {price}₽, Summary: {price * count}₽
        </Typography>
        <Container className={classes.numberOfItems}>
          <IconButton onClick={removeInBag} size="small" className={classes.item}>
            <RemoveIcon />
          </IconButton>
          <Typography variant="h5" className={classes.item}>
            {count}
          </Typography>
          <IconButton onClick={addInBag} size="small" className={classes.item}>
            <AddIcon />
          </IconButton>
        </Container>
      </Container>
    </ListItem>
  );
};
