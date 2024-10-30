import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Main = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow p-4">
      </main>
      <Footer  />
    </div>
  );
};

export default Main;
