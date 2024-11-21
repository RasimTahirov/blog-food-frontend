class PageConfig {
  home: string = '/';
  login: string = '/login';
  register: string = '/register';
  account: string = '/account';
  createPost: string = '/recipe/create';
  recipeList: string = '/recipeList';
  postTest: string = '/postTest';
  recipe: string = '/recipe/:id';
}

export const pageConfig = new PageConfig();
