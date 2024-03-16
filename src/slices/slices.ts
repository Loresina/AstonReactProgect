import { configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";

import { bookSearchApi } from "./bookSearchApi";
import firstReducer from "./firstSlice";
import userDataSlice from "../slices/usersDataSlice";

const store = configureStore({
  reducer: {
    first: firstReducer,
    userInfo: userDataSlice,
    [bookSearchApi.reducerPath]: bookSearchApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([bookSearchApi.middleware, thunk]),
});

export default store;

export type AppStore = typeof store;

export type AppDispatch = AppStore["dispatch"];
