import logo from '../../../public/assets/logo/logo.svg';

const Header = () => {
  return (
    <header className="text-lg containersss mt-4">
      <div className="containers relative bg-header-bg bg-cover bg-center h-96 pt-4">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="flex justify-between relative z-10">
          <div>
            <p>LOGO</p>
          </div>
          <nav>
            <ul className="flex gap-4">
              <li>
                <a href="">Главная</a>
              </li>
              <li>
                <a href="">Рецепты</a>
              </li>
              <li>
                <a href="">Блог</a>
              </li>
            </ul>
          </nav>
          <div className="button">
            <button>Войти</button>
          </div>
        </div>
        <div className="container grid relative top-[40%] max-w-[50%]">
          <p className="text-5xl font-bold mb-2.5">Еда, которая согревает</p>
          <div className="flex gap-2.5">
            <button className="justify-self-start button">Войти</button>
            <button className="button2 text-black">Зарегистрироваться</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
