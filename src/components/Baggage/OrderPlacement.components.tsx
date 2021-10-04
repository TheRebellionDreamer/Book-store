import { Box, Button, Divider, makeStyles, Paper } from "@material-ui/core";
import {
  Public,
  LocationCity,
  AddLocationOutlined,
  PersonOutline,
  LocalPhoneOutlined,
} from "@material-ui/icons/";
import { OrderInput } from "./OrderInput.components";
import axios, { AxiosResponse } from "axios";
import { useActions } from "../../hooks/action.hook";

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

export const OrderPlacement: React.FC = (): JSX.Element => {
  const {showNotification} = useActions();
  const { register, handleSubmit, formState } = useForm(formOptions);
  interface IOrder {
    country: string;
    city: string;
    adress: string;
    name: string;
    tel: string;
  }

  const onSubmit = async (data: IOrder): Promise<void> => {
    await axios
      .post("/orders", {
        country: data.country,
        city: data.city,
        adress: data.adress,
        name: data.name,
        tel: data.tel,
      })
      .then((response: AxiosResponse<IOrder>): void => {
        showNotification({
          message: "Thank you for the order, to clarify the data, the manager will contact you",
          type: "info"
        })
      });
  };
  const classes = useStyle();
  return (
    <Paper className={classes.root}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box className={classes.container}>
          <OrderInput
            icon={<Public />}
            message={"Your country"}
            type={"country"}
          />
          <OrderInput icon={<LocationCity />} message={"City"} type={"city"} />
          <OrderInput
            icon={<AddLocationOutlined />}
            message={"Adress"}
            type={"adress"}
          />
          <OrderInput icon={<PersonOutline />} message={"Name"} type={"name"} />
          <OrderInput
            icon={<LocalPhoneOutlined />}
            message={"Tel (example: +79307033812)"}
            type={"tel"}
          />
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
