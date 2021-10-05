import {DELETE_ALL_ITEMS_ACTION, shopListActions} from "../types/shopList.types"

export const createDeleteAllItems = (): DELETE_ALL_ITEMS_ACTION => {
  return {type: shopListActions.DELETE_ALL_ITEMS}
}