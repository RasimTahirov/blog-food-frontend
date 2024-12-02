import { Route, Routes, useLocation } from 'react-router-dom';
import { pageConfig } from '../../config/PageConfig';
import Recipe from '../../components/Recipes/Recipe/Recipe';
import HomePageList from '../../components/Home/HomePageList/HomePageList';
import CompactHeader from '../../components/Header/CompactHeader';
import PostListAll from '../../components/Recipes/PostList/PostListAll';
import RecipeCategory from '../../components/Recipes/RecipeCategory/RecipeCategory';
import ScrollToTop from '../../utils/ScrollToTop';
import ArticleCreate from '../../components/Articles/ArticleCreate/ArticleCreate';
import ArticleList from '../../components/Articles/Article/components/ArticleList/ArticleList';
import ArticleListAll from '../../components/Articles/Article/components/ArticleList/ArticleListAll';
import Article from '../../components/Articles/Article/Article';

const NavRoutes = () => {
  const location = useLocation();
  const isHomePage = location.pathname === pageConfig.home;

  return (
    <>
      {!isHomePage && <CompactHeader />}
      <ScrollToTop />
      <Routes>
        <Route path={pageConfig.home} element={<HomePageList />} />
        <Route path={pageConfig.recipe} element={<Recipe />} />
        <Route path={pageConfig.recipeList} element={<PostListAll />} />
        <Route path={pageConfig.recipeCategory} element={<RecipeCategory />} />
        <Route path={pageConfig.articleCreate} element={<ArticleCreate />} />
        <Route path={pageConfig.articleList} element={<ArticleList />} />
        <Route path={pageConfig.articleListAll} element={<ArticleListAll />} />
        <Route path={pageConfig.article} element={<Article />} />
      </Routes>
    </>
  );
};

export default NavRoutes;
