import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const postCategoryThunk = createAsyncThunk(
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

export const postsByCategoryThunk = createAsyncThunk(
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

interface Data {
  categories: [];
  posts: [];
  loading: boolean;
  error: string | null;
}

const initialState: Data = {
  categories: [],
  posts: [],
  loading: false,
  error: null,
};

const postCategorySlice = createSlice({
  name: 'postCategorySlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(postCategoryThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(postCategoryThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.categories = action.payload;
      })
      .addCase(postCategoryThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      .addCase(postsByCategoryThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(postsByCategoryThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = action.payload;
      })
      .addCase(postsByCategoryThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default postCategorySlice.reducer;
