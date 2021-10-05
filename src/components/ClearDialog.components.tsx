import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@material-ui/core";
import React from "react";
import { useActions } from "../hooks/action.hook";
import { useTypedSelector } from "../hooks/typed-selector.hook";

export const ClearDialog: React.FC = (): JSX.Element => {
  const { closeDialog, deleteAllItems } = useActions();
  const { isOpen } = useTypedSelector((state) => state.dialog);
  const close = (e: React.MouseEvent<HTMLButtonElement>) => {
    deleteAllItems();
    closeDialog();
  }
  return (
    <Dialog open={isOpen} onClose={closeDialog}>
      <DialogTitle style={{ fontWeight: "bolder" }}>
        Delete all items?
      </DialogTitle>
      <DialogContent>
        <DialogContentText variant="body1" color="textPrimary">
          Do you really want to remove all items from your cart? This action
          cannot be undone
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button size="large" onClick={closeDialog}>
          <span style={{ fontWeight: "bolder" }}>No</span>
        </Button>
        <Button
          size="large"
          onClick={close}
        >
          <span style={{ fontWeight: "bolder" }}>Yes</span>
        </Button>
      </DialogActions>
    </Dialog>
  );
};
