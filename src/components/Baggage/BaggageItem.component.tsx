import {
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
import { IBaggageItemProps } from "../../interfaces";
import { shopListActions } from "../../store/actions/ShopListActions";

const useStyle = makeStyles({
  text: {
    textAlign: "right",
  },
  btnContainer: {
    display: "flex",
    flexDirection: "column",
    marginLeft: "1rem",
  },
  sum: {
    display: "flex",
    justifyContent: "flex-end",
    flexDirection: "column",
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
    <Box style={{ width: "40vw" }}>
      <ListItem>
        <Box style={{ flex: 1 }}>
          <Typography variant="h6">{title}</Typography>
          <Typography variant="subtitle1">{author}</Typography>
        </Box>
        <Box className={classes.sum}>
          <Typography className={classes.text}>
            Price: {price} x <span style={{ fontWeight: 600 }}>{count}</span>
          </Typography>
          <Typography className={classes.text}>
            Summary: {price * count}
          </Typography>
        </Box>
        <Box className={classes.btnContainer}>
          <IconButton size="small" onClick={addInBag}>
            <AddIcon />
          </IconButton>
          <IconButton size="small" onClick={removeInBag}>
            <RemoveIcon />
          </IconButton>
        </Box>
      </ListItem>
      <Divider />
    </Box>
  );
};
