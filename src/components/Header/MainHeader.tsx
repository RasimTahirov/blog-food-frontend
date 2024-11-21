import { useState } from 'react';
import { Link } from 'react-router-dom';
import { pageConfig } from '../../config/PageConfig';
import {
  ArrowRightEndOnRectangleIcon,
  HeartIcon,
  UserCircleIcon,
  Bars2Icon,
  XMarkIcon,
} from '@heroicons/react/16/solid';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

const MainHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const user = useSelector((state: RootState) => state.auth.user);

  return (
    <header className="container-max text-lg mt-4 mb-5 w-full sm:w-4/5 md:w-3/4 lg:w-3/4">
      <div className="main-container relative md:bg-headerDesktop bg-headerPhone bg-cover bg-center h-96 pt-4 rounded-3xl">
        <div className="absolute inset-0 bg-black opacity-40 rounded-3xl"></div>
        <div className="md:flex justify-between relative z-10 items-center xs:grid grid-cols-2">
          <div>
            <p>LOGO</p>
          </div>
          <div className="flex gap-10 items-center max-lg:gap-5 xs:justify-end">
            <nav className="relative max-md:flex gap-2.5 max-sm:grid">
              <div className="flex md:hidden items-center self-end">
                <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                  {' '}
                  {isMenuOpen ? (
                    <Bars2Icon className="IconSize" />
                  ) : (
                    <XMarkIcon className="IconSize" />
                  )}{' '}
                </button>
              </div>

              <ul
                className={`${isMenuOpen ? 'hidden' : 'flex'} md:gap-4 md:flex md:static xs:absolute xs:gap-1  grid right-0 top-5`}
              >
                <li>
                  <Link to={pageConfig.home}>Главная</Link>
                </li>
                <li>
                  <Link to={pageConfig.recipeList}>Рецепты</Link>
                </li>
                <li>
                  <a href="">Блог</a>
                </li>
              </ul>
            </nav>

            {user ? (
              <div className="flex gap-3">
                <button className="buttonIcon">
                  <HeartIcon className="IconSize" />
                </button>
                <Link to={pageConfig.account} className="buttonIcon">
                  <UserCircleIcon className="IconSize" />
                </Link>
              </div>
            ) : (
              <>
                <button className="max-md:hidden">
                  <Link className="buttonRed" to={pageConfig.login}>
                    Войти
                  </Link>
                </button>
                <Link className="buttonIcon md:hidden" to={pageConfig.login}>
                  <ArrowRightEndOnRectangleIcon className="IconSize" />
                </Link>
              </>
            )}
          </div>
        </div>
        <div className="grid absolute bottom-5 lg:max-w-[60%] md:max-w-[80%] sm:max-w-[85%] xs:max-w-[90%]">
          <p className="xl:text-5xl lg:text-5xl md:text-5xl sm:text-4xl xs:text-3xl  font-bold mb-2.5">
            Еда, которая согревает
          </p>
          <div className="flex gap-2.5 mt-2.5">
            {user ? (
              <>
                <button className="buttonRed buttonHeader max-sm:text-sm max-sm:py-1 max-md:px-5 max-sm:leading-none max-xs:text-[13px] py-1.5 px-2 leading-none">
                  <Link to={pageConfig.createPost}>Опубликовать рецепт</Link>
                </button>
                <button className="buttonWhite buttonHeader text-black max-sm:text-sm max-sm:py-1 max-md:px-5 max-sm:leading-none max-xs:text-[13px] py-1.5 px-2 leading-none">
                  Создать статью
                </button>
              </>
            ) : (
              <>
                <button>
                  <Link
                    className="buttonRed buttonHeader "
                    to={pageConfig.login}
                  >
                    Войти
                  </Link>
                </button>
                <button>
                  <Link
                    className="buttonWhite buttonHeader text-black"
                    to={pageConfig.register}
                  >
                    Зарегистрироваться
                  </Link>
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default MainHeader;