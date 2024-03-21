import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchInput: "",
};

const searchInputSlice = createSlice({
  name: "searchInput",
  initialState,
  reducers: {
    setSearchInput: (state, action) => {
      return { ...state, searchInput: action.payload };
    },
  },
});

export const { setSearchInput } = searchInputSlice.actions;
export default searchInputSlice.reducer;
