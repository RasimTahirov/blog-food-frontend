import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { registerThunk } from '../../../redux/registerSlice';
import { AppDispatch, RootState } from '../../../store/store';
import { FormValues } from '../types/FormValues';

import AuthForm from '../AuthForm/AuthForm';

interface ModalRegistrationProps {
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalRegistration: React.FC<ModalRegistrationProps> = ({
  setIsActive,
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const { error } = useSelector((state: RootState) => state.register);

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
      reset();
      setIsActive(false);
    }
  };

  return (
    <>
      <AuthForm
        title="Регистрация"
        onSubmit={handleSubmit(onSubmit)}
        buttonText="Зарегистрироваться"
      >
        <div className="grid gap-10 w-[250px]">
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
              {...register('surname', {
                required: 'Введите фамилию',
                minLength: {
                  value: 2,
                  message: 'Минимум 2 символова',
                },
              })}
              className="inputStyle"
              type="text"
              placeholder="Фамилие"
            />
            {errors.surname && (
              <span className="errorStyle">{errors.surname?.message}</span>
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
              placeholder="Почта"
            />
            {errors.email && (
              <span className="errorStyle">{errors.email?.message}</span>
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
              <span className="errorStyle">{errors.password?.message}</span>
            )}
          </div>
          <div>{error && <span>{error}</span>}</div>
        </div>
      </AuthForm>
    </>
  );
};

export default ModalRegistration;
