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

export interface Recipe {
  _id?: string;
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
  recipe: null | Recipe;
  loading: boolean;
  error: string | null;
}

export interface initialStateRecipeList {
  recipes: [] | Recipe[];
  loading: boolean;
  error: string | null;
}

export interface initialStateRecipeCategory {
  categories: [];
  recipes: [];
  loading: boolean;
  error: string | null;
}

export interface initialStateRecipeCreate {
  recipe: Recipe;
  error: null | string;
  loading: boolean;
}

export interface SetIsActive {
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}
