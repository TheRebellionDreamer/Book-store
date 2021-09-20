import {
  TextField,
  Typography,
  makeStyles,
  Container,
  Button,
  InputAdornment,
  Dialog,
  DialogActions,
  Link,
  Snackbar,
  Box,
} from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import React, { useEffect, useState } from "react";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import { IUser } from "../types/types";
import axios from "axios";
import { Alert } from "@material-ui/lab";
import { setTimeout } from "timers";
import { StyledTextField } from "../custom/StyledTextField.custom";
import { StyledButton } from "../custom/StyledButton.custom";

const useStyle = makeStyles({
  root: {
    padding: "1rem 2rem 1rem 2rem",
  },
  container: {
    padding: "2rem 0rem 2rem 0rem",
  },
  headerOfDialog: {
    display: "flex",
    flexDirection: "column",
  },
  inputContainer: {
    display: "flex",
    flexDirection: "column",
  },
  inputField: {
    marginBottom: "3rem",
  },
  typography: {
    marginBottom: "2rem",
  },
  header: {
    marginBottom: "3.5rem",
    paddingBottom: "1.5rem",
    textAlign: "center",
    fontWeight: 700,
  },
  actions: {
    display: "flex",
    flexDirection: "column",
  },
  buttonContainer: {
    width: "20rem",
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "2rem",
  },
  icon: {
    fontSize: "120px",
    margin: "0 auto",
    paddingTop: "2rem",
  },
});

interface IProps {
  authOpen: boolean;
  userLoggedIn: boolean;
  setAuthOpen(value: boolean): void;
  setUserLoggedIn(value: boolean): void;
  setOpenRegistration(value: boolean): void;
}

export const Authorisation: React.FC<IProps> = ({
  authOpen,
  userLoggedIn,
  setAuthOpen,
  setUserLoggedIn,
  setOpenRegistration,
}): JSX.Element => {
  const classes = useStyle();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [users, setUsers] = useState<IUser[]>([]);
  const [openError, setOpenError] = useState<boolean>(false);
  const [openSuccessful, setOpenSuccessful] = useState<boolean>(false);

  useEffect(() => {
    fetchUsers();
  }, []);

  async function fetchUsers() {
    try {
      const responce = await axios.get<IUser[]>("/users");
      setUsers(responce.data);
    } catch (error) {
      alert(error);
    }
  }

  const changeEmailHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const changePasswordHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit: React.FormEventHandler = (
    e: React.FormEvent<HTMLInputElement>
  ) => {
    e.preventDefault();
    const formUser: IUser = {
      login: email,
      password: password,
    };

    const findIndex = users.findIndex(
      (user) =>
        user.login === formUser.login && user.password === formUser.password
    );

    if (findIndex !== -1) {
      setTimeout(() => {
        handleClose();
        setEmail("");
        setPassword("");
      }, 2000);
      setOpenSuccessful(true);
      setTimeout(() => {
        setOpenSuccessful(false);
        setUserLoggedIn(true);
      }, 2000);
    } else {
      setOpenError(true);
    }
  };

  const handleClose = () => {
    setAuthOpen(false);
  };

  const handleErrorClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenError(false);
  };

  const handleSuccessfulClose = (
    event?: React.SyntheticEvent,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSuccessful(false);
  };

  const handleOpenRegistration = () => {
    if (!userLoggedIn) {
      setOpenRegistration(true);
      setAuthOpen(false);
      setOpenRegistration(true);
    }
  };
  return (
    <Dialog open={authOpen} onClose={handleClose}>
      <Box className={classes.root}>
        <Box className={classes.headerOfDialog}>
          <AccountCircleIcon className={classes.icon} color="action" />
          <Typography
            variant="h3"
            className={classes.header}
            color="textSecondary"
          >
            Authorisation
          </Typography>
        </Box>
        <form
          className={classes.container}
          onSubmit={handleSubmit}
          autoComplete="on"
        >
          <Container className={classes.inputContainer}>
            <StyledTextField
              variant="outlined"
              className={classes.inputField}
              placeholder="Email"
              onChange={changeEmailHandler}
              value={email}
              focused={true}
              type="email"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircleIcon />
                  </InputAdornment>
                ),
              }}
            />
            <StyledTextField
              variant="outlined"
              className={classes.inputField}
              placeholder="Password"
              onChange={changePasswordHandler}
              value={password}
              type="password"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <VpnKeyIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Container>
          <DialogActions className={classes.actions}>
            <Container className={classes.buttonContainer}>
              <StyledButton
                type="submit"
                variant="contained"
                size="large"
                color="primary"
              >
                Login
              </StyledButton>
              <StyledButton
                type="button"
                variant="contained"
                size="large"
                color="primary"
                onClick={handleClose}
              >
                Cancel
              </StyledButton>
            </Container>
            <Link variant="body1">Forgot password?</Link>
            <Link variant="body1" onClick={handleOpenRegistration} href="#">
              Registration
            </Link>
          </DialogActions>
        </form>
        <Snackbar
          open={openError}
          autoHideDuration={4000}
          onClose={handleErrorClose}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        >
          <Alert variant="filled" severity="error">
            User not found
          </Alert>
        </Snackbar>
        <Snackbar
          open={openSuccessful}
          onClose={handleSuccessfulClose}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        >
          <Alert variant="filled" severity="success">
            Welcome!
          </Alert>
        </Snackbar>
      </Box>
    </Dialog>
  );
};
