export enum sumActions {
  ADD_TO_THE_SUM = "sum/addToTheSum",
  DEDUCT_FROM_THE_SUM = "sum/deductFromTheSum",
}

export type sumState = {
  totalCost: number;
};

export interface ADD_TO_THE_SUM {
  type: sumActions.ADD_TO_THE_SUM;
  payload: number;
}

export interface DEDUCT_FROM_THE_SUM {
  type: sumActions.DEDUCT_FROM_THE_SUM;
  payload: number;
}

export const initialState: sumState = {
  totalCost: 0,
};

export type sumAction = ADD_TO_THE_SUM | DEDUCT_FROM_THE_SUM;

export const sumReducer = (
  state: sumState = initialState,
  action: sumAction
): sumState => {
  switch (action.type) {
    case sumActions.ADD_TO_THE_SUM:
      return { ...state, totalCost: state.totalCost + action.payload };

    case sumActions.DEDUCT_FROM_THE_SUM:
      return { ...state, totalCost: state.totalCost - action.payload };

    default:
      return state;
  }
};
