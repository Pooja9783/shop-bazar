import {
  GET_API_DATA,
  ADD_TO_CART,

} from "./actionType";

const initialState = {
  data: [],
  cart: [],

  isLoading: false,
  cartCount: 0,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_API_DATA:
      return { ...state, data: [...action.payload] };

    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };


    default:
      return state;
  }
};
