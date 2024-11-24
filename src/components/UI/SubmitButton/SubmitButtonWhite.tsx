import React, { ReactNode } from 'react';

interface SubmitButtonWhiteProps {
  children: ReactNode;
  onClick?: () => void;
}

const SubmitButtonWhite: React.FC<SubmitButtonWhiteProps> = ({
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
