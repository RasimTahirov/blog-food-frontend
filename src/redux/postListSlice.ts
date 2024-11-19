import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const postListThunk = createAsyncThunk(
  'postThunk',
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get('http://localhost:9000/api/post/all');
      console.log(res.data);
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

interface Data {
  posts: [];
  loading: boolean;
  error: string | null;
}

const initialState: Data = {
  posts: [],
  loading: false,
  error: null,
};

const postListSlice = createSlice({
  name: 'postListSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(postListThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(postListThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = action.payload;
        state.error = null;
      })
      .addCase(postListThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default postListSlice.reducer;
