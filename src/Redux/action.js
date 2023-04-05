import {
  GET_API_DATA,
  ADD_TO_CART,
  
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



const apiData = () => async (dispatch) => {
  await axios
    .get("https://fakestoreapi.com/products")
    .then((res) => dispatch(getAPI(res.data)))
    .catch((e) => console.log(e.message));
};

export { apiData, addToCart };
