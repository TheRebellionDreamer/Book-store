import { makeStyles, Card, CardHeader, CardContent, IconButton, Divider, Typography } from "@material-ui/core";
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import React from "react";
import { goods } from "../data/goods";


const useStyles = makeStyles({
  root: {
    height: "450px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    transition: ".4s ease 0s",
    "&:hover": {
      transform: "scale(1.01)",
    },
  },
  footer: {
    marginTop: "1.5rem",
  },
});
export const CatalogueItem: React.FC = () => {
  const classes = useStyles();
  return (
    <Card elevation={3} className={classes.root}>
      <CardHeader
        action={
          <IconButton> 
            <ShoppingBasketIcon />
          </IconButton>
        }
      />
      <Divider />
      <CardContent>
        <Typography variant="body2">-</Typography>
        <Typography
          variant="subtitle2"
          color="textSecondary"
          className={classes.footer}
        >
          Author: -
        </Typography>
        <Typography variant="subtitle2" color="textSecondary">
          Pages: -
        </Typography>
        <Typography variant="subtitle2" color="textSecondary">
          Publisher: -
        </Typography>
        <Typography variant="subtitle2" color="textSecondary">
          Price: -$
        </Typography>
      </CardContent>
    </Card>
  )
}