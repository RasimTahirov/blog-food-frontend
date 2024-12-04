import { Route, Routes } from 'react-router-dom';
import { pageConfig } from '../../config/PageConfig';

import Main from '../layouts/Main/Main';

import {
  Account,
  ArticleCreatePage,
  ArticleList,
  Home,
  RecipeCategoriesPage,
  RecipeCreatePage,
  RecipeList,
  RecipePage,
} from '../../pages';
import { ScrollToTop } from '../../shared/helpers';

const AppRoutes = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path={pageConfig.home} element={<Main />}>
          <Route index element={<Home />} />
          <Route path={pageConfig.recipeList} element={<RecipeList />} />
          <Route path={pageConfig.articleList} element={<ArticleList />} />
        </Route>
        <Route path={pageConfig.account} element={<Account />} />
        <Route
          path={pageConfig.articleCreate}
          element={<ArticleCreatePage />}
        />
        <Route path={pageConfig.recipeCreate} element={<RecipeCreatePage />} />
        <Route
          path={pageConfig.recipeCategory}
          element={<RecipeCategoriesPage />}
        />
        <Route path={pageConfig.recipe} element={<RecipePage />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
