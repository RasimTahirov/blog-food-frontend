import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { Article } from './articleCreate';

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

interface Data {
  article: null | Article;
  loading: boolean;
  error: string | null;
}

const initialState: Data = {
  article: null,
  error: null,
  loading: false,
};

const articleSlice = createSlice({
  name: 'postsSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(articleThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(articleThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.article = action.payload;
      })
      .addCase(articleThunk.rejected, (state, action) => {
        state.error = action.payload as string;
      });
  },
});

export default articleSlice.reducer;
