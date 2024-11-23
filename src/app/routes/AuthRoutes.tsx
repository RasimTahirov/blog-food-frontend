import { Route, Routes } from 'react-router-dom';
import { pageConfig } from '../../config/PageConfig';
import { Account } from '../../components/Index';

import RecipeCreate from '../../components/Recipes/RecipeCreate/RecipeCreate';

const AuthRoutes = () => {
  return (
    <Routes>
      <Route path={pageConfig.account} element={<Account />} />
      <Route path={pageConfig.recipeCreate} element={<RecipeCreate />} />
    </Routes>
  );
};

export default AuthRoutes;
