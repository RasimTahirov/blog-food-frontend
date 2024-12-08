import { createSlice } from '@reduxjs/toolkit';
import { initialState } from '../initialStates/recipeListState';
import { recipeListThunk } from '../thunk/thunk';

const recipeListSlice = createSlice({
  name: 'recipeListSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(recipeListThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(recipeListThunk.fulfilled, (state, action) => {
        state.recipes = action.payload;
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
