import { createSlice } from '@reduxjs/toolkit';
import { initialState } from '../initialStates/articleState';
import { articleThunk } from '../thunks/thunk';

const articleSlice = createSlice({
  name: 'postsSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(articleThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(articleThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.article = action.payload;
      })
      .addCase(articleThunk.rejected, (state, action) => {
        state.error = action.payload as string;
      });
  },
});

export default articleSlice.reducer;
