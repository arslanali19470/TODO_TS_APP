import {configureStore} from '@reduxjs/toolkit';
import dataReducer from './dataSlice';

const store = configureStore({
  reducer: {
    data: dataReducer,
  },
  // Optional: You can add middleware, devtools configuration, or other options here
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
