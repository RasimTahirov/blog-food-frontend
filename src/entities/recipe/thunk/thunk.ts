import { createAsyncThunk } from '@reduxjs/toolkit';
import { ImageUploadResult, Post } from '../model/types';
import axios from 'axios';

export const createRecipeThunk = createAsyncThunk(
  'createPost',
  async (recipeData: Post, { rejectWithValue }) => {
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
          error.response?.data || 'Не удалось создать рецепт'
        );
      }
    }
    return rejectWithValue('Не удалось создать рецепт');
  }
);

export const deleteRecipeThunk = createAsyncThunk<string, string>(
  'deletePostThunk',
  async (id, { rejectWithValue }) => {
    try {
      const res = await axios.delete(
        `http://localhost:9000/api/post/delete/${id}`
      );
      return res.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(
          error.response?.data || 'Не удалось удалить рецепт'
        );
      }
    }
    return rejectWithValue('Не удалось удалить рецепт');
  }
);

export const recipeListThunk = createAsyncThunk(
  'postThunk',
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get('http://localhost:9000/api/post/all');
      return res.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(
          error.response?.data || 'Не удалось загрузить рецепты'
        );
      }
      return rejectWithValue('Не удалось загрузить рецепты');
    }
  }
);

export const recipeCategoryThunk = createAsyncThunk(
  'postCategoryThunk',
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get('http://localhost:9000/api/post/categories');
      return res.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(
          error.response?.data || 'Не удалось загрузить категории'
        );
      }
    }
    return rejectWithValue('Не удалось загрузить категории');
  }
);

export const recipeByCategoryThunk = createAsyncThunk(
  'postsByCategoryThunk',
  async (category: string, { rejectWithValue }) => {
    try {
      const res = await axios.get(
        `http://localhost:9000/api/post/categories/${category}`
      );
      return res.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(
          error.response?.data || 'Не удалось загрузить категории'
        );
      }
    }
    return rejectWithValue('Не удалось загрузить категории');
  }
);

export const recipeThunk = createAsyncThunk(
  'postsThunk',
  async (id: string, { rejectWithValue }) => {
    try {
      const res = await axios.get(`http://localhost:9000/api/post/${id}`);
      return res.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(
          error.response?.data || 'Не удалось загрузить рецепт'
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
        error.response?.data || 'Не удалось загрузить изображение'
      );
    }
    return rejectWithValue('Не удалось загрузить изображение');
  }
});
