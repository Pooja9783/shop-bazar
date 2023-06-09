import {
  GET_API_DATA,
  ADD_TO_CART,
  REMOVE_TO_CART,
  INCREMENT_QUANTITY,
  DECREMENT_QUANTITY,
  CALCULATE_SUBTOTAL,
  CLEAR_CART,
} from "./actionType";
import axios from "axios";

const getAPI = (payload) => ({
  type: GET_API_DATA,
  payload: payload,
});

const addToCart = (data) => ({
  type: ADD_TO_CART,
  payload: data,
});

const removeToCart = (id) => ({
  type: REMOVE_TO_CART,
  payload: id,
});

const incrementQuantity = (id) => ({
  type: INCREMENT_QUANTITY,
  payload: id,
});

const decrementQuantity = (id) => ({
  type: DECREMENT_QUANTITY,
  payload: id,
});

export const calculateSubtotal = () => {
  return {
    type: CALCULATE_SUBTOTAL,
  };
};

export const clearCart = () => {
  return {
    type: CLEAR_CART,
  };
};

const apiData = () => async (dispatch) => {
  await axios
    .get("https://fakestoreapi.com/products")
    .then((res) => dispatch(getAPI(res.data)))
    .catch((e) => console.log(e.message));
};

export {
  apiData,
  addToCart,
  removeToCart,
  incrementQuantity,
  decrementQuantity,
};
