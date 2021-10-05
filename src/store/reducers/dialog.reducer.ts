import { DialogAction, dialogActions, DialogState } from "../types/dialog.types";

const InitialState = {
  isOpen: false
}

export const dialogReducer = (state: DialogState = InitialState, action: DialogAction): DialogState => {
  switch (action.type) {
    case dialogActions.OPEN_DIALOG:
      return {isOpen: state.isOpen = action.payload};

    case dialogActions.CLOSE_DIALOG:
      return {isOpen: state.isOpen = action.payload};
      
    default:
      return state;
  }
}