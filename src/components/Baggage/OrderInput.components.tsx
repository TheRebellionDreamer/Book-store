import { TextField, Box, InputAdornment, makeStyles } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const useStyle = makeStyles({
  textField: {
    // width: "20em",
  },
  input: {
    display: "flex",
    justifyContent: "space-between",
    padding: "1rem",
  },
});
interface OrderInputProps {
  icon: JSX.Element;
  message: string;
  type: string
}
export const OrderInput: React.FC<OrderInputProps> = ({
  icon,
  message,
  type
}): JSX.Element => {
  const classes = useStyle();

  const validationSchema = z.object({
    country: z
      .string()
      .min(3, "Minimum length 3 symbols")
      .nonempty("Country is required")
      .regex(
        /^[a-zA-Z0-9_ ]*$/
      ),
    city: z
      .string()
      .min(2, "Minimum length 2 symbols")
      .nonempty("City is required")
      .regex(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/),
    adress: z
        .string()
        .nonempty("Adress is required"),
    name: z
        .string()
        .min(2, "Minimum length 2 symbols")
        .nonempty("Name is required")
        .regex(/^[A-Za-z ]*$/),
    tel: z
        .string()
        .min(5, "Minimum 5 numbers")
        .nonempty("Telephone is required")
        .regex(/^[0-9]*$/),
  });
  const formOptions = {
    resolver: zodResolver(validationSchema),
    shouldFocusError: true,
  };
  const { register, handleSubmit, formState } = useForm(formOptions);
  return (
    <Box className={classes.input}>
      <TextField
        {...register(type, {required: true})}
        fullWidth
        placeholder={message}
        variant="outlined"
        size="small"
        className={classes.textField}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">{icon}</InputAdornment>
          ),
        }}
      />
    </Box>
  );
};
