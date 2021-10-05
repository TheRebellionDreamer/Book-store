import { Dispatch } from "react";
import { createCloseDialog } from "../action-creators/closeDialog.action-creator";
import { createOpenDialog } from "../action-creators/openDialog.action-creator";
import {DialogAction} from "../types/dialog.types"

export const openDialog = () => (dispatch: Dispatch<DialogAction>) => dispatch(createOpenDialog())

export const closeDialog = () => (dispatch: Dispatch<DialogAction>) => dispatch(createCloseDialog())