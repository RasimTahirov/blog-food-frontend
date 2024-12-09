import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { pageConfig } from '../../config/PageConfig';
import { ScrollToTop } from '../../shared/helpers';

import Main from '../layouts/Main/Main';
import FavoritesPage from '../../pages/favrotite/Favorite';

const Home = lazy(() => import('../../pages/home/Home'));
const Account = lazy(() => import('../../pages/account/Account'));
const ArticleCreatePage = lazy(
  () => import('../../pages/article/ArticleCreatePage')
);
const ArticlePage = lazy(() => import('../../pages/article/Article'));
const RecipeCategoriesPage = lazy(
  () => import('../../pages/recipe/RecipeCategoriesPage')
);
const RecipeCreatePage = lazy(
  () => import('../../pages/recipe/RecipeCreatePage')
);
const RecipePage = lazy(() => import('../../pages/recipe/Recipe'));
const RecipeListPage = lazy(() => import('../../pages/recipe/RecipeListPage'));
const ArticleListPage = lazy(
  () => import('../../pages/article/ArticleListPage')
);

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
          <Route path={pageConfig.recipeFavorite} element={<FavoritesPage />} />
        </Route>
        <Route path={pageConfig.account} element={<Account />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
