import { createAsyncThunk } from '@reduxjs/toolkit';
import { ImageUploadResult, Recipe } from '../model/types';
import axios from 'axios';

export const createRecipeThunk = createAsyncThunk(
  'createRecipe',
  async (recipeData: Recipe, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem('token');
      const res = await axios.post(
        'http://localhost:9000/api/post/create',
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
      const res = await axios.delete(
        `http://localhost:9000/api/post/delete/${id}`,
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
      const res = await axios.get('http://localhost:9000/api/post/all');
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
      const res = await axios.get('http://localhost:9000/api/post/categories');
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
        `http://localhost:9000/api/post/categories/${category}`
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
      const res = await axios.get(`http://localhost:9000/api/post/${id}`);
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

    const res = await axios.post('http://localhost:9000/upload', formData);

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
