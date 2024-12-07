import { createSlice } from '@reduxjs/toolkit';
import { initialState } from '../initialStates/recipeCategorySlice';
import { recipeByCategoryThunk, recipeCategoryThunk } from '../thunk/thunk';

const recipeCategorySlice = createSlice({
  name: 'recipeCategorySlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(recipeCategoryThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(recipeCategoryThunk.fulfilled, (state, action) => {
        state.categories = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(recipeCategoryThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      .addCase(recipeByCategoryThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(recipeByCategoryThunk.fulfilled, (state, action) => {
        state.posts = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(recipeByCategoryThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default recipeCategorySlice.reducer;
