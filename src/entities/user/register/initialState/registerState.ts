import { User } from '../../types/types';

interface Data {
  user: User | null;
  loading: boolean;
  error: null | string;
}

export const initialState: Data = {
  user: null,
  loading: false,
  error: null,
};
