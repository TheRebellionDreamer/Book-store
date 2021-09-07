import React from "react";
import {
  AppBar,
  MenuList,
  Toolbar,
  MenuItem,
  makeStyles,
  Button,
  Badge
} from "@material-ui/core";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import { NavLink } from "react-router-dom";
import { useTypedSelector } from "../hooks/typed-selector.hook";

const useStyles = makeStyles({
  toolBar: {
    display: "flex",
    justifyContent: "space-between",
  },
  menuList: {
    display: "flex",
    flexDirection: "row",
  },
  button: {
    color: "white",
    textDecoration: "none",
  },
});

export const NavBar: React.FC = (): JSX.Element => {
  const classes = useStyles();
  const {totalSize} = useTypedSelector((state) => state.shopList);
  
  return (
    <AppBar>
      <Toolbar className={classes.toolBar}>
        <MenuList className={classes.menuList}>
          <NavLink to="/catalogue" className={classes.button}>
            <MenuItem>Catalogue</MenuItem>
          </NavLink>
          <MenuItem>Contacts</MenuItem>
          <NavLink to="/about-us" className={classes.button}>
            <MenuItem>About us</MenuItem>
          </NavLink>
        </MenuList>
        <NavLink to="/baggage">
          <Button endIcon={<Badge color="secondary" badgeContent={totalSize}><LocalMallIcon /></Badge>} className={classes.button}>
            Baggage
          </Button>
        </NavLink>
      </Toolbar>
    </AppBar>
  );
};
