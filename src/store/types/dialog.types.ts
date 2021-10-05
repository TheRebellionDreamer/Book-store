export enum dialogActions {
  OPEN_DIALOG = "dialog/openDialog",
  CLOSE_DIALOG = "dialog/closeDialog"
}

export interface OPEN_DIALOG_ACTION {
  type: dialogActions.OPEN_DIALOG,
  payload: boolean
}

export interface CLOSE_DIALOG_ACTION {
  type: dialogActions.CLOSE_DIALOG,
  payload: boolean
}

export type DialogAction = OPEN_DIALOG_ACTION | CLOSE_DIALOG_ACTION

export interface DialogState {
  isOpen: boolean
}