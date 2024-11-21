import { useLocation } from 'react-router-dom';
import NavRoutes from '../../app/routes/NavRoutes';
import { Footer } from '../Index';
import { pageConfig } from '../../config/PageConfig';
import AuthRoutes from '../../app/routes/AuthRoutes';
import MainHeader from '../Header/MainHeader';

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
