import {DELETE_ALL_ITEMS_ACTION, shopListActions} from "../types/shopList.types"

export const createDeleteAllItems = (): DELETE_ALL_ITEMS_ACTION => {
  console.log("Deleting all items")
  return {type: shopListActions.DELETE_ALL_ITEMS}
}