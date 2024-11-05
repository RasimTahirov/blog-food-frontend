import { useLocation } from 'react-router-dom';
import { pageConfig } from '../../config/PageConfig';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from '../../redux/authSlice';

import AuthRoutes from '../../app/routes/AuthRoutes';

import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Main = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  const hideHeaderFooterRoutes = [
    pageConfig.login,
    pageConfig.register,
    pageConfig.account,
  ];
  const shouldHideHeaderFooter = hideHeaderFooterRoutes.includes(
    location.pathname
  );

  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      dispatch(setUser(JSON.parse(savedUser)));
    }
  }, [dispatch]);

  return (
    <div className="flex flex-col min-h-screen">
      {!shouldHideHeaderFooter && <Header />}
      <main className="flex-grow p-4">
        <AuthRoutes />
      </main>
      {!shouldHideHeaderFooter && <Footer />}
    </div>
  );
};

export default Main;
