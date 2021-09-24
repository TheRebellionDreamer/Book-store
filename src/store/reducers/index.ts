import { combineReducers } from "redux";
import { notificationReducer } from "./notification.reducer";
import { shopListReducer } from "./shopList.reducer";

export const rootReducer = combineReducers({
  shopList: shopListReducer,
  notification: notificationReducer
})

export type RootState = ReturnType<typeof rootReducer>