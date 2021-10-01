import {
  Typography,
  makeStyles,
  Container,
  InputAdornment,
  Dialog,
  DialogActions,
  Link,
  Box,
} from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import React, { useState } from "react";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import { StyledTextField } from "../custom/StyledTextField.custom";
import { StyledButton } from "../custom/StyledButton.custom";
import { IAuthorisationProps, IUser } from "../interfaces";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import axios, { AxiosResponse } from "axios";
import { useActions } from "../hooks/action.hook";

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

export const Authorisation: React.FC<IAuthorisationProps> = ({
  authOpen,
  userLoggedIn,
  setAuthOpen,
  setUserLoggedIn,
  setOpenRegistration,
}): JSX.Element => {
  const classes = useStyle();
  const validationSchema = z.object({
    login: z
      .string()
      .email({ message: "Invalid email address" })
      .nonempty("Email is required")
      .regex(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      ),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .nonempty("Password is required")
      .regex(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/),
  });
  const formOptions = {
    resolver: zodResolver(validationSchema),
    shouldFocusError: true,
    shouldUseNativeValidation: true,
  };
  const { register, handleSubmit } = useForm(formOptions);
  const { showNotification } = useActions();
  const [isError, setIsError] = useState<boolean>(false);
  const handleOpenRegistration = () => {
    if (!userLoggedIn) {
      setOpenRegistration(true);
      setAuthOpen(false);
      setOpenRegistration(true);
    }
  };

  // Функция авторизации
  const onSubmit = async (data: IUser): Promise<void> => {
    await axios
      .get("/users", {
        params: {
          login: data.login,
        },
      })
      .then((response: AxiosResponse<IUser[]>) => {
        if (
          response.data[0].login === data.login &&
          response.data[0].password === data.password
        ) {
          showNotification({
            message: `Welcome back, ${data.login}`,
            type: "success",
          });
          setUserLoggedIn(true);
          setAuthOpen(false);
        } else {
          showNotification({
            message: `Please verify that the data entered is correct`,
            type: "error",
          });
        }
      });
  };

  return (
    <Container>
      <Dialog open={authOpen} onClose={() => setAuthOpen(false)}>
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
          <form className={classes.container} onSubmit={handleSubmit(onSubmit)}>
            <Box className={classes.inputContainer}>
              <StyledTextField
                {...register("login", { required: true })}
                name="login"
                variant="outlined"
                className={classes.inputField}
                placeholder="Email"
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
                {...register("password", { required: true })}
                name="password"
                variant="outlined"
                className={classes.inputField}
                placeholder="Password"
                type="password"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <VpnKeyIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
            <DialogActions className={classes.actions}>
              <Box className={classes.buttonContainer}>
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
                  onClick={() => setAuthOpen(false)}
                >
                  Cancel
                </StyledButton>
              </Box>
              <Link variant="body1">Forgot password?</Link>
              <Link variant="body1" onClick={handleOpenRegistration} href="#">
                Registration
              </Link>
            </DialogActions>
          </form>
        </Box>
      </Dialog>
    </Container>
  );
};
