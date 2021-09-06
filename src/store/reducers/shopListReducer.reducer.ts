import { IGood } from "../../data/goods.data";

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

export type ShopListState = {
  item: IGood;
  count: number;
}[];

export const shopListReducer = (
  state: ShopListState = [],
  action: ShopListAction
): ShopListState => {
  switch (action.type) {
    case shopListActions.ADD_ITEM:
      const itemIndex = state.findIndex(
        ({ item }) => item.id === action.payload.id
      );
      if (itemIndex === -1) {
        return state.concat({ item: action.payload, count: 1 });
      }
      return state.map(({ item, count }, index) => ({
        item,
        count: index === itemIndex ? count + 1 : count,
      }));
    default:
      return state;
  }
};
