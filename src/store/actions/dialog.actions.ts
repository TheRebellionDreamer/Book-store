import { Dispatch } from "react";
import { createOpenDialog } from "../action-creators/openDialog.action-creator";
import {DialogAction} from "../types/dialog.types"

export const openDialog = () => (dispatch: Dispatch<DialogAction>) => dispatch(createOpenDialog(true))