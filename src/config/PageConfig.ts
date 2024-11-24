class PageConfig {
  home: string = '/';
  account: string = '/account';
  recipeCreate: string = '/recipe/create';
  recipeList: string = '/recipeList';
  recipe: string = '/recipe/:id';
}

export const pageConfig = new PageConfig();
