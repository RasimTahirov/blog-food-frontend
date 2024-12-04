import { createSlice } from '@reduxjs/toolkit';
import { initialState } from '../initialStates/createRecipeState';
import {
  createRecipeThunk,
  deleteRecipeThunk,
  imageUploadThunk,
} from '../thunks/thunks';

// postCreateSlice
const recipeCreateSlice = createSlice({
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
      console.log(id);
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
      // Тут запомнить
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createRecipeThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createRecipeThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.post = action.payload;
        state.error = null;
      })
      .addCase(createRecipeThunk.rejected, (state, action) => {
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

      .addCase(deleteRecipeThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteRecipeThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(deleteRecipeThunk.rejected, (state, action) => {
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
} = recipeCreateSlice.actions;

export default recipeCreateSlice.reducer;
