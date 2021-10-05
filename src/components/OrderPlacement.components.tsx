import {
  Box,
  Button,
  Divider,
  InputAdornment,
  makeStyles,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import {
  Public,
  LocationCity,
  AddLocationOutlined,
  PersonOutline,
  LocalPhoneOutlined,
} from "@material-ui/icons/";
import axios, { AxiosResponse } from "axios";
import { useActions } from "../hooks/action.hook";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const useStyle = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
  },
  input: {
    display: "flex",
    justifyContent: "space-between",
    padding: "1rem",
  },
});

export const OrderPlacement: React.FC = (): JSX.Element => {
  const { showNotification } = useActions();
  const classes = useStyle();

  const validationSchema = z.object({
    country: z
      .string()
      .min(3, "Minimum length 3 symbols")
      .nonempty("Country is required")
      .regex(/^[a-zA-Z0-9 ]*$/),
    city: z
      .string()
      .min(3, "Minimum length 3 symbols")
      .nonempty("City is required"),
    adress: z
      .string()
      .nonempty("Adress is required")
      .regex(/^[a-zA-Z0-9 ]*$/),
    name: z
      .string()
      .min(2, "Minimum length 2 symbols")
      .nonempty("Name is required")
      .regex(/^[A-Za-z ]*$/),
    tel: z
      .string()
      .min(5, "Minimum 5 numbers")
      .regex(/^[0-9]*$/),
  });

  const formOptions = {
    resolver: zodResolver(validationSchema),
    shouldFocusError: true,
    shouldUseNativeValidation: true,
  };

  const { register, handleSubmit } = useForm(formOptions);

  interface IOrder {
    country: string;
    city: string;
    adress: string;
    name: string;
    tel: string;
  }

  const onSubmit = async (data: IOrder): Promise<void> => {
    await axios
      .post("/orders", data)
      .then((response: AxiosResponse<IOrder>): void => {
        console.log(response.data);
        showNotification({
          message:
            "Thank you for the order, to clarify the data, the manager will contact you",
          type: "info",
        });
      });
  };

  type inputTypes = "country" | "city" | "adress" | "name" | "tel";
  interface IOrderForm {
    formField: inputTypes;
    icon: JSX.Element;
  }

  const orderForm: IOrderForm[] = [
    { formField: "country", icon: <Public /> },
    { formField: "city", icon: <LocationCity /> },
    { formField: "adress", icon: <AddLocationOutlined /> },
    { formField: "name", icon: <PersonOutline /> },
    { formField: "tel", icon: <LocalPhoneOutlined /> },
  ];

  return (
    <Paper elevation={3}>
      <Typography
          variant="h5"
          align="center"
          style={{ fontWeight: "bolder", paddingTop: "1rem" }}
        >
          Enter your information
        </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box className={classes.container}>
          {orderForm.map((inputField) => (
            <Box className={classes.input} key={inputField.formField}>
              <TextField
                {...register(inputField.formField, { required: true })}
                fullWidth
                placeholder={`Your ${inputField.formField}`}
                variant="outlined"
                size="small"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      {inputField.icon}
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
          ))}
        </Box>
        <Divider variant="middle" />
        <Box className={classes.container}>
          <Button
            type="submit"
            color="secondary"
            variant="contained"
            style={{ margin: "1rem" }}
          >
            Place an order
          </Button>
        </Box>
      </form>
    </Paper>
  );
};
