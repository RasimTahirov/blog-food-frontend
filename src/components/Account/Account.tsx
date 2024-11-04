import {
  ArrowRightEndOnRectangleIcon,
  HeartIcon,
} from '@heroicons/react/16/solid';
import avatar from '../../../public/assets/avatar/dceb8bb5ac5f91b63912faf77154483c.jpg';

import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/authSlice';
import { useNavigate } from 'react-router-dom';
import { AppDispatch, RootState } from '../../store/store';

import GoBackHome from '../UI/GoBackHome/GoBackHome';

const Account = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const user = useSelector((state: RootState) => state.auth.user);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  return (
    <div className="h-[100vh] grid items-center">
      <div className="m-auto w-2/5 max-xl:w-2/5 max-lg:w-2/4 max-md:w-4/5">
        <GoBackHome />
        <div className="bg-black rounded-3xl w-full">
          <form className="grid items-center h-[380px] py-5 px-7">
            <div className="flex justify-between center mb-5">
              <div>
                <img className="w-14 rounded-[50%]" src={avatar} alt="" />
              </div>
              <div className="flex gap-4 max-lg:hidden">
                <button className="buttonWhite text-black">Избранное</button>
                <button
                  className="buttonWhite text-black"
                  onClick={handleLogout}
                >
                  Выйти
                </button>
              </div>
              <div className="flex gap-4 lg:hidden">
                <button className="buttonWhite text-black">
                  <HeartIcon className="IconSize" />
                </button>
                <button className="buttonWhite text-black">
                  <ArrowRightEndOnRectangleIcon className="IconSize" />
                </button>
              </div>
            </div>
            <div className="grid gap-5">
              <div className="grid w-[40%]">
                <label>Имя</label>
                <input
                  className="inputStyle text-black bg-white"
                  disabled
                  type="text"
                  value={user?.name || ''}
                />
              </div>
              <div className="grid w-[40%]">
                <label>Почта</label>
                <input
                  className="inputStyle text-black bg-white"
                  disabled
                  type="text"
                  value={user?.email || ''}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Account;
