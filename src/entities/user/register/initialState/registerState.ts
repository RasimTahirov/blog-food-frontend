import { User } from '../../model/types';

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
