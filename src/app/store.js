import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import customCounterReducer from "../features/customeCounter/customCounterSlice";
export default configureStore({
  reducer: {
    counter: counterReducer,
    customerCounter: customCounterReducer,
  },
});
