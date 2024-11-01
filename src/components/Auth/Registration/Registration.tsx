import AuthForm from '../common/AuthForm';

const Registration = () => {
  return (
    <AuthForm
      title="Регистрация"
      fields={[
        { type: 'text', placeholder: 'Имя' },
        { type: 'email', placeholder: 'Почта' },
        { type: 'password', placeholder: 'Пароль' },
      ]}
      redirectText="Есть аккаунт?"
      redirectLabel="Войти"
      redirectLink="/login"
      titleBg="bg-registration"
      buttonText="Зарегистрироваться"
    />
  );
};

export default Registration;
