import { IGood } from "../../interfaces"
import { ADD_ITEM_ACTION, shopListActions } from "../types/shopList.types"

export const createAddItem = (payload: IGood): ADD_ITEM_ACTION => {
  return { type: shopListActions.ADD_ITEM, payload: payload }
}