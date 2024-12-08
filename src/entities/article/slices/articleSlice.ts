import { createSlice } from '@reduxjs/toolkit';
import { initialState } from '../initialStates/articleState';
import { articleThunk } from '../thunk/thunk';

const articleSlice = createSlice({
  name: 'articleSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(articleThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(articleThunk.fulfilled, (state, action) => {
        state.article = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(articleThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default articleSlice.reducer;
