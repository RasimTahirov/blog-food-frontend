import { configureStore } from '@reduxjs/toolkit';

import authReducer from '../redux/authSlice';
import registerReducer from '../redux/registerSlice';
import postCreateReducer from '../redux/postCreateSlice';
import postListReducer from '../redux/postListSlice';
import postReducer from '../redux/postSlice';
import postCatrgoryReducer from '../redux/postCategorySlice';
import articleCreateReducer from '../redux/articleCreate';
import articleListReducer from '../redux/articleList';
import articleReducer from '../redux/articleSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    register: registerReducer,
    postCreate: postCreateReducer,
    articleCreate: articleCreateReducer,
    articleList: articleListReducer,
    article: articleReducer,
    postList: postListReducer,
    post: postReducer,
    postCategory: postCatrgoryReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
