import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Article, ImageUploadArticleResult } from '../model/types';

const API_BASE_URL = import.meta.env.VITE_BASE_URL;

export const createArticleThunk = createAsyncThunk(
  'createArticleThunk',
  async (articleData: Article, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem('token');
      const res = await axios.post(
        `${API_BASE_URL}/api/article/create`,
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
          error.response?.data || 'Не удалось создать статью'
        );
      }
    }
    return rejectWithValue('Не удалось создать статью');
  }
);

export const deleteArticleThunk = createAsyncThunk<string, string>(
  'deleteArticleThunk',
  async (id, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem('token');
      const res = await axios.delete(
        `${API_BASE_URL}/api/article/delete/${id}`,
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
          error.response?.data || 'Не удалось удалить статью'
        );
      }
    }
    return rejectWithValue('Не удалось удалить статью');
  }
);

export const articleListThunk = createAsyncThunk(
  'articleListThunk',
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get(`${API_BASE_URL}/api/article/all`);
      return res.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(
          error.response?.data ||
            'Не удалось загрузить статьи. Пожалуйста, попробуйте обновить страницу.'
        );
      }
    }
    return rejectWithValue('Не удалось загрузить статьи');
  }
);

export const articleThunk = createAsyncThunk(
  'articleThunk',
  async (id: string, { rejectWithValue }) => {
    try {
      const res = await axios.get(`${API_BASE_URL}/api/article/${id}`);
      return res.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(
          error.response?.data ||
            'Не удалось загрузить статью. Пожалуйста, попробуйте обновить страницу.'
        );
      }
      return rejectWithValue('Не удалось загрузить статью');
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

    const res = await axios.post(`${API_BASE_URL}/upload`, formData);
    return { url: res.data.url };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return rejectWithValue(
        error.response?.data || 'Не удалось загрузить изображение'
      );
    }
  }
  return rejectWithValue('Не удалось загрузить изображение');
});
