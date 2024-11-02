import { Route, Routes } from 'react-router-dom';
import { pageConfig } from '../../config/PageConfig';

import { Authorization, Registration } from '../../components/Auth';

const AuthRoutes = () => {
  return (
    <Routes>
      <Route path={pageConfig.login} element={<Authorization />} />
      <Route path={pageConfig.register} element={<Registration />} />
    </Routes>
  );
};

export default AuthRoutes;
