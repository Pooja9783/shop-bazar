import {
  GET_API_DATA,
  ADD_TO_CART,
  REMOVE_TO_CART,
  INCREMENT_QUANTITY,
  DECREMENT_QUANTITY,
  CALCULATE_SUBTOTAL,
  CLEAR_CART,
} from "./actionType";

const initialState = {
  data: [],
  cart: [],
  isLoading: false,
  quantity: 1,
  subtotalPrice: 0,
  subtotalItem: 0,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    //-----------getting api data--------
    case GET_API_DATA:
      return { ...state, data: [...action.payload] };

    //------------add to cart-----------
    case ADD_TO_CART:
      const newItem = action.payload;
      // Check if item already exists in the cart
      const itemIndex = state.cart.findIndex((item) => item.id === newItem.id);
      if (itemIndex !== -1) {
        // If item exists, return the existing cart state
        return state;
      } else {
        // If item does not exist, add it to the cart
        const updatedItem = {
          ...newItem,
          quantity: 1, // Set the initial quantity to 1 or any desired value
        };
        return {
          ...state,
          cart: [...state.cart, updatedItem],
        };
      }

    //------increment quantity of an item--------
    case INCREMENT_QUANTITY:
      const productId = action.payload;
      // Find the product in the cart
      const productIndex = state.cart.findIndex(
        (item) => item.id === productId
      );
      if (productIndex !== -1) {
        // If product exists, update the quantity by incrementing it
        const updatedCart = [...state.cart];
        updatedCart[productIndex].quantity += 1;

        return {
          ...state,
          cart: updatedCart,
        };
      } else {
        return state;
      }

    //------decrement quantity of an item--------
    case DECREMENT_QUANTITY:
      // Find the product in the cart
      const prodIndex = state.cart.findIndex(
        (item) => item.id === action.payload
      );
      if (prodIndex !== -1) {
        // If product exists, check if the quantity is greater than the minimum value
        if (state.cart[prodIndex].quantity > 1) {
          // If the quantity is greater than 1, decrement it
          const updatedCart = [...state.cart];
          updatedCart[prodIndex].quantity -= 1;
          return {
            ...state,
            cart: updatedCart,
          };
        }
      }
      return state;

    //----------remove an item from cart----------
    case REMOVE_TO_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id != action.payload),
      };

    //----------subtotal cart----------
    case CALCULATE_SUBTOTAL:
      const cartItems = state.cart;
      const subtotal = cartItems.reduce((total, item) => {
        return Math.floor(total + item.quantity * item.price);
      }, 0);

      const subtotalItemCount = cartItems.reduce((total, item) => {
        return Math.floor(total + item.quantity);
      }, 0);

      return {
        ...state,
        subtotalPrice: subtotal,
        subtotalItem: subtotalItemCount,
      };

    //--------Clear Cart------------
    case CLEAR_CART:
      return {
        ...state,
        cart: [], // Set cart to an empty array
      };

    default:
      return state;
  }
};
