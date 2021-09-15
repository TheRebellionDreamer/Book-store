import {
  Container,
  Typography,
  makeStyles,
  TextField,
  Button,
  Snackbar,
  Dialog,
} from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import React, { useState, FC, useEffect } from "react";

const useStyle = makeStyles({
  container: {
    margin: "5rem 0rem 5rem 0rem",
    textAlign: "center",
  },
  inputContainer: {
    display: "flex",
    flexDirection: "column",
  },
  inputField: {
    marginBottom: "1rem",
  },
  typography: {
    marginBottom: "2rem",
  },
});
interface IRegistrationProps {
  openRegistrarion: boolean;
  setOpenRegistration(value: boolean): void;
}

export const Registration: FC<IRegistrationProps> = ({ openRegistrarion, setOpenRegistration }): JSX.Element => {
  const classes = useStyle();
  const [email, setEmail] = useState<string>("");
  const [emailIsValidate, setEmailIsValidate] = useState<boolean>(false);
  const [passwordIsValidate, setPasswordIsValidate] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("");
  const [emailSnackbarIsOpen, setEmailSnackbarIsOpen] = useState<boolean>(false);
  const [passwordSnackbarIsOpen, setPasswordSnackbarIsOpen] = useState<boolean>(false);
  const [formValid, setFormValid] = useState<boolean>(false);

  useEffect(() => {
    if (emailIsValidate && passwordIsValidate) {
      setFormValid(true);
    } else {
      setFormValid(false);
    }
  }, [emailIsValidate, passwordIsValidate]);

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

  const handleClose = () => {
    setOpenRegistration(false);
  }

  return (
    <Dialog open={openRegistrarion} onClose={handleClose}>
      <form className={classes.container}>
        <Typography variant="h5" className={classes.typography}>
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
            name="password"
            variant="outlined"
            className={classes.inputField}
            placeholder="Password"
            onChange={changePassword}
            value={password}
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
        <Button type="submit" disabled={!formValid} variant="contained">
          Registred
        </Button>
      </form>
    </Dialog>
  );
};
