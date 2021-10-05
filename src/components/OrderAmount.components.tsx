import React, { useState } from "react";
import {
  Paper,
  Box,
  Typography,
  Divider,
  Button,
} from "@material-ui/core";
import { useTypedSelector } from "../hooks/typed-selector.hook";
import { useActions } from "../hooks/action.hook";

export const OrderAmount: React.FC = (): JSX.Element => {
  const { totalCost, totalSize } = useTypedSelector((state) => state.shopList);
  const [dialogIsOpen, setDialogIsOpen] = useState<boolean>(false);
  const { deleteAllItems } = useActions();
  return (
    <Paper style={{ marginTop: "1rem" }} elevation={3}>
      <Box>
        <Box
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Typography
            style={{
              padding: "1rem 1rem .5rem 1rem",
              fontWeight: "bolder",
            }}
            variant="h5"
          >
            Order amount:
          </Typography>
          <Typography
            style={{
              textAlign: "right",
              padding: "1rem 1rem .5rem 1rem",
              fontWeight: "bolder",
            }}
            variant="h5"
          >
            {totalCost} ₽
          </Typography>
        </Box>
        <Box
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Typography
            style={{ padding: ".5rem 1rem ", fontWeight: "bolder" }}
            variant="h5"
          >
            Total goods:
          </Typography>
          <Typography
            style={{
              textAlign: "right",
              padding: ".5rem 1rem ",
              fontWeight: "bolder",
            }}
            variant="h5"
          >
            {totalSize} pcs.
          </Typography>
        </Box>
        <Divider />
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
          }}
        >
          <Button
            onClick={() => setDialogIsOpen(true)}
            variant="contained"
            color="primary"
            style={{ margin: "1rem" }}
          >
            Clear
          </Button>
        </Box>
        
      </Box>
    </Paper>
  );
};
