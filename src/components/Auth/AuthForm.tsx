import { Link } from 'react-router-dom';

import GoBackHome from '../UI/GoBackHome/GoBackHome';

interface Field {
  type: string;
  placeholder: string;
}

interface AuthFormProps {
  title: string;
  fields: Field[];
  redirectText: string;
  redirectLabel: string;
  redirectLink: string;
  titleBg: string;
  buttonText: string;
}

const AuthForm: React.FC<AuthFormProps> = ({
  title,
  fields,
  redirectText,
  redirectLabel,
  redirectLink,
  titleBg,
  buttonText,
}) => {
  return (
    <div className="h-[100vh] grid items-center">
      <div className="w-[950px] m-auto container-max max-sm:w-5/6 max-md:w-3/4 ">
        <GoBackHome />
        <div className="  rounded-3xl bg-black ">
          <div className="grid grid-cols-[35%_65%] h-[500px] max-md:flex max-md:justify-center">
            <div
              className={`${titleBg} bg-cover rounded-tl-3xl rounded-bl-3xl max-md:hidden`}
            ></div>
            <div className="p-10 content-center">
              <div className="flex justify-center text-3xl mb-10 font-bold">
                {title}
              </div>
              <form className="grid justify-center gap-10 max-w-[240px] m-auto text-black">
                <div className="grid gap-5">
                  {fields.map((field, index) => (
                    <div key={index}>
                      <input
                        className="inputStyle"
                        type={field.type}
                        placeholder={field.placeholder}
                      />
                    </div>
                  ))}
                </div>
                <div>
                  <button className="buttonWhite w-full">{buttonText}</button>
                </div>
                <div className="grid justify-items-center text-white">
                  <span>{redirectText}</span>
                  <Link
                    className="text-hoverButton hover:text-white transition-colors duration-300"
                    to={redirectLink}
                  >
                    {redirectLabel}
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

export default AuthForm;
