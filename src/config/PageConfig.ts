class PageConfig {
  home: string = '/';
  login: string = '/login';
  register: string = '/register';
  account: string = '/account';
  createPost: string = '/post/create';
  recipeList: string = '/recipeList';
  recipe: string = '/recipe/:id';
}

export const pageConfig = new PageConfig();
