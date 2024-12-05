import { Article, initialStateCreateArticle } from '../types/types';

const initialStateArticle: Article = {
  title: '',
  image: '',
  paragraph: [
    {
      id: Date.now(),
      title: '',
      description: '',
    },
  ],
  author: {
    name: '',
    surname: '',
    id: '',
  },
};

export const initialState: initialStateCreateArticle = {
  article: initialStateArticle || null,
  loading: false,
  error: null,
};