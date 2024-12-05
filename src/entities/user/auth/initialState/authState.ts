import { User } from '../../types/types';

interface Data {
  user: User | null;
  token: string | null;
  loading: boolean;
  error: null | string;
}

export const initialState: Data = {
  user: JSON.parse(localStorage.getItem('user') || 'null'),
  token: localStorage.getItem('token') || '',
  loading: false,
  error: null,
};
