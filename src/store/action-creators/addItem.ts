import { IGood } from "../../interfaces"
import { shopListActions } from "../actions/ShopListActions"

export const addItem = (payload: IGood) => {
  return { type: shopListActions.ADD_ITEM, payload: payload }
}