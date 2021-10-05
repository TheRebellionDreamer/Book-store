import React from "react"
import {Paper, Box, Typography, Divider} from "@material-ui/core"
import { useTypedSelector } from "../hooks/typed-selector.hook";

export const OrderAmount: React.FC = (): JSX.Element => {
  const { totalCost, totalSize } = useTypedSelector((state) => state.shopList);
  return (
    <Paper style={{ marginTop: "1rem" }} elevation={3}>
        <Box style={{ padding: ".5rem" }}>
          <Box
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Typography
              style={{ padding: "1rem", fontWeight: "bolder" }}
              variant="h5"
            >
              Order amount:
            </Typography>
            <Typography
              style={{
                textAlign: "right",
                padding: "1rem",
                fontWeight: "bolder",
              }}
              variant="h5"
            >
              {totalCost} ₽
            </Typography>
          </Box>
          <Divider />
          <Box style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}>
            <Typography
              style={{ padding: "1rem", fontWeight: "bolder" }}
              variant="h5"
            >
              Total goods:
            </Typography>
            <Typography
              style={{
                textAlign: "right",
                padding: "1rem",
                fontWeight: "bolder",
              }}
              variant="h5"
            >
              {totalSize} pcs.
            </Typography>
          </Box>
        </Box>
      </Paper>
  )
}