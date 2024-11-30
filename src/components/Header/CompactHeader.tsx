import { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { pageConfig } from '../../config/PageConfig';
import { HeartFilled, UserOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

import { Modal, ModalAuthorization, Navigation } from '../Index';
import { Button } from 'antd';

const CompactHeader = () => {
  const [isActiveAuthorization, setIsActiveAuthorization] = useState(false);

  const user = useSelector((state: RootState) => state.auth.user);
  return (
    <header className="container-max text-lg my-5 w-full text-textBlack">
      <div className="main-container relative py-5 rounded-mdPlus">
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
                <Button className="custom-button">Войти</Button>
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
