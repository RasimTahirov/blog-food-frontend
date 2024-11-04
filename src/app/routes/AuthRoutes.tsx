import { Route, Routes } from 'react-router-dom';
import { pageConfig } from '../../config/PageConfig';

import { Authorization, Registration } from '../../components/Auth';
import Account from '../../components/Account/Account';

const AuthRoutes = () => {
  return (
    <Routes>
      <Route path={pageConfig.login} element={<Authorization />} />
      <Route path={pageConfig.register} element={<Registration />} />
      <Route path={pageConfig.account} element={<Account />} />
    </Routes>
  );
};

export default AuthRoutes;
