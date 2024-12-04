import { Button } from 'antd';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../store/store';
import { useNavigate } from 'react-router-dom';
import { pageConfig } from '../../../config/PageConfig';
import { GoBackHome } from '../../../shared/ui';
import { logout } from '../../../entities/user/auth/slice/authSlice';

const AccountButtonTop = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate(pageConfig.home);
    location.reload();
  };

  return (
    <div className="flex justify-end items-center mb-5">
      <div className="flex gap-5">
        <GoBackHome />
        <Button className="custom-button-red" onClick={() => handleLogout()}>
          Выйти
        </Button>
      </div>
    </div>
  );
};

export default AccountButtonTop;
