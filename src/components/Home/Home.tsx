import { useLocation } from 'react-router-dom';
import { pageConfig } from '../../config/PageConfig';

import NavRoutes from '../../app/routes/NavRoutes';
import AuthRoutes from '../../app/routes/AuthRoutes';

import { Footer, MainHeader } from '../Index';

const Home = () => {
  const location = useLocation();
  const isHomePage = location.pathname === pageConfig.home;

  return (
    <>
      {isHomePage && <MainHeader />}
      <NavRoutes />
      <AuthRoutes />
      <Footer />
    </>
  );
};

export default Home;
