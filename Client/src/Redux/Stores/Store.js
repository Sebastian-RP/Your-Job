import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../Reducer/Reducer";
import thunk from "redux-thunk";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";

const persistConfig = {
  key: "root",
  storage: storage,
  blacklist: [
    "company",
    "user",
    "companies",
    "posts",
    "products",
    "companyPosts",
    "myUser",
    "myCompany",
    "activePlans"
  ],
  stateReconciler: autoMergeLevel2, // see "Merge Process" section for details.
};
const middleware = [thunk];

const pReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: pReducer,
  middleware,
});

export const persistor = persistStore(store);
