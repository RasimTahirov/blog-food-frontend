import { Route, Routes, useLocation } from 'react-router-dom';
import { pageConfig } from '../../config/PageConfig';

import Recipe from '../../components/Recipes/Recipe/Recipe';
import HomePageList from '../../components/Home/HomePageList/HomePageList';
import CompactHeader from '../../components/Header/CompactHeader';
import PostListAll from '../../components/Recipes/PostList/PostListAll';
import RecipeCategory from '../../components/Recipes/RecipeCategory/RecipeCategory';
import ScrollToTop from '../../utils/scrollToTop';

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
      </Routes>
    </>
  );
};

export default NavRoutes;
