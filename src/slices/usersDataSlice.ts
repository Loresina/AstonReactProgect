import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favorites: [],
  searchHistory: [],
  authStatus: "",
  error: "massage",
};

const userDataSlice = createSlice({
  name: "userInfo",
  initialState,
  reducers: {
    addFavorites: (state, action) => {
      // state.favorites.push("");
    },
    addSearchHistory: (state, action) => {
      // state.searchHistory.push("");
    },
    authStatus: (state, action) => {
      console.log("Это authStatus", action);
      state.authStatus = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { addFavorites, addSearchHistory, authStatus, setError } =
  userDataSlice.actions;
export default userDataSlice.reducer;
