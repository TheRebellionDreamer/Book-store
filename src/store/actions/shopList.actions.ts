import { Dispatch } from "react";
import { IGood } from "../../interfaces";
import { createAddItem } from "../action-creators/addItem.action-creators";
import { createRemoveItem } from "../action-creators/removeItem.action-creators";
import { ShopListAction } from "../types/shopList.types";

export const addInBag = (good: IGood) => (dispatch: Dispatch<ShopListAction>) =>
  dispatch(createAddItem(good));

export const removeInBag =
  (id: IGood["id"]) => (dispatch: Dispatch<ShopListAction>) =>
    dispatch(createRemoveItem(id));
