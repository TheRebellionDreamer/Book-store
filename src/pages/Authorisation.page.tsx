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
} from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import React, { useEffect, useState } from "react";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import { IUser } from "../types/types";
import axios from "axios";

const useStyle = makeStyles({
  container: {
    padding: "2rem 0rem 2rem 0rem",
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
    width: "30vw",
    textAlign: "center",
    fontWeight: 700,
    // textShadow: "2px 5px 5px rgba(150, 150, 150, 0.74)",
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
});

interface IProps {
  authOpen: boolean;
  setAuthOpen(value: boolean): void;
}

export const Authorisation: React.FC<IProps> = ({
  authOpen,
  setAuthOpen,
}): JSX.Element => {
  const classes = useStyle();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [users, setUsers] = useState<IUser[]>([]);

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
      alert("Welcome")
      handleClose();
    } else {
      alert("User not found!")
    }
    setEmail("");
    setPassword("");
  };

  const handleClose = () => {
    setAuthOpen(false);
  };

  return (
    <Dialog open={authOpen} onClose={handleClose}>
      <form className={classes.container} onSubmit={handleSubmit}>
        <Typography
          variant="h3"
          className={classes.header}
          color="textSecondary"
        >
          Authorisation
        </Typography>
        <Container className={classes.inputContainer}>
          <TextField
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
          <TextField
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
            <Button
              type="submit"
              variant="contained"
              size="large"
              color="primary"
            >
              Login
            </Button>
            <Button
              type="button"
              variant="contained"
              size="large"
              color="primary"
              onClick={handleClose}
            >
              Cancel
            </Button>
          </Container>
          <Link variant="body1">Forgot password?</Link>
        </DialogActions>
      </form>
    </Dialog>
  );
};
