import { Link } from 'react-router-dom';

const Registration = () => {
  return (
    <div className="h-[100vh] grid items-center">
      <div className="w-[950px] container-max rounded-3xl bg-black max-sm:w-5/6 max-md:w-3/4 ">
        <div className="grid grid-cols-[35%_65%] h-[500px] max-md:flex max-md:justify-center">
          <div className="bg-registration bg-cover rounded-tl-3xl rounded-bl-3xl max-md:hidden"></div>
          <div className="p-10 content-center">
            <div className="flex justify-center text-3xl mb-10 font-bold">
              Регистрация
            </div>
            <form className="grid justify-center gap-10 max-w-[240px] m-auto text-black">
              <div className="grid gap-5">
                <div>
                  <input className="inputStyle" type="text" placeholder="Имя" />
                </div>
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
                <button className="buttonWhite w-full">
                  Зарегистрироваться
                </button>
              </div>
              <div className="grid justify-items-center text-white">
                <span>Есть аккаунт?</span>
                <Link className='text-hoverButton hover:text-white' to="/login">Войти</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
