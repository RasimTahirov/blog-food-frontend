import { createSlice } from '@reduxjs/toolkit';
import {
  recipeAddFavorites,
  recipeAllFavorites,
  recipeRemoveFavorites,
} from '../thunk/thunk';
import { initialState } from '../initialStates/recipeListState';

const recipeFavorite = createSlice({
  name: 'recipeFavorite',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(recipeAddFavorites.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(recipeAddFavorites.fulfilled, (state, action) => {
        const { favorites } = action.payload;
        state.recipes = favorites;
        state.loading = false;
        state.error = null;
      })
      .addCase(recipeAddFavorites.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      .addCase(recipeAllFavorites.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(recipeAllFavorites.fulfilled, (state, action) => {
        state.recipes = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(recipeAllFavorites.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      .addCase(recipeRemoveFavorites.fulfilled, (state, action) => {
        state.recipes = action.payload;
        state.loading = false;
        state.error = null;
      });
  },
});

export default recipeFavorite.reducer;
