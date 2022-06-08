import { GET_ALL_EMPLOYEES } from "../Actions/Actions";
import {GET_ALL_PRODUCTS} from "../Actions/Actions";
const initialState = {
  employees: [],
  companies: [],
  products: [],
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_EMPLOYEES:
      return {
        ...state,
        employees: action.payload,
      };
    case GET_ALL_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };

    default:
      return { ...state };
  }
}
