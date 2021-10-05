import { IGood } from "../../interfaces/index";

export enum shopListActions {
  ADD_ITEM = "shopList/addItem",
  REMOVE_ITEM = "shopList/removeItem",
  DELETE_ALL_ITEMS = "shopList/deleteAllItems"
}

export interface ADD_ITEM_ACTION {
  type: shopListActions.ADD_ITEM;
  payload: IGood;
}

export interface REMOVE_ITEM_ACTION {
  type: shopListActions.REMOVE_ITEM;
  payload: IGood["id"];
}

export interface DELETE_ALL_ITEMS_ACTION {
  type: shopListActions.DELETE_ALL_ITEMS;
  payload?: null
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