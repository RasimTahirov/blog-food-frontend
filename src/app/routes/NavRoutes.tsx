import { Route, Routes, useLocation } from 'react-router-dom';
import { pageConfig } from '../../config/PageConfig';
import Recipe from '../../components/Recipes/Recipe/Recipe';
import HomePageList from '../../components/Home/HomePageList/HomePageList';
import Header2 from '../../components/Header/CompactHeader';
import PostListAll from '../../components/Recipes/PostList/PostListAll';

const NavRoutes = () => {
  const location = useLocation(); // Получаем текущий путь
  const isHomePage = location.pathname === pageConfig.home; // Проверяем, находимся ли на главной странице

  return (
    <>
      {!isHomePage && <Header2 />}{' '}
      {/* Показываем Header2, если не на главной */}
      <Routes>
        <Route path={pageConfig.home} element={<HomePageList />} />
        <Route path={pageConfig.recipeList} element={<PostListAll />} />
        <Route path={pageConfig.recipe} element={<Recipe />} />
      </Routes>
    </>
  );
};

export default NavRoutes;
