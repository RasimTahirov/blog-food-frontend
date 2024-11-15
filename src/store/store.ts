import { configureStore } from '@reduxjs/toolkit';

import authReducer from '../redux/authSlice';
import registerReducer from '../redux/registerSlice';
import createPostReducer from '../redux/postSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    register: registerReducer,
    createPost: createPostReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
