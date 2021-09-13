import React from "react";
import {
  AppBar,
  MenuList,
  Toolbar,
  MenuItem,
  makeStyles,
  Badge,
  Container,
  IconButton,
} from "@material-ui/core";
import { NavLink } from "react-router-dom";
import { useTypedSelector } from "../hooks/typed-selector.hook";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import { Authorisation } from "../pages/Authorisation.page";
import { Baggage } from "../pages/Baggage.page";
import AdbIcon from "@material-ui/icons/Adb";

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
  iconsContainer: {
    display: "flex",
    justifyContent: "flex-end",

    padding: 0,
  },
  title: {
    textAlign: "center",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  text: {
    padding: "1rem 2rem 1rem 2rem",
  },
});

export const NavBar: React.FC = (): JSX.Element => {
  const classes = useStyles();
  const { totalSize } = useTypedSelector((state) => state.shopList);
  const [authOpen, setAuthOpen] = React.useState<boolean>(false);
  const [bagOpen, setBagOpen] = React.useState<boolean>(false);
  const [cheked, setCheked] = React.useState<boolean>(false);
  const [userLoggedIn, setUserLoggedIn] = React.useState<boolean>(false);

  const handleClickOpen = () => {
    setAuthOpen(true);
    setCheked(true);
  };

  const handleClickOpenBag = () => {
    setBagOpen(true);
  };

  return (
    <AppBar>
      <Toolbar className={classes.toolBar}>
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
        <Container className={classes.iconsContainer}>
          <IconButton className={classes.button} onClick={handleClickOpenBag}>
            <Badge color="secondary" badgeContent={totalSize}>
              <LocalMallIcon />
            </Badge>
          </IconButton>
          <Baggage bagOpen={bagOpen} setBagOpen={setBagOpen} />
          {userLoggedIn ? (
            <IconButton>
              <AdbIcon className={classes.button} />
            </IconButton>
          ) : (<IconButton onClick={handleClickOpen}>
            <AccountCircleIcon className={classes.button}></AccountCircleIcon>
          </IconButton>)}
          <Authorisation authOpen={authOpen} setAuthOpen={setAuthOpen} setUserLoggedIn={setUserLoggedIn}/>
        </Container>
      </Toolbar>
    </AppBar>
  );
};
