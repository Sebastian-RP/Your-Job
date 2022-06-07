import { GET_ALL_EMPLOYEES } from "../Actions/Actions";

const initialState = {
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

    default:
      return { ...state };
  }
}
