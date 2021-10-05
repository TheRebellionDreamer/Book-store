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
import { useActions } from "../hooks/action.hook";
import { IBaggageItemProps } from "../interfaces";


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
  },
});

export const BaggageItem: React.FC<IBaggageItemProps> = ({
  id,
  category,
  title,
  author,
  price,
  count,
  image,
}): JSX.Element => {
  const classes = useStyle();
  const { addInBag } = useActions();
  const { removeInBag } = useActions();

  return (
    <Box style={{ width: "30vw" }}>
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
          <IconButton
            size="small"
            onClick={() =>
              addInBag({ id, category, title, author, image, price })
            }
          >
            <AddIcon />
          </IconButton>
          <IconButton size="small" onClick={() => removeInBag(id)}>
            <RemoveIcon />
          </IconButton>
        </Box>
      </ListItem>
      <Divider />
    </Box>
  );
};
