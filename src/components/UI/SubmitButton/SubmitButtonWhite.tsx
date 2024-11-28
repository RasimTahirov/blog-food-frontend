import { SubmitButtonProps } from './type';

const SubmitButtonWhite: React.FC<SubmitButtonProps> = ({
  children,
  onClick,
}) => {
  return (
    <button
      type="button"
      className="bg-buttonColorWhite py-[5px] px-[20px] rounded-mdPlus text-lg text-textBlack"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default SubmitButtonWhite;
