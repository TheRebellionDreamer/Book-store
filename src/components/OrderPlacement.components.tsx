import {
  Box,
  Button,
  Divider,
  FormControl,
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

const useStyle = makeStyles({
  root: {
    background: "rgba(0,0,0,.02)",
    width: "28vw",
  },
  input: {
    display: "flex",
    justifyContent: "space-between",
    padding: "1rem",
  },
  inputContainer: {
    display: "flex",
    justifyContent: "flex-end",
  },
  textField: {
    // width: "20em",
  },
});

export const OrderPlacement: React.FC = (): JSX.Element => {
  const classes = useStyle();
  return (
    <Paper className={classes.root}>
      <FormControl className={classes.inputContainer}>
        <Box className={classes.input}>
          <TextField
            fullWidth
            placeholder="Your country"
            variant="outlined"
            size="small"
            className={classes.textField}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Public />
                </InputAdornment>
              ),
            }}
          />
        </Box>
        <Box className={classes.input}>
          <TextField
            fullWidth
            placeholder="City"
            variant="outlined"
            size="small"
            className={classes.textField}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LocationCity />
                </InputAdornment>
              ),
            }}
          />
        </Box>
        <Box className={classes.input}>
          <TextField
            fullWidth
            placeholder="Adress"
            variant="outlined"
            size="small"
            className={classes.textField}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AddLocationOutlined />
                </InputAdornment>
              ),
            }}
          />
        </Box>
        <Box className={classes.input}>
          <TextField
            fullWidth
            placeholder="Name"
            variant="outlined"
            size="small"
            className={classes.textField}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PersonOutline />
                </InputAdornment>
              ),
            }}
          />
        </Box>
        <Box className={classes.input}>
          <TextField
            fullWidth
            placeholder="Tel."
            variant="outlined"
            size="small"
            className={classes.textField}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LocalPhoneOutlined />
                </InputAdornment>
              ),
            }}
          />
        </Box>
      </FormControl>
      <Divider variant="middle" />
      <Box className={classes.inputContainer}>
        <Button color="primary" variant="contained" style={{ margin: "1rem" }}>
          Place an order
        </Button>
      </Box>
    </Paper>
  );
};
