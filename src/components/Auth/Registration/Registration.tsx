import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { registerThunk } from '../../../redux/authSlice';
import { AppDispatch, RootState } from '../../../store/store';
import { FormValues } from '../types/FormValues';

import useErrorHandler from '../hooks/useErrorHandler';

const Registration = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { error } = useSelector((state: RootState) => state.auth);

  const goBack = () => navigate('/');
  const showError = useErrorHandler(error);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    mode: 'onTouched',
  });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    const result = await dispatch(registerThunk(data));
    if (registerThunk.fulfilled.match(result)) {
      navigate('/login');
      reset();
    }
  };

  return (
    <div className="h-[100vh] grid items-center">
      <div className="w-[950px] m-auto container-max max-sm:w-5/6 max-md:w-3/4 ">
        <button
          className="bg-black mb-2.5 py-1.5 px-3.5 rounded-xl"
          onClick={goBack}
        >
          На главную
        </button>
        <div className="  rounded-3xl bg-black ">
          <div className="grid grid-cols-[35%_65%] h-[500px] max-md:flex max-md:justify-center">
            <div className="bg-registration bg-cover rounded-tl-3xl rounded-bl-3xl max-md:hidden"></div>
            <div className="p-10 content-center">
              <label className="flex justify-center text-3xl mb-10 font-bold">
                Регистрация
              </label>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="grid justify-center gap-12 max-w-[240px] m-auto text-black"
              >
                <div className="grid gap-7">
                  <div className="relative">
                    <input
                      {...register('name', {
                        required: 'Введите имя',
                        minLength: {
                          value: 2,
                          message: 'Минимум 2 символова',
                        },
                      })}
                      className="inputStyle"
                      type="text"
                      placeholder="Имя"
                    />
                    {errors.name && (
                      <span className="errorStyle">{errors.name?.message}</span>
                    )}
                  </div>
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
                        minLength: {
                          value: 5,
                          message: 'Пароль должен быть не менее 5 символов',
                        },
                      })}
                      className="inputStyle"
                      type="password"
                      placeholder="Пароль"
                    />
                    {errors.password && (
                      <span className="errorStyle">
                        {errors.password?.message}
                      </span>
                    )}
                  </div>
                </div>
                <div className="relative">
                  <button className="buttonWhite w-full">
                    Зарегистрироваться
                  </button>
                  {showError && error && (
                    <p className="errorStyle mt-1.5">{error}</p>
                  )}
                </div>
                <div className="grid justify-items-center text-white">
                  <span>Есть аккаунт?</span>
                  <Link
                    className="text-hoverButton hover:text-white"
                    to="/login"
                  >
                    Войти
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

export default Registration;
