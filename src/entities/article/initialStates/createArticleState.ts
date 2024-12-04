import { Article, Data } from '../types/types';

const initialStateArticle: Article = {
  _id: '', // Пока хз
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

export const initialState: Data = {
  article: initialStateArticle || null,
  loading: false,
  error: null,
};
