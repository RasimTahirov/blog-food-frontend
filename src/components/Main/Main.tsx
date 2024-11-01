import { useLocation } from 'react-router-dom';

import LoginRoutes from '../../app/routes/LoginRoutes';

import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Main = () => {
  const location = useLocation();

  const hideHeaderFooterRoutes = ['/login', '/register'];
  const shouldHideHeaderFooter = hideHeaderFooterRoutes.includes(
    location.pathname
  );

  return (
    <div className="flex flex-col min-h-screen">
      {!shouldHideHeaderFooter && <Header />}
      <main className="flex-grow p-4">
        <LoginRoutes />
      </main>
      {!shouldHideHeaderFooter && <Footer />}
    </div>
  );
};

export default Main;
