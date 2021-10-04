
import { IGood } from "../../interfaces"
import {REMOVE_ITEM_ACTION, shopListActions} from "../types/shopList.types"

export const removeItem = (id: IGood["id"]): REMOVE_ITEM_ACTION => {
  return {type: shopListActions.REMOVE_ITEM, payload: id}
}