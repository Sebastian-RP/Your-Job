import { configureStore } from "@reduxjs/toolkit";
import { skeletonReducer } from "../Slices/TestSlice";

export default configureStore({
  reducer: {
    skeleton: skeletonReducer,
  },
});
