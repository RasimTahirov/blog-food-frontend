import { createAsyncThunk } from '@reduxjs/toolkit';
import { ImageUploadResult, Post } from '../types/types';
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
          error.response?.data || 'Ошибка при создании поста'
        );
      }
    }
    return rejectWithValue('Неизвестная ошибка');
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
        error.response?.data || 'Ошибка загрузки изображения'
      );
    }
    return rejectWithValue('Неизвестная ошибка');
  }
});

export const deleteRecipeThunk = createAsyncThunk<string, string>(
  'deletePostThunk',
  async (id, { rejectWithValue }) => {
    try {
      const res = await axios.delete(
        `http://localhost:9000/api/post/delete/${id}`
      );
      return res.data;
    } catch (error) {
      console.log('test1');
    }
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
          error.response?.data || 'Ошибка при получении постов'
        );
      }
      return rejectWithValue('Неизвестная ошибка');
    }
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
          error.response?.data || 'Ошибка при получении поста'
        );
      }
      return rejectWithValue('Неизвестная ошибка');
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
          error.response?.data || 'Не удалось получить категории'
        );
      }
    }
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
          error.response?.data || ' Не удалось получить посты по категории'
        );
      }
    }
  }
);
