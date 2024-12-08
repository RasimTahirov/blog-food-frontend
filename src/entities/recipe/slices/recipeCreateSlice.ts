import { createSlice } from '@reduxjs/toolkit';
import { initialState } from '../initialStates/recipeCreateState';
import {
  createRecipeThunk,
  deleteRecipeThunk,
  imageUploadThunk,
} from '../thunk/thunk';

const recipeCreateSlice = createSlice({
  name: 'recipeCreateSlice',
  initialState,
  reducers: {
    setTitle: (state, action) => {
      state.recipe.title = action.payload;
    },
    setDescription: (state, action) => {
      state.recipe.description = action.payload;
    },
    setCategories: (state, action) => {
      state.recipe.categories = action.payload;
    },
    addIngredient: (state) => {
      state.recipe.ingredients.push({
        id: Date.now(),
        name: '',
        unit: 'г',
        amount: 0,
      });
    },
    removeIngredient: (state, action) => {
      state.recipe.ingredients = state.recipe.ingredients.filter(
        (ingredient) => ingredient.id !== action.payload
      );
    },
    setIngredientName: (state, action) => {
      const { id, name } = action.payload;
      const ingredient = state.recipe.ingredients.find(
        (ingredient) => ingredient.id === id
      );
      if (ingredient) {
        ingredient.name = name;
      }
    },
    setIngredientUnit: (state, action) => {
      const { id, unit } = action.payload;
      const ingredient = state.recipe.ingredients.find(
        (ingredient) => ingredient.id === id
      );
      if (ingredient) {
        ingredient.unit = unit;
      }
    },
    setIngredientAmount: (state, action) => {
      const { id, amount } = action.payload;
      const ingredient = state.recipe.ingredients.find(
        (ingredient) => ingredient.id === id
      );
      if (ingredient) {
        ingredient.amount = amount;
      }
    },
    addStep: (state) => {
      state.recipe.steps.push({
        id: Date.now(),
        description: '',
        image: '',
        stepNumber: state.recipe.steps.length + 1,
      });
    },
    removeStep: (state, action) => {
      state.recipe.steps = state.recipe.steps.filter(
        (step) => step.id !== action.payload
      );
    },

    setDescriptionStep: (state, action) => {
      const { id, description } = action.payload;
      const step = state.recipe.steps.find((step) => step.id === id);
      if (step) {
        step.description = description;
      }
    },
    setImageStep: (state, action) => {
      const { id, image } = action.payload;
      const step = state.recipe.steps.find((step) => step.id === id);
      if (step) {
        step.image = image;
      }
    },
    setTime: (state, action) => {
      const { hours, minutes } = action.payload;
      if (hours !== undefined) state.recipe.cookTime.hours = hours;
      if (minutes !== undefined) state.recipe.cookTime.minutes = minutes;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createRecipeThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createRecipeThunk.fulfilled, (state, action) => {
        state.recipe = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(createRecipeThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      .addCase(imageUploadThunk.fulfilled, (state, action) => {
        const { url, type, id } = action.payload;

        if (type === 'cover') {
          state.recipe.image = url;
        } else if (type === 'step' && id !== undefined) {
          const step = state.recipe.steps.find((step) => step.id === id);
          if (step) {
            step.image = url;
          }
        }
      })

      .addCase(deleteRecipeThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteRecipeThunk.fulfilled, (state) => {
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
