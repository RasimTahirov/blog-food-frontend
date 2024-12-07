import { createSlice } from '@reduxjs/toolkit';
import { initialState } from '../initialStates/articleListState';
import { articleListThunk } from '../thunk/thunk';

const articleListSlice = createSlice({
  name: 'articleListSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(articleListThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(articleListThunk.fulfilled, (state, action) => {
        state.article = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(articleListThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default articleListSlice.reducer;
