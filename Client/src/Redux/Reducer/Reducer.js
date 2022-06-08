import { GET_ALL_EMPLOYEES, GET_USER_INFO} from "../Actions/Actions";

const initialState = {
  user: [],
  employees: [],
  companies: [],
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
        user: action.payload
      }

    default:
      return { ...state };
  }
}
