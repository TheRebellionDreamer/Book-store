import {
  Container,
  Typography,
  makeStyles,
  Dialog,
  InputAdornment,
  Box,
} from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import { FC } from "react";
import { IRegistrationProps, IUser } from "../interfaces";
import axios, { AxiosResponse } from "axios";
import { StyledTextField } from "../custom/StyledTextField.custom";
import { StyledButton } from "../custom/StyledButton.custom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
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
    display: "flex",
    justifyContent: "center",
    marginBottom: "2rem",
  },
  icon: {
    fontSize: "120px",
    margin: "0 auto",
    paddingTop: "2rem",
  },
});

export const Registration: FC<IRegistrationProps> = ({
  openRegistrarion,
  setOpenRegistration,
  setUserLoggedIn,
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
    
  };
  const { register, handleSubmit, formState } = useForm(formOptions);
  const { showNotification } = useActions();
  const { errors } = formState;

  if (errors.login || errors.password) {
    showNotification({
      message: "Incorrect email or password",
      type: "error",
    });
  }
  
  //?????????????? ??????????????????????
  const onSubmit = async (data: IUser): Promise<void> => {
    await axios
      .get("/users", {
        params: {
          login: data.login,
        },
      }) // ???????????? ???? ?????????????????????????? ?????????????????????????????? ?? ???????? ??????????????????????????
      .then((responce: AxiosResponse<IUser[]>): void => {
        !responce.data.length // ???????????????? ???? ???????????? ??????????????????
          ? axios
              .post("/users", {
                login: data.login,
                password: data.password,
              })
              .then((responce: AxiosResponse<IUser>) => {
                showNotification({
                  message: `Welcome to our team ${responce.data.login}`,
                  type: "success",
                });
                setUserLoggedIn(true);
                setOpenRegistration(false);
              })
          : showNotification({
              message: "This user is already registered",
              type: "info",
            });
      });
  };

  return (
    <Dialog
      open={openRegistrarion}
      onClose={(): void => setOpenRegistration(false)}
    >
      <Box className={classes.root}>
        <Box className={classes.headerOfDialog}>
          <PersonAddIcon className={classes.icon} color="action" />
          <Typography
            variant="h3"
            className={classes.header}
            color="textSecondary"
          >
            Registration
          </Typography>
        </Box>
        <form className={classes.container} onSubmit={handleSubmit(onSubmit)}>
          <Container className={classes.inputContainer}>
            <StyledTextField
              {...register("login", { required: true })}
              type="email"
              variant="outlined"
              className={classes.inputField}
              placeholder="Email"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircleIcon />
                  </InputAdornment>
                ),
              }}
            />
            <StyledTextField
              type="password"
              {...register("password", { required: true })}
              variant="outlined"
              className={classes.inputField}
              placeholder="Password"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <VpnKeyIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Container>
          <Container className={classes.buttonContainer}>
            <StyledButton
              type="submit"
              variant="contained"
              size="large"
              color="primary"
            >
              Registred
            </StyledButton>
          </Container>
        </form>
      </Box>
    </Dialog>
  );
};
