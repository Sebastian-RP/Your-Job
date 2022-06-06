import { configureStore } from "@reduxjs/toolkit";
import { skeletonSlice } from "../Slices/TestSlice";

export default configureStore({
  reducer: skeletonSlice,
});
