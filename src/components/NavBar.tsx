import React from "react";
import {
  AppBar,
  MenuList,
  Toolbar,
  MenuItem,
  makeStyles,
  Button,
} from "@material-ui/core";
import LocalMallIcon from "@material-ui/icons/LocalMall";

const useStyles = makeStyles({
  toolBar: {
    display: "flex",
    justifyContent: "space-between"
  },
  menuList: {
    display: "flex",
    flexDirection: "row",
  },
  button: {
    color: "white",
  }
});

export const NavBar: React.FC = () => {
  const classes = useStyles();
  return (
    <AppBar>
      <Toolbar className={classes.toolBar}>
        <MenuList className={classes.menuList}>
          <MenuItem>Home</MenuItem>
          <MenuItem>Catalog</MenuItem>
          <MenuItem>Contacts</MenuItem>
          <MenuItem>About us</MenuItem>
        </MenuList>
        <Button endIcon={<LocalMallIcon />} className={classes.button}>Baggage</Button>
      </Toolbar>
    </AppBar>
  );
};
