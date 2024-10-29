import logo from '../../../public/assets/logo/logo.svg';
import user from '/assets/icon/user.svg';
import favorite from '/assets/icon/favorite.svg';
import login from '/assets/icon/login.svg';

const Header = () => {
  return (
    <header className="container-max text-lg mt-4 w-full sm:w-4/5 md:w-3/4 lg:w-3/4">
      <div className="main-container relative md:bg-headerDesktop bg-headerPhone bg-cover bg-center h-96 pt-4 rounded-3xl">
        <div className="absolute inset-0 bg-black opacity-40 rounded-3xl"></div>
        <div className="flex justify-between relative z-10 items-center">
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
          <button className="buttonRed hidden md:block">Войти</button>
          <button className="buttonIcon md:hidden">
            <img src={login} alt="войти" style={{ width: '20px' }} />
          </button>

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
        <div className="grid absolute bottom-5 lg:max-w-[35%] md:max-w-[65%] sm:max-w-[60%] xs:max-w-[60%]">
          <p className="xl:text-5xl lg:text-5xl md:text-5xl sm:text-4xl xs:text-3xl  font-bold mb-2.5">
            Еда, которая согревает
          </p>
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
