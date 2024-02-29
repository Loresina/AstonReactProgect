import { configureStore } from '@reduxjs/toolkit'
import firstReducer from './firstSlice';

export default configureStore({
  reducer: {
    first: firstReducer,
  },
});