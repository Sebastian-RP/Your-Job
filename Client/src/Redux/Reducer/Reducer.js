import {
  GET_USER_INFO,
  GET_ALL_PRODUCTS,
  GET_ALL_TECHNOLOGIES,
  GET_ALL_USERS,
  GET_ALL_POST,
  GET_ALL_COMPANIES,
  GET_ALL_POSTS_FROM_COMPANY,
  GET_ALL_POSTULATES,
  ADD_CARRITO,
  CLEAR_CARRITO,
  GET_CONVERSATIONS,
  GET_USER_BY_EMAIL,
  GET_COMPANY_BY_EMAIL,
  CREATE_COMPANY,
  LOG_OUT,
  UPDATE_USER,
  DELETE_TECHNOLOGY,
  GET_PLANS,
  GET_COMPANY_INFO,
  GET_ALL_EMPLOYEES_FROM_COMPANY,
  LOG_IN,
  USER_POSTULATES,
  SET_EMAIL_DATA,
  GET_ALL_FORUM_POST
} from "../Actions/Actions.js";

const initialState = {
  user: [],
  userPostulates: [],
  company: [],
  employees: [],
  companies: [],
  products: [],
  technologies: [],
  users: [],
  posts: [],
  companyPosts: [],
  postulatesUser: [],
  carrito: [],
  conversations: [],
  myUser: [],
  myCompany: [],
  activePlans: [],
  emailData: [],
  allForumPost: []
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_EMPLOYEES_FROM_COMPANY:
      return {
        ...state,
        employees: action.payload,
      };
    case GET_USER_INFO:
      return {
        ...state,
        user: action.payload,
      };
    case GET_COMPANY_INFO:
      // console.log(action.payload);
      return {
        ...state,
        company: action.payload,
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
    case GET_ALL_POSTULATES:
      return {
        ...state,
        postulatesUser: action.payload,
      };
    case GET_CONVERSATIONS:
      return {
        ...state,
        conversations: action.payload,
      };
    case ADD_CARRITO:
      return {
        ...state,
        carrito: action.payload,
      };
    case CLEAR_CARRITO:
      return {
        ...state,
        carrito: action.payload,
      };
    case GET_USER_BY_EMAIL:
      return {
        ...state,
        myUser: action.payload,
      };
    case GET_COMPANY_BY_EMAIL:
      return {
        ...state,
        myCompany: action.payload,
      };
    case CREATE_COMPANY:
      return {
        ...state,
        myCompany: action.payload,
      };

    case LOG_IN:
      return {
        ...state,
        myUser: action.payload.loggedUser,
        myCompany: action.payload.loggedCompany,
        
      };

    case LOG_OUT:
      return {
        ...state,
        myUser: [],
        myCompany: [],
      };
    case UPDATE_USER:
      if (action.payload.email !== state.myUser.email) {
        return {
          ...state,
        };
      }
      return {
        ...state,
        myUser: action.payload,
      };
    case DELETE_TECHNOLOGY:
      return {
        ...state,
        technologies: action.payload,
      };
    case GET_PLANS:
      return {
        ...state,
        activePlans: action.payload,
      };
    case USER_POSTULATES: 
      return {
        ...state,
        userPostulates : action.payload
      }
    case SET_EMAIL_DATA: 
      return {
        ...state,
        emailData : action.payload
      }
    case GET_ALL_FORUM_POST:
      return {
        ...state,
        allForumPost: action.payload
      }
    default:
      return { ...state };
  }
}
