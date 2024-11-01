import { Route, Routes } from 'react-router-dom';

import Authorization from '../../components/Auth/Authorization';
import Registration from '../../components/Auth/Registration';

const LoginRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Authorization />} />
      <Route path="/register" element={<Registration />} />
    </Routes>
  );
};

export default LoginRoutes;
