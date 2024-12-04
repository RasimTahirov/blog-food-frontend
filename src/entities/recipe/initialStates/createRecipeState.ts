import { Data, Post } from '../types/types';

// initialStatePost
const createRecipeState: Post = {
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

export const initialState: Data = {
  post: createRecipeState || null,
  loading: false,
  error: null,
};
