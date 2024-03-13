import { configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";

import { bookSearchApi } from "./bookSearch";
import firstReducer from "./firstSlice";
import userDataSlice from "../slices/usersDataSlice";

export default configureStore({
  reducer: {
    first: firstReducer,
    userInfo: userDataSlice,
    [bookSearchApi.reducerPath]: bookSearchApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([bookSearchApi.middleware, thunk]),
});

export type AppDispatch = typeof configureStore.dispatch;
