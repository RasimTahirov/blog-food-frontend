import { Outlet } from 'react-router-dom';
import { Footer, MainHeader } from '../../../widgets/index';

const Main = () => {
  return (
    <>
      <MainHeader />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Main;
