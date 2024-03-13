import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

const firstSlice = createSlice({
  name: "first",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    ex: (state) => {
      state.value += 10;
    },
  },
});

export const { increment, ex } = firstSlice.actions;
export default firstSlice.reducer;
