import { CLOSE_DIALOG_ACTION, dialogActions } from "../types/dialog.types";

export const createCloseDialog = (): CLOSE_DIALOG_ACTION => {
  console.log("Close dialog")
  return {type: dialogActions.CLOSE_DIALOG, payload: false}
}