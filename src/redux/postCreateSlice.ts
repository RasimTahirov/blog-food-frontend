import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Data, ImageUploadResult, Post } from '../types/types';

export const createPostThunk = createAsyncThunk(
  'createPost',
  async (recipeData: Post, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem('token');
      const res = await axios.post(
        'http://localhost:9000/api/post/create',
        recipeData,
        {
          headers: {
            Authorization: token,
          },
        }
      );
      return res.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(
          error.response?.data || 'Ошибка при создании поста'
        );
      }
    }
    return rejectWithValue('Неизвестная ошибка');
  }
);

export const imageUploadThunk = createAsyncThunk<
  ImageUploadResult,
  { imageData: File; type: 'cover' | 'step'; id?: number },
  { rejectValue: string }
>('imageUpload', async ({ imageData, type, id }, { rejectWithValue }) => {
  try {
    const formData = new FormData();
    formData.append('image', imageData);

    const res = await axios.post('http://localhost:9000/upload', formData);

    return { url: res.data.url, type, id };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return rejectWithValue(
        error.response?.data || 'Ошибка загрузки изображения'
      );
    }
    return rejectWithValue('Неизвестная ошибка');
  }
});

export const deletePostThunk = createAsyncThunk(
  'deletePostThunk',
  async (id, { rejectWithValue }) => {
    try {
      const res = await axios.delete(
        `http://localhost:9000/api/post/delete/${id}`
      );
      return res.data;
    } catch (error) {
      console.log('test1');
    }
  }
);

const initialStatePost: Post = {
  title: '',
  description: '',
  categories: 'Завртаки',
  ingredients: [
    {
      id: Date.now(),
      name: '',
      unit: 'г',
      amount: 0,
    },
  ],
  steps: [
    {
      id: Date.now(),
      description: '',
      image: '',
      stepNumber: 1,
    },
  ],
  image: '',
  cookTime: {
    hours: 0,
    minutes: 0,
  },
  author: {
    name: '',
    surname: '',
    id: '',
  },
};

const initialState: Data = {
  post: initialStatePost || null,
  loading: false,
  error: null,
};

const postCreateSlice = createSlice({
  name: 'createPostSlice',
  initialState,
  reducers: {
    setTitle: (state, action) => {
      state.post.title = action.payload;
    },
    setDescription: (state, action) => {
      state.post.description = action.payload;
    },
    setCategories: (state, action) => {
      state.post.categories = action.payload;
    },
    addIngredient: (state) => {
      state.post.ingredients.push({
        id: Date.now(),
        name: '',
        unit: 'г',
        amount: 0,
      });
    },
    removeIngredient: (state, action) => {
      state.post.ingredients = state.post.ingredients.filter(
        (ingredient) => ingredient.id !== action.payload
      );
    },
    setIngredientName: (state, action) => {
      const { id, name } = action.payload;
      const ingredient = state.post.ingredients.find(
        (ingredient) => ingredient.id === id
      );
      if (ingredient) {
        ingredient.name = name;
      }
    },
    setIngredientUnit: (state, action) => {
      const { id, unit } = action.payload;
      const ingredient = state.post.ingredients.find(
        (ingredient) => ingredient.id === id
      );
      if (ingredient) {
        ingredient.unit = unit;
      }
    },
    setIngredientAmount: (state, action) => {
      const { id, amount } = action.payload;
      const ingredient = state.post.ingredients.find(
        (ingredient) => ingredient.id === id
      );
      if (ingredient) {
        ingredient.amount = amount;
      }
    },
    addStep: (state) => {
      state.post.steps.push({
        id: Date.now(),
        description: '',
        image: '',
        stepNumber: state.post.steps.length + 1,
      });
    },
    removeStep: (state, action) => {
      state.post.steps = state.post.steps.filter(
        (step) => step.id !== action.payload
      );
    },

    setDescriptionStep: (state, action) => {
      const { id, description } = action.payload;
      const step = state.post.steps.find((step) => step.id === id);
      if (step) {
        step.description = description;
      }
    },
    setImageStep: (state, action) => {
      const { id, image } = action.payload;
      const step = state.post.steps.find((step) => step.id === id);
      if (step) {
        step.image = image;
      }
    },
    setTime: (state, action) => {
      const { hours, minutes } = action.payload;
      if (hours !== undefined) state.post.cookTime.hours = hours;
      if (minutes !== undefined) state.post.cookTime.minutes = minutes;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createPostThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createPostThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.post = action.payload;
        state.error = null;
      })
      .addCase(createPostThunk.rejected, (state, action) => {
        state.error = action.payload as string;
        state.loading = false;
      })

      .addCase(imageUploadThunk.fulfilled, (state, action) => {
        const { url, type, id } = action.payload;

        if (type === 'cover') {
          state.post.image = url;
        } else if (type === 'step' && id !== undefined) {
          const step = state.post.steps.find((step) => step.id === id);
          if (step) {
            step.image = url;
          }
        }
      })

      .addCase(deletePostThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deletePostThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(deletePostThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const {
  setTitle,
  setDescription,
  setCategories,
  addIngredient,
  removeIngredient,
  setIngredientName,
  setIngredientUnit,
  setIngredientAmount,
  addStep,
  removeStep,
  setDescriptionStep,
  setImageStep,
  setTime,
} = postCreateSlice.actions;

export default postCreateSlice.reducer;
