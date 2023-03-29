import { GET_API_DATA } from "./actionType";

const initialState = {
  data: [],
  isLoading: false,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_API_DATA:
      return {...state, data: [...action.payload] }
    default:
      return state;
  }
};
