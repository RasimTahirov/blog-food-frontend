import { createAsyncThunk } from '@reduxjs/toolkit';
import { Article, ImageUploadArticleResult } from '../types/types';
import axios from 'axios';

export const createArticleThunk = createAsyncThunk(
  'createArticleThunk',
  async (articleData: Article, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem('token');
      const res = await axios.post(
        'http://localhost:9000/api/article/create',
        articleData,
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
          error.response?.data || 'Ошибка при создании статьи'
        );
      }
    }
    return rejectWithValue('Ошибка при создании статьи');
  }
);

export const deleteArticleThunk = createAsyncThunk<string, string>(
  'deleteArticleThunk',
  async (id, { rejectWithValue }) => {
    try {
      const res = await axios.delete(`http://localhost:9000/api/delete/${id}`);
      return res.data;
    } catch (error) {
      console.log('test1');
    }
  }
);

export const imageUploadThunk = createAsyncThunk<
  ImageUploadArticleResult,
  { imageData: File }
>('imageUploadThunk', async ({ imageData }, { rejectWithValue }) => {
  try {
    const formData = new FormData();
    formData.append('image', imageData);

    const res = await axios.post('http://localhost:9000/upload', formData);
    return { url: res.data.url };
  } catch (error: any) {
    return rejectWithValue(
      error.response?.data || 'Ошибка загрузки изображения'
    );
  }
});

export const articleListThunk = createAsyncThunk(
  'articleListThunk',
  async () => {
    try {
      const res = await axios.get('http://localhost:9000/api/article/all');
      return res.data;
    } catch (error) {
      console.log('test');
    }
  }
);

export const articleThunk = createAsyncThunk(
  'articleThunk',
  async (id: string, { rejectWithValue }) => {
    try {
      const res = await axios.get(`http://localhost:9000/api/article/${id}`);
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
