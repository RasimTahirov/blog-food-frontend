import avatar from '../../../public/assets/avatar/dceb8bb5ac5f91b63912faf77154483c.jpg';

import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { pageConfig } from '../../config/PageConfig';
import { AppDispatch } from '../../store/store';
import { logout } from '../../redux/authSlice';
import {
  email as initialEmail,
  name as initialName,
} from '../../utils/userStorage';

import { GoBackHome } from '../Index';
import { Button } from 'antd';

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
          <div className="flex justify-end items-center mb-5">
            <div className="flex gap-5">
              <GoBackHome />
              <Button className="custom-button" onClick={() => handleLogout()}>
                Выйти
              </Button>
            </div>
          </div>
          <div className="flex justify-between mb-5">
            <div className="grid gap-5">
              <div className="grid gap-[5px]">
                <label htmlFor="email" className="font-semibold">
                  Почта
                </label>
                <input
                  className="inputStyle"
                  disabled
                  type="text"
                  value={userEmail}
                />
              </div>
              <div className="grid gap-[5px]">
                <label htmlFor="name" className="font-semibold">
                  Имя
                </label>
                <input
                  className="inputStyle"
                  disabled
                  type="text"
                  value={userName}
                />
              </div>
            </div>
            <div>
              <img
                className="w-32 rounded-[50%]"
                src={avatar}
                alt="User avatar"
              />
            </div>
          </div>
          <div className="flex justify-between">
            <Link to={pageConfig.recipeCreate}>
              <Button className="custom-button">Избранное</Button>
            </Link>
            <Link to={pageConfig.recipeCreate}>
              <Button className="custom-button">Опубликовать рецепт</Button>
            </Link>
            <Link to={pageConfig.recipeCreate}>
              <Button className="custom-button">Создать статью</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
