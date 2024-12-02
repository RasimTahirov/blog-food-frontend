class PageConfig {
  home: string = '/';
  account: string = '/account';
  recipeCreate: string = '/recipe/create';
  recipeList: string = '/recipeList';
  recipe: string = '/recipe/:id';
  recipeCategory: string = '/recipe/category/:category';
  articleCreate: string = '/article/create';
  articleList: string = '/article/list';
  articleListAll: string = '/article/list/all';
  article: string = '/article/:id';
}

export const pageConfig = new PageConfig();
