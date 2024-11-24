import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const registerThunk = createAsyncThunk(
  'register',
  async (
    userData: {
      name: string;
      surname: string;
      email: string;
      password: string;
    },
    { rejectWithValue }
  ) => {
    try {
      const res = await axios.post(
        'http://localhost:9000/api/auth/register',
        userData
      );
      console.log(res.data);
      return res.data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        return rejectWithValue(
          error.response.data.message || 'Ошибка регистрации'
        );
      }
      return rejectWithValue('Ошибка регистрации');
    }
  }
);

interface User {
  name?: string;
  email: string;
  surname?: string;
  password: string;
}

interface Data {
  user: User | null;
  loading: boolean;
  error: null | string;
}

const initialState: Data = {
  user: null,
  loading: false,
  error: null,
};

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
