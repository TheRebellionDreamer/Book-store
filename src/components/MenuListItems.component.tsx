import { MenuItem, MenuList, makeStyles, Box } from "@material-ui/core";
import React from "react";
import { NavLink } from "react-router-dom";

const useStyle = makeStyles({
  menuList: {
    display: "flex",
    flexDirection: "row",
  },
  button: {
    color: "white",
    textDecoration: "none",
  },
});

export const MenuListItem: React.FC = (): JSX.Element => {
  const classes = useStyle();
  return (
    <Box>
      <MenuList className={classes.menuList}>
        <NavLink to="/catalogue" className={classes.button}>
          <MenuItem>Catalogue</MenuItem>
        </NavLink>
        <NavLink to="/contacts" className={classes.button}>
          <MenuItem>Contacts</MenuItem>
        </NavLink>
        <NavLink to="/about-us" className={classes.button}>
          <MenuItem>About us</MenuItem>
        </NavLink>
      </MenuList>
    </Box>
  );
};
