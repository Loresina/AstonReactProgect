import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favorites: [],
  searchHistory: [],
  authStatus: "",
  authName: "",
  error: "massage",
};

const userDataSlice = createSlice({
  name: "userInfo",
  initialState,
  reducers: {
    setFavorites: (state, action) => {
      state.favorites = action.payload;
    },
    addSearchHistory: () => {
      // state.searchHistory.push("");
    },
    authStatus: (state, action) => {
      state.authStatus = action.payload;
    },
    setName: (state, action) => {
      state.authName = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setFavorites, addSearchHistory, authStatus, setName, setError } =
  userDataSlice.actions;
export default userDataSlice.reducer;
