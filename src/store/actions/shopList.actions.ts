import { Dispatch } from "react";
import { IGood } from "../../interfaces";
import { addItem } from "../action-creators/addItem.action-creators";
import { removeItem } from "../action-creators/removeItem.action-creators";
import { ShopListAction } from "../types/shopList.types";

export const addInBag = (good: IGood) => (dispatch: Dispatch<ShopListAction>) =>
  dispatch(addItem(good));

export const removeInBag =
  (id: IGood["id"]) => (dispatch: Dispatch<ShopListAction>) =>
    dispatch(removeItem(id));
