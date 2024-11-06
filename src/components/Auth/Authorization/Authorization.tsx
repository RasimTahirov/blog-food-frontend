import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { authThunk } from '../../../redux/authSlice';
import { AppDispatch, RootState } from '../../../store/store';
import { pageConfig } from '../../../config/PageConfig';

import { GoBackHome } from '../../Index';

interface FormValues {
  email: string;
  password: string;
}

const Authorization = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { error } = useSelector((state: RootState) => state.auth);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    mode: 'onBlur',
  });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    const result = await dispatch(authThunk(data));
    if (authThunk.fulfilled.match(result)) {
      localStorage.setItem('user', JSON.stringify(result.payload));
      navigate(pageConfig.home);
      reset();
    }
  };

  return (
    <div className="h-[100vh] grid items-center">
      <div className="w-[950px] m-auto container-max max-sm:w-5/6 max-md:w-3/4">
        <GoBackHome />
        <div className="rounded-3xl bg-black">
          <div className="grid grid-cols-[35%_65%] h-[500px] max-md:flex max-md:justify-center">
            <div className="bg-authorization bg-cover rounded-tl-3xl rounded-bl-3xl max-md:hidden"></div>
            <div className="p-10 content-center">
              <label className="flex justify-center text-3xl mb-10 font-bold">
                Авторизация
              </label>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="grid justify-center gap-10 max-w-[240px] m-auto text-black"
              >
                <div className="grid gap-7">
                  <div className="relative">
                    <input
                      {...register('email', {
                        required: 'Введите email',
                        pattern: {
                          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message: 'Некорректный email',
                        },
                      })}
                      className="inputStyle"
                      type="email"
                      placeholder="Логин"
                      autoComplete="off"
                    />
                    {errors.email && (
                      <span className="errorStyle">
                        {errors.email?.message}
                      </span>
                    )}
                  </div>
                  <div className="relative">
                    <input
                      {...register('password', {
                        required: 'Введите пароль',
                      })}
                      className="inputStyle"
                      type="password"
                      placeholder="Пароль"
                      autoComplete="off"
                    />
                    {errors.password && (
                      <span className="errorStyle">
                        {errors.password?.message}
                      </span>
                    )}
                  </div>
                </div>
                <div className="relative">
                  <button className="buttonWhite w-full">Войти</button>
                  {error && <span className="text-white mt-1.5">{error}</span>}
                </div>
                <div className="grid justify-items-center text-white">
                  <span>Еще не зарегистрированы?</span>
                  <Link
                    className="text-hoverButton hover:text-white"
                    to={pageConfig.register}
                  >
                    Зарегистрироваться
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Authorization;
