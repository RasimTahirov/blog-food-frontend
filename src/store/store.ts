import { configureStore } from '@reduxjs/toolkit';

import authReducer from '../redux/authSlice';
import registerReducer from '../redux/registerSlice';
import postCreateReducer from '../redux/postCreateSlice';
import postListReducer from '../redux/postListSlice';
import postReducer from '../redux/postSlice';
import postCatrgoryReducer from '../redux/postCategorySlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    register: registerReducer,
    postCreate: postCreateReducer,
    postList: postListReducer,
    post: postReducer,
    postCategory: postCatrgoryReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
