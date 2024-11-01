import AuthForm from '../common/AuthForm';

const Authorization = () => {
  return (
    <AuthForm
      title="Авторизация"
      fields={[
        { type: 'email', placeholder: 'Почта' },
        { type: 'password', placeholder: 'Пароль' },
      ]}
      redirectText="Еще не зарегистрированы?"
      redirectLabel="Зарегистрироваться"
      redirectLink="/register"
      titleBg="bg-authorization"
      buttonText="Войти"
    />
  );
};

export default Authorization;
