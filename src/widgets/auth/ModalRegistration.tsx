import { SubmitHandler } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { registerThunk } from '../../entities/user/register/thunk/thunk';

import { Button, Form, Input, message } from 'antd';

interface ModalRegistrationProps {
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
}

interface FormValues {
  name: string;
  surname: string;
  email: string;
  password: string;
}

const ModalRegistration: React.FC<ModalRegistrationProps> = ({
  setIsActive,
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const { error } = useSelector((state: RootState) => state.register);

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    const result = await dispatch(registerThunk(data));
    if (registerThunk.fulfilled.match(result)) {
      message.success('Вы успешно зарегистрировались');
      setIsActive(false);
    }
  };

  return (
    <>
      <div className="h-full grid items-center">
        <div className="mx-20 py-10 grid justify-center gap-10">
          <h3 className="flex justify-center text-3xl font-semibold">
            Регистрация
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
                    min: 5,
                    message: 'Пароль должен содержать не менее 5 символов',
                  },
                ]}
                hasFeedback
              >
                <Input.Password
                  className="custom-input w-60"
                  placeholder="Пароль"
                />
              </Form.Item>
              <Form.Item
                name="confirm"
                dependencies={['password']}
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: 'Пожалуйста, подтвердите пароль',
                  },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue('password') === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(new Error('Пароль не совпадает'));
                    },
                  }),
                ]}
              >
                <Input.Password
                  className="custom-input w-60"
                  placeholder="Подтвердить пароль"
                />
              </Form.Item>
              <Form.Item
                name="name"
                rules={[
                  {
                    required: true,
                    message: 'Пожалуйста, введите ваше имя',
                    whitespace: true,
                  },
                ]}
              >
                <Input className="custom-input w-60" placeholder="Имя" />
              </Form.Item>
              <Form.Item
                name="surname"
                rules={[
                  {
                    required: true,
                    message: 'Пожалуйста, введите вашу фамилию',
                    whitespace: true,
                  },
                ]}
              >
                <Input className="custom-input w-60" placeholder="Фамилие" />
              </Form.Item>
            </div>
            <div className="mt-10 w-60">
              <Form.Item>
                <div className="grid gap-[5px]">
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="custom-button-white"
                  >
                    Зарегистрироваться
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
    </>
  );
};

export default ModalRegistration;
