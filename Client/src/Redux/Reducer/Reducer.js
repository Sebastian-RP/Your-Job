import { GET_ALL_EMPLOYEES, GET_USER_INFO, GET_ALL_PRODUCTS, GET_ALL_TECHNOLOGIES, GET_ALL_USERS } from "../Actions/Actions.js";

const initialState = {
  user: [],
  employees: [],
  companies: [],
  products: [],
  technologies: [],
  users: [],
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_EMPLOYEES:
      return {
        ...state,
        employees: action.payload,
      };
    case GET_USER_INFO:
      return {
        ...state,
        user: action.payload,
      };
    case GET_ALL_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    case GET_ALL_TECHNOLOGIES:
      return {
        ...state,
        technologies: action.payload,
      };
    case GET_ALL_USERS:
      return { ...state, users: action.payload };
    default:
      return { ...state };
  }
}
