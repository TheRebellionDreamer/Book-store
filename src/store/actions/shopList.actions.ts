import { Dispatch } from "react";
import { IGood } from "../../interfaces";
import { addItem } from "../action-creators/addItem.action-creators";
import { ShopListAction } from "../types/shopList.types";

export const addInBag = (good: IGood) => (dispatch: Dispatch<ShopListAction>) =>
  dispatch(addItem(good));
