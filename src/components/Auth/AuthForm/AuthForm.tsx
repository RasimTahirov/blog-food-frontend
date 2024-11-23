import { ReactNode } from 'react';

interface AuthFormProps {
  title: string;
  onSubmit: () => void;
  children: ReactNode;
  buttonText: string;
}

const AuthForm: React.FC<AuthFormProps> = ({
  title,
  onSubmit,
  children,
  buttonText,
}) => {
  return (
    <>
      <div className="h-full grid items-center">
        <div className="m-auto container-max bg-black rounded-mdPlus">
          <div className="mx-20 p-10 grid justify-center gap-10">
            <h3 className="flex justify-center text-3xl font-semibold">
              {title}
            </h3>
            <form onSubmit={onSubmit}>
              {children}
              <div className="flex justify-center mt-10">
                <button>{buttonText}</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthForm;
