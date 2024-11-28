import avatar from '../../../public/assets/avatar/dceb8bb5ac5f91b63912faf77154483c.jpg';

import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { pageConfig } from '../../config/PageConfig';
import { AppDispatch } from '../../store/store';
import { logout } from '../../redux/authSlice';
import {
  email as initialEmail,
  name as initialName,
} from '../../utils/userStorage';

import { GoBackHome, NavButtonBlack, SubmitButtonBlack } from '../Index';

const Account = () => {
  const [userEmail, setUserEmail] = useState(initialEmail);
  const [userName, setUserName] = useState(initialName);

  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      const parserData = JSON.parse(userData);
      setUserEmail(parserData.user.email);
      setUserName(parserData.user.name);
    }
  }, []);

  const handleLogout = () => {
    dispatch(logout());
    navigate(pageConfig.home);
    location.reload();
  };

  return (
    <div className="container-max text-textBlack">
      <div className="main-container">
        <div className="w-[555px] m-10">
          <div className="flex justify-between items-center mb-[20px]">
            <img
              className="w-32 rounded-[50%]"
              src={avatar}
              alt="User avatar"
            />
            <div className="flex gap-5">
              <GoBackHome />
              <SubmitButtonBlack onClick={() => handleLogout()}>
                Выйти
              </SubmitButtonBlack>
            </div>
          </div>
          <div className="grid gap-5 w-[50%] mb-[20px]">
            <div className="grid gap-[5px]">
              <label htmlFor="email">Почта</label>
              <input
                className="inputStyle"
                disabled
                type="text"
                value={userEmail}
              />
            </div>
            <div className="grid gap-[5px]">
              <label htmlFor="name">Имя</label>
              <input
                className="inputStyle"
                disabled
                type="text"
                value={userName}
              />
            </div>
          </div>
          <div className="flex justify-between">
            <NavButtonBlack title="Избранное" to={pageConfig.recipeCreate} />
            <NavButtonBlack
              title="Опубликовать рецепт"
              to={pageConfig.recipeCreate}
            />
            <NavButtonBlack
              title="Создать статью"
              to={pageConfig.recipeCreate}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
