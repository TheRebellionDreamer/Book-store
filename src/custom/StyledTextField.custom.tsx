import { styled, TextField } from "@material-ui/core";

export const StyledTextField = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderRadius: "30px"
    }
  },
});
