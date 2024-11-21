import { useNavigate } from 'react-router-dom';

const GoBackHome = () => {
  const navigate = useNavigate();
  const goBack = () => navigate('/');

  return (
    <button
      className="bg-black mb-2.5 py-1.5 px-3.5 rounded-xl max-xs:w-full"
      onClick={goBack}
    >
      <p className="text-white">На главную</p>
    </button>
  );
};

export default GoBackHome;
