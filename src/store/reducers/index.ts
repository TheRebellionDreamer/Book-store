import { combineReducers } from "redux";
import { notificationReducer } from "./notification.reducer";
import { shopListReducer } from "./shopList.reducer";
import {dialogReducer} from "./dialog.reducer"

export const rootReducer = combineReducers({
  shopList: shopListReducer,
  notification: notificationReducer,
  dialog: dialogReducer
})

export type RootState = ReturnType<typeof rootReducer>