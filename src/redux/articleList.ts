import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

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

const initialState = {
  article: [],
  error: null,
  loading: false,
};

const articleListSlice = createSlice({
  name: 'articleListSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(articleListThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(articleListThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.article = action.payload;
      })
      .addCase(articleListThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default articleListSlice.reducer;
