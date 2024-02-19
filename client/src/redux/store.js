/* eslint-disable no-unused-vars */
import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import jobReducer from "./slice/jobSlice";

const persistConfig = {
  key: "root",
  storage,
};

const persistedJobReducer = persistReducer(persistConfig, jobReducer);

export const store = configureStore({
  reducer: {
    job: persistedJobReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
