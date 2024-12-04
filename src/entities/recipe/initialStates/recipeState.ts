import { Post } from '../types/types';

interface Data {
  post: null | Post;
  loading: boolean;
  error: string | null;
}

export const initialState: Data = {
  post: null,
  loading: false,
  error: null,
};
