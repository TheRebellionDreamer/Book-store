import {
  Container,
  Typography,
  makeStyles,
  TextField,
  Button,
  Snackbar,
  Dialog,
  InputAdornment,
} from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import React, { useState, FC, useEffect } from "react";
import { IUser } from "../types/types";
import axios from "axios";

const useStyle = makeStyles({
  container: {
    margin: "5rem 0rem 5rem 0rem",
    textAlign: "center",
    width: "30rem",
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
  dialog: {
    width: "30rem",
  },
  header: {
    marginBottom: "3.5rem",
    paddingBottom: "1.5rem",
    width: "30vw",
    textAlign: "center",
    fontWeight: 700,
  },
  icon: {
    fontSize: "120px",
    margin: "0 auto",
    paddingTop: "2rem",
  },
});
interface IRegistrationProps {
  openRegistrarion: boolean;
  setOpenRegistration(value: boolean): void;
}

export const Registration: FC<IRegistrationProps> = ({
  openRegistrarion,
  setOpenRegistration,
}): JSX.Element => {
  const classes = useStyle();
  const [email, setEmail] = useState<string>("");
  const [emailIsValidate, setEmailIsValidate] = useState<boolean>(false);
  const [passwordIsValidate, setPasswordIsValidate] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("");
  const [emailSnackbarIsOpen, setEmailSnackbarIsOpen] =
    useState<boolean>(false);
  const [passwordSnackbarIsOpen, setPasswordSnackbarIsOpen] =
    useState<boolean>(false);
  const [formValid, setFormValid] = useState<boolean>(false);
  const [users, setUsers] = useState<IUser[]>([]);
  const [errorSnackbarIsOpen, setErrorSnackbarIsOpen] =
    useState<boolean>(false);

  useEffect(() => {
    if (emailIsValidate && passwordIsValidate) {
      setFormValid(true);
    } else {
      setFormValid(false);
    }
  }, [emailIsValidate, passwordIsValidate]);

  useEffect(() => {
    fetchUsers();
  }, []);

  async function fetchUsers() {
    try {
      const responce = await axios.get<IUser[]>("http://localhost:8000/users");
      setUsers(responce.data);
    } catch (error) {
      alert(error);
    }
  }

  const addNewUser = async (user: IUser) => {
    try {
      const responce = await axios.post<IUser[]>(
        "http://localhost:8000/users",
        user
      );
      console.log("responce: ", responce.data);
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  const handleSubmit: React.FormEventHandler = (
    e: React.FormEvent<HTMLInputElement>
  ) => {
    e.preventDefault();
    const newUser: IUser = {
      login: email,
      password: password,
    };
    console.log(newUser.login + " " + newUser.password)

    const findIndex = users.findIndex(
      (user) =>
        user.login === newUser.login && user.password === newUser.password
    );

    if (findIndex === -1) {
      alert("Такого пользователя нет в базе, регистрируем");
      addNewUser(newUser);
    } else {
      setErrorSnackbarIsOpen(true);
    }
  };

  const changePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;

    if (re.test(String(e.target.value))) {
      setPasswordSnackbarIsOpen(true);
      setPasswordIsValidate(true);
    } else {
      setPasswordIsValidate(false);
    }
  };

  const changeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (re.test(String(e.target.value).toLowerCase())) {
      setEmailSnackbarIsOpen(true);
      setEmailIsValidate(true);
      
    } else {
      setEmailIsValidate(false);
    }
  };

  const handleEmailClose = (e?: React.SyntheticEvent, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }
    setEmailSnackbarIsOpen(false);
  };

  const handlePasswordClose = (e?: React.SyntheticEvent, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }
    setPasswordSnackbarIsOpen(false);
  };

  const handleErrorClose = (e?: React.SyntheticEvent, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }
    setErrorSnackbarIsOpen(false);
  };

  const handleClose = () => {
    setOpenRegistration(false);
  };

  return (
    <Dialog open={openRegistrarion} onClose={handleClose}>
      <PersonAddIcon className={classes.icon} color="action" />
      <form className={classes.container} onSubmit={handleSubmit}>
        <Typography
          variant="h3"
          className={classes.header}
          color="textSecondary"
        >
          Registration
        </Typography>
        <Container className={classes.inputContainer}>
          <TextField
            name="email"
            variant="outlined"
            className={classes.inputField}
            placeholder="Email"
            value={email}
            onChange={changeEmail}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircleIcon />
                </InputAdornment>
              ),
            }}
          />
          <Snackbar
            open={emailSnackbarIsOpen}
            autoHideDuration={2000}
            onClose={handleEmailClose}
          >
            <Alert onClose={handleEmailClose} severity="success">
              Email is confirmed
            </Alert>
          </Snackbar>
          <TextField
            type="password"
            name="password"
            variant="outlined"
            className={classes.inputField}
            placeholder="Password"
            onChange={changePassword}
            value={password}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <VpnKeyIcon />
                </InputAdornment>
              ),
            }}
          />
          <Snackbar
            open={passwordSnackbarIsOpen}
            autoHideDuration={2000}
            onClose={handlePasswordClose}
          >
            <Alert onClose={handlePasswordClose} severity="success">
              Password is strong
            </Alert>
          </Snackbar>
        </Container>
        <Button
          type="submit"
          disabled={!formValid}
          variant="contained"
          size="large"
          color="primary"
        >
          Registred
        </Button>
        <Snackbar
          open={errorSnackbarIsOpen}
          autoHideDuration={4000}
          onClose={handleErrorClose}
        >
          <Alert onClose={handleErrorClose} severity="error" variant="filled">
            Such a user is already registered
          </Alert>
        </Snackbar>
      </form>
    </Dialog>
  );
};
