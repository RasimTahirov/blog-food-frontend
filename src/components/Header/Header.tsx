import logo from '../../../public/assets/logo/logo.svg';
import user from '../../../public/assets/icon/user.svg';
import favorite from '../../../public/assets/icon/favorite.svg';

const Header = () => {
  return (
    <header className="text-lg container-max mt-4">
      <div className="main-container relative bg-headerDesktop bg-cover bg-center h-96 pt-4 rounded-3xl">
        <div className="absolute inset-0 bg-black opacity-40 rounded-3xl"></div>
        <div className="flex justify-between relative z-10">
          <div>
            <p>LOGO</p>
          </div>
          <nav className="flex items-center">
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
          <button className="buttonRed">Войти</button>

          {/* При авторизации */}
          {/* <div className="flex gap-3">
            <button className="buttonIcon">
              <img src={favorite} alt="" style={{ width: '20px' }} />
            </button>
            <button className="buttonIcon">
              <img src={user} alt="" style={{ width: '20px' }} />
            </button>
          </div> */}
        </div>
        <div className="grid relative top-[40%] max-w-[50%]">
          <p className="text-5xl font-bold mb-2.5">Еда, которая согревает</p>
          <div className="flex gap-2.5">
            <button className="buttonRed justify-self-start">Войти</button>
            <button className="buttonWhite text-black">
              Зарегистрироваться
            </button>

            {/* При авторизации */}
            {/* <button className="buttonRed justify-self-start">Опубликовать рецепт</button>
            <button className="buttonWhite text-black">
              Создать статью
            </button> */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
