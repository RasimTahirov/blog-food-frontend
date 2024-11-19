import { Route, Routes } from 'react-router-dom';
import { pageConfig } from '../../config/PageConfig';
import PostList from '../../components/Posts/PostList/PostList';
import Post from '../../components/Posts/Post/Post';

const NavRoutes = () => {
  return (
    <Routes>
      <Route path={pageConfig.recipeList} element={<PostList />} />

      {/* Временно */}
      <Route path={pageConfig.recipe} element={<Post />} />
    </Routes>
  );
};

export default NavRoutes;
