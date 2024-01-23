
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "reduxjs-toolkit-persist";
import { PersistConfig, Persistor } from "reduxjs-toolkit-persist/lib/types";
import storage from "reduxjs-toolkit-persist/lib/storage";
// import { sessionSlice, sessionSliceName } from "./session";
import { portfolioSlice, portfolioSliceName } from "./portfolio";

export const persistConfig: PersistConfig<any> = {
  key: "conor-kelly-portfolio",
  storage,
};

export const rootReducer = combineReducers({
  // [sessionSliceName]: sessionSlice.reducer,
  [portfolioSliceName]: portfolioSlice.reducer,
});

export const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    }),
});

export const persistor:Persistor = persistStore(store);

export default store;
