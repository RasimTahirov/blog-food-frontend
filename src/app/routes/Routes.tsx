import { Route, Routes } from 'react-router-dom';
import { pageConfig } from '../../config/PageConfig';
import { ScrollToTop } from '../../shared/helpers';

import Main from '../layouts/Main/Main';

import {
  Home,
  Account,
  ArticleCreatePage,
  ArticlePage,
  RecipeCategoriesPage,
  RecipeCreatePage,
  RecipePage,
  RecipeListPage,
  ArticleListPage,
} from '../../pages';

const AppRoutes = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path={pageConfig.home} element={<Main />}>
          <Route index element={<Home />} />
          <Route path={pageConfig.recipeList} element={<RecipeListPage />} />
          <Route path={pageConfig.articleList} element={<ArticleListPage />} />
          <Route
            path={pageConfig.recipeCreate}
            element={<RecipeCreatePage />}
          />
          <Route
            path={pageConfig.recipeCategory}
            element={<RecipeCategoriesPage />}
          />
          <Route path={pageConfig.recipe} element={<RecipePage />} />
          <Route path={pageConfig.article} element={<ArticlePage />} />
          <Route
            path={pageConfig.articleCreate}
            element={<ArticleCreatePage />}
          />
        </Route>
        <Route path={pageConfig.account} element={<Account />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
