import { ActionTypes } from "../constants/action-types";

const initialState = {
  // products: [
  //   {
  //     id: 1,
  //     title: "Krunal",
  //     category: "Programmer",
  //   },
  products: [],
};

// Reducer have state and action as an parameter
export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      // return state;
      return { ...state, products: payload };
    default:
      return state;
  }
};

export const selectedProductReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_PRODUCT:
      return { ...state, ...payload };
    case ActionTypes.REMOVE_SELECTED_PRODUCT:
      return {};
    default:
      return state;
  }
};
