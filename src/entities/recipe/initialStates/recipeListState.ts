interface Data {
  posts: [];
  loading: boolean;
  error: string | null;
}

export const initialState: Data = {
  posts: [],
  loading: false,
  error: null,
};
