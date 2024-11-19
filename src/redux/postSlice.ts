import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { Post } from '../types/types';

export const postsThunk = createAsyncThunk(
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

interface Data {
  post: null | Post;
  loading: boolean;
  error: string | null;
}

const initialState: Data = {
  post: null,
  loading: false,
  error: null,
};

const postSlice = createSlice({
  name: 'postsSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(postsThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(postsThunk.fulfilled, (state, action) => {
        state.post = action.payload;
        (state.loading = false), (state.error = null);
      })
      .addCase(postsThunk.rejected, (state, action) => {
        state.error = action.payload as string;
      });
  },
});

export default postSlice.reducer;
