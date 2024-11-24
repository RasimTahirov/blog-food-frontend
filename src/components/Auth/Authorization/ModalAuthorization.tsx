import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { authThunk } from '../../../redux/authSlice';
import { AppDispatch, RootState } from '../../../store/store';
import { pageConfig } from '../../../config/PageConfig';

import AuthForm from '../AuthForm/AuthForm';

interface FormValues {
  email: string;
  password: string;
}

interface ModalAuthorization {
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalAuthorization: React.FC<ModalAuthorization> = ({ setIsActive }) => {
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
      navigate(pageConfig.account);
      setIsActive(false);
      reset();
    }
  };

  return (
    <AuthForm
      title="Авторизация"
      onSubmit={handleSubmit(onSubmit)}
      buttonText="Войти"
    >
      <div className="grid gap-10 w-[250px]">
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
            <span className="errorStyle">{errors.email?.message}</span>
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
            <span className="errorStyle">{errors.password?.message}</span>
          )}
        </div>
        {error && <span>{error}</span>}
      </div>
    </AuthForm>
  );
};

export default ModalAuthorization;
