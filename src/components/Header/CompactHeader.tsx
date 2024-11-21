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

const CompactHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const user = useSelector((state: RootState) => state.auth.user);

  return (
    <header className="container-max text-lg mt-4 mb-5 w-full sm:w-4/5 md:w-3/4 lg:w-3/4 text-textBlack">
      <div className="main-container relative  bg-cover bg-center h-[60px] pt-4 rounded-[10px]">
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
                <button className="buttonIcon2">
                  <HeartIcon className="IconSize" />
                </button>
                <Link to={pageConfig.account} className="buttonIcon2">
                  <UserCircleIcon className="IconSize" />
                </Link>
              </div>
            ) : (
              <>
                <button className="max-md:hidden bg-containerWhite">
                  <Link className="buttonWhite" to={pageConfig.login}>
                    Войти
                  </Link>
                </button>
                <Link className="buttonIcon2 md:hidden" to={pageConfig.login}>
                  <ArrowRightEndOnRectangleIcon className="IconSize" />
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default CompactHeader;
