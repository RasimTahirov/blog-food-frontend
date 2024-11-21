import { Navigate, Route, Routes } from 'react-router-dom';
import { pageConfig } from '../../config/PageConfig';
import { useSelector } from 'react-redux';

import { RootState } from '../../store/store';

import { Account, Authorization, Registration } from '../../components/Index';
import RecipeCreate from '../../components/Recipes/RecipeCreate/RecipeCreate';
import NavRoutes from './NavRoutes';

const AuthRoutes = () => {
  const user = useSelector((state: RootState) => state.auth.user);

  return (
    <Routes>
      <Route
        path={pageConfig.login}
        element={
          user ? <Navigate to={pageConfig.account} /> : <Authorization />
        }
      />
      <Route
        path={pageConfig.register}
        element={user ? <Navigate to={pageConfig.account} /> : <Registration />}
      />
      <Route
        path={pageConfig.account}
        element={!user ? <Navigate to={pageConfig.login} /> : <Account />}
      />
      <Route path={pageConfig.account} element={<Account />} />
      <Route path={pageConfig.createPost} element={<RecipeCreate />} />
    </Routes>
  );
};

export default AuthRoutes;
