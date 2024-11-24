const SubmitButton = ({ children, onClick }) => {
  return (
    <button
      className="bg-black py-[5px] px-[15px] rounded-mdPlus text-textWhite"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default SubmitButton;
