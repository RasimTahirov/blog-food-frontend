import { createSlice } from '@reduxjs/toolkit';
import { initialState } from '../initialStates/articleListState';
import { articleListThunk } from '../thunks/thunk';

const articleListSlice = createSlice({
  name: 'articleListSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(articleListThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(articleListThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.article = action.payload;
      })
      .addCase(articleListThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default articleListSlice.reducer;
