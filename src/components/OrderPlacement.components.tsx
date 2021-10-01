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
import Public from "@material-ui/icons/Public";

const useStyle = makeStyles({
  root: {
    background: "rgba(0,0,0,.02)",
    width: "35vw",
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
    width: "20em",
  },
});

export const OrderPlacement: React.FC = (): JSX.Element => {
  const classes = useStyle();
  return (
    <Paper className={classes.root}>
      <FormControl className={classes.inputContainer}>
        <Box className={classes.input}>
          <TextField
            placeholder="Your country"
            variant="outlined"
            size="small"
            className={classes.textField}
          />
          <Typography variant="h6" variantMapping={{ h6: "p" }}>
            Country
          </Typography>
        </Box>
        <Box className={classes.input}>
          <TextField
            placeholder="City"
            variant="outlined"
            size="small"
            className={classes.textField}
            inputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Public />
                </InputAdornment>
              ),
            }}
          />
          <Typography variant="h6" variantMapping={{ h6: "p" }}>
            City
          </Typography>
        </Box>
        <Box className={classes.input}>
          <TextField
            placeholder="Adress"
            variant="outlined"
            size="small"
            className={classes.textField}
          />
          <Typography variant="h6" variantMapping={{ h6: "p" }}>
            Your home adress
          </Typography>
        </Box>
        <Box className={classes.input}>
          <TextField
            placeholder="Name"
            variant="outlined"
            size="small"
            className={classes.textField}
          />
          <Typography variant="h6" variantMapping={{ h6: "p" }}>
            Name
          </Typography>
        </Box>
        <Box className={classes.input}>
          <TextField
            placeholder="Tel."
            variant="outlined"
            size="small"
            className={classes.textField}
          />
          <Typography variant="h6" variantMapping={{ h6: "p" }}>
            Phone
          </Typography>
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
