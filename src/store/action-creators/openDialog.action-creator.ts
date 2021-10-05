import { dialogActions, OPEN_DIALOG_ACTION } from "../types/dialog.types";

export const createOpenDialog = (isOpen: boolean): OPEN_DIALOG_ACTION => {
  return {type: dialogActions.OPEN_DIALOG, payload: isOpen}
}