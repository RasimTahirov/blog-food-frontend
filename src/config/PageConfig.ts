class PageConfig {
  home: string = '/';
  account: string = '/account';
  recipe: string = '/recipe/:id';
  recipeList: string = '/recipe/list';
  recipeCreate: string = '/recipe/create';
  recipeCategory: string = '/recipe/category/:category';
  recipeFavorite: string = '/recipe/favorite';
  article: string = '/article/:id';
  articleList: string = '/article/list';
  articleCreate: string = '/article/create';
}

export const pageConfig = new PageConfig();
