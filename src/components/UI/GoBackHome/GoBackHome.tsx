import { useNavigate } from 'react-router-dom';

const GoBackHome = () => {
  const navigate = useNavigate();
  const goBack = () => navigate('/');

  return (
    <button
      className="bg-black py-[5px] px-[15px] rounded-mdPlus"
      onClick={goBack}
    >
      <p className="text-textWhite">На главную</p>
    </button>
  );
};

export default GoBackHome;
