import { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { pageConfig } from '../../config/PageConfig';
import { HeartIcon, UserCircleIcon } from '@heroicons/react/16/solid';

import {
  Modal,
  ModalAuthorization,
  NavButtonIconWhite,
  Navigation,
  SubmitButtonWhite,
} from '../Index';

const CompactHeader = () => {
  const [isActiveAuthorization, setIsActiveAuthorization] = useState(false);

  const user = useSelector((state: RootState) => state.auth.user);
  return (
    <header className="container-max text-lg my-5 w-full text-textBlack">
      <div className="main-container relative h-[60px] py-5 rounded-mdPlus">
        <div className="flex justify-between relative z-10 items-center">
          <div>
            <span className="text-2xl font-semibold">Flavor Feast</span>
          </div>
          <div className="flex gap-5 items-center">
            <Navigation />
            {user ? (
              <div className="flex gap-5">
                {/* Временно  to={pageConfig.recipeCreate} */}
                <NavButtonIconWhite to={pageConfig.recipeCreate}>
                  <HeartIcon className="iconSize" />
                </NavButtonIconWhite>

                <NavButtonIconWhite to={pageConfig.account}>
                  <UserCircleIcon className="iconSize" />
                </NavButtonIconWhite>
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
      </div>
      <Modal
        active={isActiveAuthorization}
        setActive={setIsActiveAuthorization}
      >
        <ModalAuthorization setIsActive={setIsActiveAuthorization} />
      </Modal>
    </header>
  );
};

export default CompactHeader;
