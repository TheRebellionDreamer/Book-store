import { CLOSE_DIALOG_ACTION, dialogActions } from "../types/dialog.types";

export const createCloseDialog = (isOpen: boolean): CLOSE_DIALOG_ACTION => {
  return {type: dialogActions.CLOSE_DIALOG, payload: isOpen}
}