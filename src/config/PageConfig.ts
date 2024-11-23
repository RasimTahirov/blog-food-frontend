class PageConfig {
  home: string = '/';
  account: string = '/account';
  recipeCreate: string = '/recipe/create';
  recipeList: string = '/recipeList';
  postTest: string = '/postTest';
  recipe: string = '/recipe/:id';
  successRegistration: string = '/successRegistration';
}

export const pageConfig = new PageConfig();
