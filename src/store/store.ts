import { configureStore } from '@reduxjs/toolkit';

import authReducer from '../entities/user/auth/slice/authSlice';
import registerReducer from '../entities/user/register/slice/registerSlice';

import articleCreateReducer from '../entities/article/slices/articleCreateSlice';
import articleListReducer from '../entities/article/slices/articleListSlice';
import articleReducer from '../entities/article/slices/articleSlice';

import recipeCreateReducer from '../entities/recipe/slices/recipeCreateSlice';
import recipeListReducer from '../entities/recipe/slices/recipeListSlice';
import recipeReducer from '../entities/recipe/slices/recipeSlice';
import recipeCatrgoryReducer from '../entities/recipe/slices/recipeCategorySlice';

// вот тут надо исправить
export const store = configureStore({
  reducer: {
    auth: authReducer,
    register: registerReducer,
    postCreate: recipeCreateReducer,
    articleCreate: articleCreateReducer,
    articleList: articleListReducer,
    article: articleReducer,
    postList: recipeListReducer,
    post: recipeReducer,
    postCategory: recipeCatrgoryReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
