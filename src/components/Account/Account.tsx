import avatar from '../../../public/assets/avatar/dceb8bb5ac5f91b63912faf77154483c.jpg';
import GoBackHome from '../UI/GoBackHome/GoBackHome';

const Account = () => {
  return (
    <div className="grid items-center h-[100vh]">
      <div className="container-max">
        <GoBackHome />
        <div className="bg-black w-[600px] rounded-3xl main-container">
          <form className="grid items-center h-[380px] py-5">
            <div className="flex justify-between center mb-5">
              <div>
                <img className="w-28 rounded-[50%]" src={avatar} alt="" />
              </div>
              <div className="flex gap-4">
                <button className="buttonWhite text-black">Израбнное</button>
                <button className="buttonWhite text-black">Выйти</button>
              </div>
            </div>
            <div className="grid gap-5">
              <div className="grid w-[40%]">
                <label>Имя</label>
                <input
                  className="inputStyle text-black bg-white"
                  disabled
                  type="text"
                  value="test"
                />
              </div>
              <div className="grid w-[40%]">
                <label>Почта</label>
                <input
                  className="inputStyle text-black bg-white"
                  disabled
                  type="text"
                  value="test@test.ru"
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
