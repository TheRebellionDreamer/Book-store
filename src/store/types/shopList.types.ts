import { IGood } from "../../interfaces/index";

export enum shopListActions {
  ADD_ITEM = "shopList/addItem",
  REMOVE_ITEM = "shopList/removeItem",
}

export interface ADD_ITEM_ACTION {
  type: shopListActions.ADD_ITEM;
  payload: IGood;
}

export interface REMOVE_ITEM_ACTION {
  type: shopListActions.REMOVE_ITEM;
  payload: IGood["id"];
}

export type ShopListAction = ADD_ITEM_ACTION | REMOVE_ITEM_ACTION;

export interface ShopListState {
  products: Array<{
    item: IGood,
    count: number 
  }>,
  totalSize: number,
  totalCost: number,
}