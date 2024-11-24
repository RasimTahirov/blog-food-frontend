import { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { pageConfig } from '../../config/PageConfig';
import { HeartIcon, UserCircleIcon } from '@heroicons/react/16/solid';

import ModalAuthorization from '../Auth/Authorization/ModalAuthorization';
import ModalRegistration from '../Auth/Registration/ModalRegistration';

import {
  Modal,
  NavButtonIconRed,
  NavButtonWhite,
  Navigation,
  SubmitButtonWhite,
} from '../Index';

const MainHeader = () => {
  const [isActiveAuthorization, setIsActiveAuthorization] = useState(false);
  const [isActiveRegister, setIsActiveRegister] = useState(false);

  const user = useSelector((state: RootState) => state.auth.user);

  return (
    <header className="container-max text-lg my-5 w-full text-textWhite">
      <div className="main-container relative bg-headerDesktop bg-cover bg-center h-[380px] py-5 rounded-mdPlus">
        <div className="absolute inset-0 bg-black opacity-40 rounded-mdPlus "></div>
        <div className="flex justify-between relative z-10 items-center">
          <div>
            <span>LOGO</span>
          </div>
          <div className="flex gap-5 items-center">
            <Navigation />
            {user ? (
              <div className="flex gap-5">
                {/* Временно  to={pageConfig.recipeCreate} */}
                <NavButtonIconRed to={pageConfig.recipeCreate}>
                  <HeartIcon className="iconSize" />
                </NavButtonIconRed>

                <NavButtonIconRed to={pageConfig.account}>
                  <UserCircleIcon className="iconSize" />
                </NavButtonIconRed>
              </div>
            ) : (
              <>
                <SubmitButtonWhite
                  onClick={() => setIsActiveAuthorization(true)}
                >
                  Войти
                </SubmitButtonWhite>
              </>
            )}
          </div>
        </div>
        <div className="grid absolute bottom-5">
          <p className="text-5xl font-bold mb-2.5">Еда, которая согревает</p>
          <div className="flex gap-2.5 mt-2.5">
            {user ? (
              <>
                <NavButtonWhite
                  to={pageConfig.recipeCreate}
                  title="Опубликовать рецепт"
                />
                <NavButtonWhite
                  to={pageConfig.recipeCreate}
                  title="Создать статью"
                />
              </>
            ) : (
              <>
                <SubmitButtonWhite
                  onClick={() => setIsActiveAuthorization(true)}
                >
                  Войти
                </SubmitButtonWhite>
                <SubmitButtonWhite onClick={() => setIsActiveRegister(true)}>
                  Зарегистрироваться
                </SubmitButtonWhite>
              </>
            )}
          </div>
        </div>
      </div>
      <Modal
        active={isActiveAuthorization}
        setActive={setIsActiveAuthorization}
      >
        <ModalAuthorization setIsActive={setIsActiveAuthorization} />
      </Modal>
      <Modal active={isActiveRegister} setActive={setIsActiveRegister}>
        <ModalRegistration setIsActive={setIsActiveRegister} />
      </Modal>
    </header>
  );
};

export default MainHeader;
