import { Article } from '../types/types';

interface Data {
  article: null | Article;
  loading: boolean;
  error: string | null;
}

export const initialState: Data = {
  article: null,
  error: null,
  loading: false,
};
