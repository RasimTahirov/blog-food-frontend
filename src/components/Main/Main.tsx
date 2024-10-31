import LoginRoutes from '../../app/routes/LoginRoutes';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Login from '../Auth/Authorization';

const Main = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* <Header /> */}
      <main className="flex-grow p-4">
        <LoginRoutes />
      </main>
      {/* <Footer  /> */}
    </div>
  );
};

export default Main;
