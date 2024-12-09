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
import recipeAddFavoritesReducer from '../entities/recipe/slices/recipeFavorite';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    register: registerReducer,
    article: articleReducer,
    articleList: articleListReducer,
    articleCreate: articleCreateReducer,
    recipe: recipeReducer,
    recipeList: recipeListReducer,
    recipeCreate: recipeCreateReducer,
    recipeCategory: recipeCatrgoryReducer,
    recipeFavorite: recipeAddFavoritesReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
