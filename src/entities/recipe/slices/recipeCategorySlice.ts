import { createSlice } from '@reduxjs/toolkit';
import { initialState } from '../initialStates/recipeCategorySlice';
import { recipeByCategoryThunk, recipeCategoryThunk } from '../thunks/thunks';

// postCategorySlice
const recipeCategorySlice = createSlice({
  name: 'postCategorySlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(recipeCategoryThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(recipeCategoryThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.categories = action.payload;
      })
      .addCase(recipeCategoryThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      .addCase(recipeByCategoryThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(recipeByCategoryThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = action.payload;
      })
      .addCase(recipeByCategoryThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default recipeCategorySlice.reducer;
