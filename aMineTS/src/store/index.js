import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../views/counter/counterSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});