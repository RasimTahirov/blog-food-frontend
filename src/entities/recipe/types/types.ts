export interface ImageUploadResult {
  url: string;
  type: 'cover' | 'step';
  id?: number;
}

export type IngredientType = {
  _id?: string;
  id: number;
  name: string;
  unit: string;
  amount: number;
};

export type StepType = {
  _id?: string;
  id: number;
  description: string;
  image: string;
  stepNumber: number;
};

export interface Post {
  title: string;
  description: string;
  categories: string;
  ingredients: IngredientType[];
  steps: StepType[];
  image: string;
  cookTime: {
    hours: number;
    minutes: number;
  };
  author: {
    name: string;
    surname: string;
    id: string;
  };
}

export interface initialStateRecipe {
  post: null | Post;
  loading: boolean;
  error: string | null;
}

export interface initialStateRecipeList {
  posts: [];
  loading: boolean;
  error: string | null;
}

export interface initialStateRecipeCategory {
  categories: [];
  posts: [];
  loading: boolean;
  error: string | null;
}

export interface initialStateRecipeCreate {
  post: Post;
  error: null | string;
  loading: boolean;
}

export interface SetIsActive {
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}
