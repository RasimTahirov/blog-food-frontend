import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const registerThunk = createAsyncThunk(
  'register',
  async (
    userData: {
      name: string;
      surname: string;
      email: string;
      password: string;
    },
    { rejectWithValue }
  ) => {
    try {
      const res = await axios.post(
        'http://localhost:9000/api/auth/register',
        userData
      );
      return res.data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        return rejectWithValue(
          error.response.data.message || 'Ошибка регистрации'
        );
      }
      return rejectWithValue('Ошибка регистрации');
    }
  }
);
