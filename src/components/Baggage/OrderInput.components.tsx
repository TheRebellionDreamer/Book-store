import { TextField, Box, InputAdornment, makeStyles } from "@material-ui/core";

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
}
export const OrderInput: React.FC<OrderInputProps> = ({
  icon,
  message,
}): JSX.Element => {
  const classes = useStyle();
  return (
    <Box className={classes.input}>
      <TextField
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
