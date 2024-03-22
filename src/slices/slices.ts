import { configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";

import { bookSearchApi } from "./bookSearchApi";
import searchInputSlice from "./inputSlice";
import { loginMiddle } from "./loginMiddle";
import userDataSlice from "../slices/usersDataSlice";

const store = configureStore({
  reducer: {
    userInfo: userDataSlice,
    searchInput: searchInputSlice,
    [bookSearchApi.reducerPath]: bookSearchApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      bookSearchApi.middleware,
      loginMiddle.middleware,
      thunk,
    ]),
});

export default store;

export type AppStore = typeof store;

export type AppDispatch = AppStore["dispatch"];
