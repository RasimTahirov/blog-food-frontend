import { SubmitHandler } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AppDispatch, RootState } from '../../store/store';
import { pageConfig } from '../../config/PageConfig';
import { authThunk } from '../../entities/user/auth/thunk/thunk';

import { Button, Form, Input } from 'antd';

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

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    const result = await dispatch(authThunk(data));
    if (authThunk.fulfilled.match(result)) {
      localStorage.setItem('user', JSON.stringify(result.payload));
      navigate(pageConfig.account);
      setIsActive(false);
      location.reload();
    }
  };

  return (
    <div className="h-full grid items-center">
      <div className="mx-20 py-10 grid justify-center gap-10">
        <h3 className="flex justify-center text-3xl font-semibold">
          Авторизация
        </h3>
        <Form onFinish={onSubmit}>
          <div className="grid justify-items-end w-60">
            <Form.Item
              name="email"
              rules={[
                {
                  type: 'email',
                  message: 'Введён некорректный адрес электронной почты',
                },
                {
                  required: true,
                  message: 'Пожалуйста, введите адрес электронной почты',
                },
              ]}
            >
              <Input className="custom-input w-60" placeholder="Почта" />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Пожалуйста, введите пароль',
                },
              ]}
            >
              <Input.Password
                className="custom-input w-60"
                placeholder="Пароль"
              />
            </Form.Item>
          </div>
          <div className="mt-10 w-60">
            <Form.Item>
              <div className="grid gap-[5px]">
                <Button htmlType="submit" className="custom-button-white">
                  Войти
                </Button>
                <div className="custom-error">
                  {error && <span>{error}</span>}
                </div>
              </div>
            </Form.Item>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default ModalAuthorization;
