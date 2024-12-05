import { createSlice } from '@reduxjs/toolkit';
import { initialState } from '../initialState/registerState';
import { registerThunk } from '../thunk/thunk';

const registerSlice = createSlice({
  name: 'register',
  initialState,
  reducers: {
    resetError(state) {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(registerThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { resetError } = registerSlice.actions;

export default registerSlice.reducer;
