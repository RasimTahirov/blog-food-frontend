import { Link } from 'react-router-dom';

const Authorization = () => {
  return (
    <div className="h-[100vh] grid items-center">
      <div className="w-[950px] container-max rounded-3xl bg-black">
        <div className="grid grid-cols-[35%_65%] h-[500px] ">
          <div className="bg-authorization bg-cover rounded-tl-3xl rounded-bl-3xl"></div>
          <div className="p-10 content-center">
            <div className="flex justify-center text-3xl mb-10 font-bold">
              Авторизация
            </div>
            <form className="grid justify-center gap-10 max-w-[240px] m-auto text-black">
              <div className="grid gap-5">
                <div>
                  <input
                    className="inputStyle"
                    type="text"
                    placeholder="Логин"
                  />
                </div>
                <div>
                  <input
                    className="inputStyle"
                    type="password"
                    placeholder="Пароль"
                  />
                </div>
              </div>
              <div>
                <button className="buttonWhite w-full">Войти</button>
              </div>
              <div className="grid justify-items-center text-white">
                <span>Еще не зарегистрированы?</span>
                <Link to="/register">Зарегистрироваться</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Authorization;
