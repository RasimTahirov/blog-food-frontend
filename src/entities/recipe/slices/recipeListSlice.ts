import { createSlice } from '@reduxjs/toolkit';
import { initialState } from '../initialStates/recipeListState';
import { recipeListThunk } from '../thunks/thunks';

// postListSlice
const recipeListSlice = createSlice({
  name: 'postListSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(recipeListThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(recipeListThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = action.payload;
        state.error = null;
      })
      .addCase(recipeListThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default recipeListSlice.reducer;
