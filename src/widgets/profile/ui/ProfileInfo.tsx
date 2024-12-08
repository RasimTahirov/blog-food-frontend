import avatar from '../../../../public/assets/avatar/dceb8bb5ac5f91b63912faf77154483c.jpg';
import { useEffect, useState } from 'react';
import {
  email as initialEmail,
  name as initialName,
} from '../../../shared/helpers';

const ProfileInfo = () => {
  const [userEmail, setUserEmail] = useState(initialEmail);
  const [userName, setUserName] = useState(initialName);

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      const parserData = JSON.parse(userData);
      setUserEmail(parserData.user.email);
      setUserName(parserData.user.name);
    }
  }, []);

  return (
    <div className="flex justify-between mb-5">
      <div className="grid gap-5">
        <div className="grid gap-[5px]">
          <label htmlFor="email" className="font-semibold">
            Почта
          </label>
          <input
            className="rounded-[5px] text-textBlack py-[2.5px] px-[5px]"
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
            className="rounded-[5px] text-textBlack py-[2.5px] px-[5px]"
            disabled
            type="text"
            value={userName}
          />
        </div>
      </div>
      <div>
        <img className="w-32 rounded-[50%]" src={avatar} alt="User avatar" />
      </div>
    </div>
  );
};

export default ProfileInfo;
