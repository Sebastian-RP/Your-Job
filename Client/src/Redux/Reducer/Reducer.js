import {
  GET_ALL_EMPLOYEES,
  GET_USER_INFO,
  GET_ALL_PRODUCTS,
  GET_ALL_TECHNOLOGIES,
  GET_ALL_USERS,
  GET_ALL_POST,
  GET_ALL_COMPANIES,
  GET_ALL_POSTS_FROM_COMPANY,
  GET_ALL_POSTULATES,
  ADD_CARRITO
} from "../Actions/Actions.js";

const initialState = {
  user: [],
  employees: [],
  companies: [],
  products: [],
  technologies: [],
  users: [],
  posts: [],
  companyPosts: [],
  postulatesUser : [],
  carrito: []
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
    case GET_ALL_POST:
      return {
        ...state,
        posts: action.payload,
      };
    case GET_ALL_COMPANIES:
      return {
        ...state,
        companies: action.payload,
      };
    case GET_ALL_POSTS_FROM_COMPANY:
      return {
        ...state,
        companyPosts: action.payload,
      };
    case GET_ALL_POSTULATES : 
      return {
        ...state,
        postulatesUser : action.payload
      }
    case ADD_CARRITO : 
      return {
        ...state,
        carrito : action.payload
      }
    default:
      return { ...state };
  }
}
