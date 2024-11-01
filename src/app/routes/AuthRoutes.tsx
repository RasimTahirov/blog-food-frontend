import { Route, Routes } from 'react-router-dom';

import { Authorization, Registration } from '../../components/Auth';

const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Authorization />} />
      <Route path="/register" element={<Registration />} />
    </Routes>
  );
};

export default AuthRoutes;
