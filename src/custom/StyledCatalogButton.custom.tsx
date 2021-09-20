import { Button, styled } from "@material-ui/core";

export const StyledCatalogButton = styled(Button)({
  borderRadius: "30px",
  boxShadow: "none",
  "&:hover": {
    backgroundColor: "#4527a0",
    color: "white"
  },
})