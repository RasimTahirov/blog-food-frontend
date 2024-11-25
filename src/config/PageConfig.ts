class PageConfig {
  home: string = '/';
  account: string = '/account';
  recipeCreate: string = '/recipe/create';
  recipeList: string = '/recipeList';
  recipe: string = '/recipe/:id';
  recipeCategory: string = '/recipe/category/:category';
}

export const pageConfig = new PageConfig();
