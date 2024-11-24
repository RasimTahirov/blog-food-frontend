export interface ImageUploadResult {
  url: string;
  type: 'cover' | 'step';
  id?: number;
}

export type IngredientType = {
  id: number;
  name: string;
  unit: string;
  amount: number;
};

export type StepType = {
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
}

export interface Data {
  post: Post;
  error: null | string;
  loading: boolean;
}

export interface SetIsActive {
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}
