import { Dispatch } from "react";
import { IGood } from "../../interfaces";
import { createAddItem } from "../action-creators/addItem.action-creators";
import { createRemoveItem } from "../action-creators/removeItem.action-creators";
import { ShopListAction } from "../types/shopList.types";
import {createDeleteAllItems} from "../action-creators/deleteAllItems.action-creators"

export const addItem = (good: IGood) => (dispatch: Dispatch<ShopListAction>) =>
  dispatch(createAddItem(good));

export const removeItem =
  (id: IGood["id"]) => (dispatch: Dispatch<ShopListAction>) =>
    dispatch(createRemoveItem(id));

export const deleteAllItems = () => (dispatch: Dispatch<ShopListAction>) => dispatch(createDeleteAllItems())