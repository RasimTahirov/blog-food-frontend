import { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { pageConfig } from '../../config/PageConfig';
import { Link } from 'react-router-dom';
import { HeartFilled, UserOutlined } from '@ant-design/icons';

import {
  Modal,
  ModalAuthorization,
  ModalRegistration,
  Navigation,
} from '../Index';
import { Button } from 'antd';

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
            <span className="text-2xl font-semibold">Flavor Feast</span>
          </div>
          <div className="flex gap-5 items-center">
            <Navigation />
            {user ? (
              <div className="flex gap-5">
                {/* Временно  to={pageConfig.account} */}
                <Link to={pageConfig.account}>
                  <Button className="custom-button">
                    <HeartFilled />
                  </Button>
                </Link>
                <Link to={pageConfig.account}>
                  <Button className="custom-button">
                    <UserOutlined />
                  </Button>
                </Link>
              </div>
            ) : (
              <>
                <Button
                  onClick={() => setIsActiveAuthorization(true)}
                  className="custom-button"
                >
                  Войти
                </Button>
              </>
            )}
          </div>
        </div>
        <div className="grid absolute bottom-5">
          <p className="text-5xl font-bold">Еда, которая согревает</p>
          <div className="flex gap-2.5 mt-2.5">
            {user ? (
              <>
                <Link className="link-style" to={pageConfig.recipeCreate}>
                  <Button className="custom-button">Опубликовать рецепт</Button>
                </Link>
                <Link className="link-style" to={pageConfig.recipeCreate}>
                  <Button className="custom-button">Опубликовать статью</Button>
                </Link>
              </>
            ) : (
              <>
                <Button
                  onClick={() => setIsActiveAuthorization(true)}
                  className="custom-button"
                >
                  Войти
                </Button>
                <Button
                  onClick={() => setIsActiveRegister(true)}
                  className="custom-button"
                >
                  Зарегистрироваться
                </Button>
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
