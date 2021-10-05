import React from "react";
import {
  AppBar,
  Toolbar,
  makeStyles,
  Badge,
  Container,
  IconButton,
  Box,
} from "@material-ui/core";
import { useTypedSelector } from "../hooks/typed-selector.hook";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import { Authorisation } from "./Authorisation.components";
import { MenuOfUser } from "./MenuOfUser.component";
import { MenuListItem } from "./MenuListItems.component";
import { Registration } from "./Registration.components";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles({
  toolBar: {
    display: "flex",
    justifyContent: "space-between",
  },
  button: {
    color: "white",
    textDecoration: "none",
  },
  iconsContainer: {
    display: "flex",
    justifyContent: "flex-end",
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
  switchContainer: {
    display: "flex",
    justifyContent: "center",
  },
});

export const NavBar: React.FC = (): JSX.Element => {
  const classes = useStyles();
  const { totalSize } = useTypedSelector((state) => state.shopList);
  const [authOpen, setAuthOpen] = React.useState<boolean>(false);
  const [userLoggedIn, setUserLoggedIn] = React.useState<boolean>(false);
  const [openRegistrarion, setOpenRegistration] =
    React.useState<boolean>(false);

  const handleClickOpen = () => {
    setAuthOpen(true);
  };

  const handleClickSignOut = () => {
    if (userLoggedIn) {
      setUserLoggedIn(false);
    }
  };

  return (
    <Container>
      <AppBar>
        <Toolbar className={classes.toolBar}>
          <MenuListItem />
          <Box className={classes.iconsContainer}>
            <NavLink to="/baggage">
              <IconButton className={classes.button}>
                <Badge color="secondary" badgeContent={totalSize}>
                  <LocalMallIcon />
                </Badge>
              </IconButton>
            </NavLink>
            {userLoggedIn ? (
              <MenuOfUser handleClickSignOut={handleClickSignOut} />
            ) : (
              <IconButton onClick={handleClickOpen}>
                <AccountCircleIcon
                  className={classes.button}
                ></AccountCircleIcon>
              </IconButton>
            )}
            <Authorisation
              authOpen={authOpen}
              setAuthOpen={setAuthOpen}
              setUserLoggedIn={setUserLoggedIn}
              userLoggedIn={userLoggedIn}
              setOpenRegistration={setOpenRegistration}
            />
            <Registration
              openRegistrarion={openRegistrarion}
              setOpenRegistration={setOpenRegistration}
              setUserLoggedIn={setUserLoggedIn}
            />
          </Box>
        </Toolbar>
      </AppBar>
    </Container>
  );
};
