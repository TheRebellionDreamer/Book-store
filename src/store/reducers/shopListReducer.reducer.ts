import { IGood } from "../../data/goods.data";

export enum shopListActions {
  ADD_ITEM = 'shopList/addItem',
  REMOVE_ITEM = 'shopList/removeItem'
}

export interface ADD_ITEM_ACTION {
  type: shopListActions.ADD_ITEM,
  payload: IGood
}

export interface REMOVE_ITEM_ACTION {
  type: shopListActions.REMOVE_ITEM,
  payload: IGood['id']
}

export type ShopListAction = ADD_ITEM_ACTION | REMOVE_ITEM_ACTION


export type ShopListState = IGood[]

export const shopListReducer = (state: ShopListState = [], action: ShopListAction): ShopListState => {
  switch (action.type) {
    case shopListActions.ADD_ITEM:
      return state.concat(action.payload)
    case shopListActions.REMOVE_ITEM:
      return state.filter(igood => igood.id !== action.payload)
    default:
      return state;
  }
};
