import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const authThunk = createAsyncThunk(
  'auth',
  async (
    userData: { email: string; password: string },
    { rejectWithValue }
  ) => {
    try {
      const res = await axios.post(
        'https://blog-food-backend.onrender.com/api/auth/login',
        userData
      );

      if (res.data.token) {
        localStorage.setItem('token', res.data.token);
      }

      return res.data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        return rejectWithValue(error.response.data.message || 'Ошибка входа');
      }
    }
  }
);
