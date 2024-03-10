import { configureStore } from "@reduxjs/toolkit";

import { bookSearchApi } from "./bookSearch";
import firstReducer from "./firstSlice";

export default configureStore({
  reducer: {
    first: firstReducer,
    [bookSearchApi.reducerPath]: bookSearchApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(bookSearchApi.middleware),
});
