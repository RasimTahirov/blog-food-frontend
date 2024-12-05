import { createSlice } from '@reduxjs/toolkit';
import { initialState } from '../initialStates/recipeListState';
import { recipeListThunk } from '../thunks/thunks';

const recipeListSlice = createSlice({
  name: 'postListSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(recipeListThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(recipeListThunk.fulfilled, (state, action) => {
        state.posts = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(recipeListThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default recipeListSlice.reducer;
