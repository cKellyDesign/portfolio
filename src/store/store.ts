import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { portfolioSlice, portfolioSliceName } from "./portfolio";

export const rootReducer = combineReducers({
  [portfolioSliceName]: portfolioSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export default store;
