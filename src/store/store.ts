import { configureStore } from '@reduxjs/toolkit';

import authReducer from '../redux/authSlice';
import registerReducer from '../redux/registerSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    register: registerReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
