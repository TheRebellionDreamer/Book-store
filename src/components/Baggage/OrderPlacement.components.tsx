import {
  Box,
  Button,
  Divider,
  makeStyles,
  Paper,
} from "@material-ui/core";
import {
  Public,
  LocationCity,
  AddLocationOutlined,
  PersonOutline,
  LocalPhoneOutlined,
} from "@material-ui/icons/";
import { OrderInput } from "./OrderInput.components";

const useStyle = makeStyles({
  root: {
    background: "rgba(0,0,0,.02)",
    width: "28vw",
    maxHeight: "30rem",
    position: "fixed",
    right: 0,
    marginRight: "10vw",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
  },
  
});

const sendMessage = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  alert("Sending data");
};

export const OrderPlacement: React.FC = (): JSX.Element => {
  const classes = useStyle();
  return (
    <Paper className={classes.root}>
      <form onSubmit={sendMessage}>
        <Box className={classes.container}>
          <OrderInput icon={<Public />} message={"Your country"} />
          <OrderInput icon={<LocationCity />} message={"City"} />
          <OrderInput icon={<AddLocationOutlined />} message={"Adress"} />
          <OrderInput icon={<PersonOutline />} message={"Name"} />
          <OrderInput icon={<LocalPhoneOutlined />} message={"Tel."} />
        </Box>
        <Divider variant="middle" />
        <Box className={classes.container}>
          <Button
            type="submit"
            color="primary"
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
