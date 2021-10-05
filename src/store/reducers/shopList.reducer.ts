import {
  ShopListAction,
  ShopListState,
  shopListActions,
} from "../types/shopList.types";

const initialState = {
  products: [],
  totalSize: 0,
  totalCost: 0,
};

export const shopListReducer = (
  state: ShopListState = initialState,
  action: ShopListAction
): ShopListState => {
  switch (action.type) {
    case shopListActions.ADD_ITEM:
      const findIndex = state.products.findIndex(
        ({ item }) => item.id === action.payload.id
      );

      if (findIndex === -1) {
        return {
          products: state.products.concat({ item: action.payload, count: 1 }),
          totalSize: state.totalSize + 1,
          totalCost: state.totalCost + action.payload.price,
        };
      }

      return {
        products: state.products.map(({ item, count }) => {
          return item.id === action.payload.id
            ? { item, count: count + 1 }
            : { item, count };
        }),
        totalSize: state.totalSize + 1,
        totalCost: state.totalCost + action.payload.price,
      };

    case shopListActions.REMOVE_ITEM:
      const _findIndex = state.products.findIndex(
        ({ item }) => item.id === action.payload
      );

      const price = state.products[_findIndex].item.price;
      const products =
        state.products[_findIndex].count === 1
          ? state.products.filter(({ item }) => item.id !== action.payload)
          : state.products.map(({ item, count }) => {
              return item.id === action.payload
                ? { item, count: count - 1 }
                : { item, count };
            });

      return {
        products,
        totalSize: state.totalSize - 1,
        totalCost: state.totalCost - price,
      };

      case shopListActions.DELETE_ALL_ITEMS:
        return {
          products: state.products = [],
          totalCost: state.totalCost = 0,
          totalSize: state.totalSize = 0
        }

    default:
      return state;
  }
};
