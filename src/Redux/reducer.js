import {
  GET_API_DATA,
  ADD_TO_CART,
  REMOVE_TO_CART,
  INCREMENT_QUANTITY,
  DECREMENT_QUANTITY,
} from "./actionType";

const initialState = {
  data: [],
  cart: [],
  isLoading: false,
  quantity: 1,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    // getting api data
    case GET_API_DATA:
      return { ...state, data: [...action.payload] };

    //add to cart
    case ADD_TO_CART:
      const newItem = action.payload;
      // Check if item already exists in the cart
      const itemIndex = state.cart.findIndex((item) => item.id === newItem.id);
      if (itemIndex !== -1) {
        // If item exists, return the existing cart state
        return state;
      } else {
        // If item does not exist, add it to the cart
        return {
          ...state,
          cart: [...state.cart, newItem],
        };
      }

    //increment quantity of an item
    case INCREMENT_QUANTITY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };
    //remove an item from cart
    case REMOVE_TO_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id != action.payload),
      };

    default:
      return state;
  }
};
