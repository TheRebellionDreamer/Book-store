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

export interface ShopListState {
  products: Array<{
    item: IGood,
    count: number 
  }>,
  totalSize: number,
  totalCost: number,
}

const initialState = {
  products: [],
  totalSize: 0,
  totalCost: 0
}

export const shopListReducer = (
  state: ShopListState = initialState,
  action: ShopListAction
): ShopListState => {
  switch (action.type) {
    case shopListActions.ADD_ITEM:
      const findIndex = state.products.findIndex(({item}) => item.id === action.payload.id)

      if(findIndex === -1) {
        return {
          products: state.products.concat({item: action.payload, count: 1}),
          totalSize: state.totalSize + 1,
          totalCost: state.totalCost + action.payload.price
        }
      }

      return {
        products: state.products.map(({item, count}) => {
          return item.id === action.payload.id
            ? {item, count: count + 1}
            : {item, count}
        }),
        totalSize: state.totalSize + 1,
        totalCost: state.totalCost + action.payload.price,
      }

    case shopListActions.REMOVE_ITEM:

      const _findIndex = state.products.findIndex(({item}) => item.id === action.payload)
      
      const price = state.products[_findIndex].item.price;
      const products = state.products[_findIndex].count === 1
        ? state.products.filter(({item}) => item.id !== action.payload)
        : state.products.map(({item, count}) => {
          return item.id === action.payload
            ? {item, count: count - 1}
            : {item, count}
        })

      return {
        products,
        totalSize: state.totalSize - 1,
        totalCost: state.totalCost - price,
      }

    default:
      return state;
  }
};
