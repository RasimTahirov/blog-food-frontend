import { createSlice } from '@reduxjs/toolkit';
import { initialState } from '../initialStates/recipeState';
import { recipeThunk } from '../thunks/thunks';

// postSlice
const recipeSlice = createSlice({
  name: 'postsSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(recipeThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(recipeThunk.fulfilled, (state, action) => {
        state.post = action.payload;
        (state.loading = false), (state.error = null);
        // Запомнить
      })
      .addCase(recipeThunk.rejected, (state, action) => {
        state.error = action.payload as string;
      });
  },
});

export default recipeSlice.reducer;
