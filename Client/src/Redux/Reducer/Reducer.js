<<<<<<< HEAD
import { GET_ALL_EMPLOYEES, GET_USER_INFO} from "../Actions/Actions";

=======
import { GET_ALL_EMPLOYEES } from "../Actions/Actions";
import {GET_ALL_PRODUCTS} from "../Actions/Actions";
>>>>>>> 293d1f2fec37bf10b819c3f3122ab687447f6ef4
const initialState = {
  user: [],
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
<<<<<<< HEAD
    case GET_USER_INFO:
      return {
        ...state,
        user: action.payload
=======
    case GET_ALL_PRODUCTS:
      return {
        ...state,
        products: action.payload,
>>>>>>> 293d1f2fec37bf10b819c3f3122ab687447f6ef4
      };

    default:
      return { ...state };
  }
}
