import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../Reducer/Reducer";
import thunk from "redux-thunk";

const middleware = [thunk];

const store = configureStore({
  reducer: rootReducer,
  middleware: middleware,
});

export default store;
