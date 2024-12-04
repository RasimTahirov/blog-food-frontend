interface Data {
  categories: [];
  posts: [];
  loading: boolean;
  error: string | null;
}

export const initialState: Data = {
  categories: [],
  posts: [],
  loading: false,
  error: null,
};
