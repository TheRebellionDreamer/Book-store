import {
  Container,
  Divider,
  IconButton,
  ListItem,
  Typography,
  makeStyles,
  Box,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import React from "react";
import { useDispatch } from "react-redux";
import { IBaggageItemProps } from "../interfaces";
import { shopListActions } from "../store/actions/ShopListActions";

const useStyle = makeStyles({
  baggageItem: {
    display: "inline-flex",
  },
  numberOfItems: {
    display: "inline-flex",
    justifyContent: "flex-end",
  },
  item: {
    // margin: 5,
    display: "flex",
    justifyContent: "space-between",
  },
  info: {
    paddingRight: "2rem"
  }
});

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

    dispatch({ type: shopListActions.ADD_ITEM, payload: payload });
  };

  const removeInBag = (): void => {
    const secPayload = {
      price,
      id,
    };
    dispatch({ type: shopListActions.REMOVE_ITEM, payload: secPayload.id });
  };

  return (
      <ListItem className={classes.item}>
        <Box className={classes.info}>
          <Typography variant="h5">{title}</Typography>
          <Typography variant="body1">{author}</Typography>
        </Box>
        <Box className={classes.baggageItem}>
          <Typography>
            Price: {price}₽, Summary: {price * count}₽
          </Typography>
        </Box>
        <Box className={classes.numberOfItems}>
          <IconButton
            onClick={removeInBag}
            size="small"
            className={classes.item}
          >
            <RemoveIcon />
          </IconButton>
          <Typography variant="h5" className={classes.item}>
            {count}
          </Typography>
          <IconButton onClick={addInBag} size="small" className={classes.item}>
            <AddIcon />
          </IconButton>
        </Box>
      </ListItem>
  );
};
