import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ImageUploadResult, Recipe, RecipeActionPayload } from '../model/types';

const API_BASE_URL = import.meta.env.VITE_BASE_URL;

export const createRecipeThunk = createAsyncThunk(
  'createRecipe',
  async (recipeData: Recipe, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem('token');
      const res = await axios.post(
        `${API_BASE_URL}/api/post/create`,
        recipeData,
        {
          headers: {
            Authorization: token,
          },
        }
      );
      return res.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(
          error.response?.data ||
            'Не удалось создать рецепт. Пожалуйста, попробуйте обновить страницу.'
        );
      }
    }
    return rejectWithValue('Не удалось создать рецепт');
  }
);

export const deleteRecipeThunk = createAsyncThunk<string, string>(
  'deleteRecipeThunk',
  async (id, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem('token');
      const res = await axios.delete(`${API_BASE_URL}/api/post/delete/${id}`, {
        headers: {
          Authorization: token,
        },
      });
      return res.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(
          error.response?.data ||
            'Не удалось удалить рецепт. Пожалуйста, попробуйте обновить страницу.'
        );
      }
    }
    return rejectWithValue('Не удалось удалить рецепт');
  }
);

export const recipeListThunk = createAsyncThunk(
  'recipeListThunk',
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get(`${API_BASE_URL}/api/post/all`);
      return res.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(
          error.response?.data ||
            'Не удалось загрузить рецепты. Пожалуйста, попробуйте обновить страницу.'
        );
      }
      return rejectWithValue('Не удалось загрузить рецепты');
    }
  }
);

export const recipeCategoryThunk = createAsyncThunk(
  'recipeCategoryThunk',
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get(`${API_BASE_URL}/api/post/categories`);
      return res.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(
          error.response?.data ||
            'Не удалось загрузить категории. Пожалуйста, попробуйте обновить страницу.'
        );
      }
    }
    return rejectWithValue('Не удалось загрузить категории');
  }
);

export const recipeByCategoryThunk = createAsyncThunk(
  'recipeByCategoryThunk',
  async (category: string, { rejectWithValue }) => {
    try {
      const res = await axios.get(
        `${API_BASE_URL}/api/post/categories/${category}`
      );
      return res.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(
          error.response?.data ||
            'Не удалось загрузить категории. Пожалуйста, попробуйте обновить страницу.'
        );
      }
    }
    return rejectWithValue('Не удалось загрузить категории');
  }
);

export const recipeThunk = createAsyncThunk(
  'recipeThunk',
  async (id: string, { rejectWithValue }) => {
    try {
      const res = await axios.get(`${API_BASE_URL}/api/post/${id}`);
      return res.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(
          error.response?.data ||
            'Не удалось загрузить рецепт. Пожалуйста, попробуйте обновить страницу.'
        );
      }
      return rejectWithValue('Не удалось загрузить рецепт');
    }
  }
);

export const imageUploadThunk = createAsyncThunk<
  ImageUploadResult,
  { imageData: File; type: 'cover' | 'step'; id?: number },
  { rejectValue: string }
>('imageUpload', async ({ imageData, type, id }, { rejectWithValue }) => {
  try {
    const formData = new FormData();
    formData.append('image', imageData);

    const res = await axios.post(`${API_BASE_URL}/upload`, formData);

    return { url: res.data.url, type, id };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return rejectWithValue(
        error.response?.data ||
          'Не удалось загрузить изображение. Пожалуйста, попробуйте обновить страницу.'
      );
    }
    return rejectWithValue('Не удалось загрузить изображение');
  }
});

export const recipeAddFavorites = createAsyncThunk(
  'recipeFavorites',
  async ({ recipeId }: RecipeActionPayload, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem('token');

      const res = await axios.post(
        `${API_BASE_URL}/api/favorite/favorites/add`,
        { recipeId },
        {
          headers: {
            Authorization: token,
          },
        }
      );

      return res.data;
    } catch (error) {
      if (axios.isAxiosError(error))
        return rejectWithValue(
          error.response?.data || 'Не удалось добавить рецепт в избранное'
        );
    }
    return rejectWithValue('Не удалось добавить рецепт в избранное');
  }
);

export const recipeAllFavorites = createAsyncThunk(
  'recipeAllFavorites',
  async (_, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem('token');
      const res = await axios.get(`${API_BASE_URL}/api/favorite/favorites`, {
        headers: {
          Authorization: token,
        },
      });
      console.log(res.data);

      return res.data;
    } catch (error) {
      if (axios.isAxiosError(error))
        return rejectWithValue(
          error.response?.data ||
            'Не удалось загрузить рецепты. Пожалуйста, попробуйте обновить страницу.'
        );
    }
    return rejectWithValue(
      'Не удалось загрузить рецепты. Пожалуйста, попробуйте обновить страницу.'
    );
  }
);

export const recipeRemoveFavorites = createAsyncThunk(
  'recipeRemoveFavorites',
  async ({ recipeId }: RecipeActionPayload, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem('token');

      const res = await axios.post(
        `${API_BASE_URL}/api/favorite/favorites/remove`,
        { recipeId },
        {
          headers: {
            Authorization: token,
          },
        }
      );

      return res.data;
    } catch (error) {
      if (axios.isAxiosError(error))
        return rejectWithValue(
          error.response?.data || 'Не удалось удалить рецепт'
        );
    }
    return rejectWithValue('Не удалось удалить рецепт');
  }
);
