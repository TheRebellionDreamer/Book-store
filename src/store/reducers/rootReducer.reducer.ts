import { combineReducers } from "redux";
import { shopListReducer } from "./shopListReducer.reducer";
import { sumReducer } from "./sumReducer.reducer"

export const rootReducer = combineReducers({
  shopList: shopListReducer,
  sumCost: sumReducer,
})

export type RootState = ReturnType<typeof rootReducer>