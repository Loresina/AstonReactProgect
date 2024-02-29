import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 0,
  };

const firstSlice = createSlice({
    name: 'first',
    initialState,
    reducers: {
      increment: (state) => {
        state.value += 1;
      },
      decrement: (state) => {
        state.value -= 1;
      },
      incrementByAmount: (state, action) => {
        state.value += action.payload;
      },
    },
  });
  

export const { increment, decrement, incrementByAmount } = firstSlice.actions;
export default firstSlice.reducer;