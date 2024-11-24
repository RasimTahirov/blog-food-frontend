import { Route, Routes, useLocation } from 'react-router-dom';
import { pageConfig } from '../../config/PageConfig';
import Recipe from '../../components/Recipes/Recipe/Recipe';
import HomePageList from '../../components/Home/HomePageList/HomePageList';
import Header2 from '../../components/Header/CompactHeader';
import PostListAll from '../../components/Recipes/PostList/PostListAll';

const NavRoutes = () => {
  const location = useLocation();
  const isHomePage = location.pathname === pageConfig.home;

  return (
    <>
      {!isHomePage && <Header2 />}
      <Routes>
        <Route path={pageConfig.home} element={<HomePageList />} />
        <Route path={pageConfig.recipeList} element={<PostListAll />} />
        <Route path={pageConfig.recipe} element={<Recipe />} />
      </Routes>
    </>
  );
};

export default NavRoutes;
