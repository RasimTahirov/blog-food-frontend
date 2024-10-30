import { useState } from 'react';
import {
  ArrowRightEndOnRectangleIcon,
  HeartIcon,
  UserCircleIcon,
  Bars2Icon,
  XMarkIcon,
} from '@heroicons/react/16/solid';

const Header = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <header className="container-max text-lg mt-4 w-full sm:w-4/5 md:w-3/4 lg:w-3/4">
      <div className="main-container relative md:bg-headerDesktop bg-headerPhone bg-cover bg-center h-96 pt-4 rounded-3xl">
        <div className="absolute inset-0 bg-black opacity-40 rounded-3xl"></div>
        <div className="md:flex justify-between relative z-10 items-center xs:grid grid-cols-2">
          <div>
            <p>LOGO</p>
          </div>
          <div className="flex gap-10 items-center max-lg:gap-5 xs:justify-end">
            <nav className="relative max-md:flex gap-2.5 max-sm:grid">
              <div className="flex md:hidden items-center self-end">
                <button onClick={() => setIsOpen(!isOpen)}>
                  {' '}
                  {isOpen ? (
                    <Bars2Icon className="IconSize" />
                  ) : (
                    <XMarkIcon className="IconSize" />
                  )}{' '}
                </button>
              </div>

              <ul
                className={`${isOpen ? 'hidden' : 'flex'} md:gap-4 md:flex md:static xs:absolute xs:gap-1  grid right-0 top-5`}
              >
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

            {/* Неавторизованный пользователь */}
            <button className="buttonRed hidden md:block">Войти</button>
            <button className="buttonIcon md:hidden">
              <ArrowRightEndOnRectangleIcon className="IconSize" />
            </button>

            {/* Авторизованный пользователь */}
            {/* <div className="flex gap-3">
              <button className="buttonIcon">
                <HeartIcon className="IconSize" />
              </button>
              <button className="buttonIcon">
                <UserCircleIcon className="IconSize" />
              </button>
            </div> */}
          </div>
        </div>
        <div className="grid absolute bottom-5 lg:max-w-[60%] md:max-w-[80%] sm:max-w-[85%] xs:max-w-[90%]">
          <p className="xl:text-5xl lg:text-5xl md:text-5xl sm:text-4xl xs:text-3xl  font-bold mb-2.5">
            Еда, которая согревает
          </p>
          <div className="flex gap-2.5">
            {/* Неавторизованный пользователь */}
            <button className="buttonRed buttonHeader">Войти</button>
            <button className="buttonWhite buttonHeader text-black ">
              Зарегистрироваться
            </button>

            {/* Авторизованный пользователь */}
            {/* <button className="buttonRed buttonHeader">
              Опубликовать рецепт
            </button>
            <button className="buttonWhite buttonHeader text-black ">
              Создать статью
            </button> */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
