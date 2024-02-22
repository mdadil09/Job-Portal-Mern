/* eslint-disable no-unused-vars */
import { configureStore } from "@reduxjs/toolkit";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import jobReducer from "./slice/jobSlice";
import authReducer from "./slice/authSlice";

const persistConfig = {
  key: "root",
  storage,
};

const persistedJobReducer = persistReducer(persistConfig, jobReducer);
const persistAuthReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
  reducer: {
    job: jobReducer,
    auth: persistAuthReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    }),
});

export const persistor = persistStore(store);
