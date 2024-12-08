import { initialStateRecipeCreate, Recipe } from '../model/types';

const createRecipeState: Recipe = {
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

export const initialState: initialStateRecipeCreate = {
  recipe: createRecipeState || null,
  loading: false,
  error: null,
};
