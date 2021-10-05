import { dialogActions, OPEN_DIALOG_ACTION } from "../types/dialog.types";

export const createOpenDialog = (): OPEN_DIALOG_ACTION => {
  console.log("Open dialog");
  return {type: dialogActions.OPEN_DIALOG, payload: true}
}