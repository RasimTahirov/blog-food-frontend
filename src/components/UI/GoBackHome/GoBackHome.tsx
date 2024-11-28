import { Link } from 'react-router-dom';
import { pageConfig } from '../../../config/PageConfig';

const GoBackHome = () => {
  return (
    <Link
      className="bg-black py-[5px] px-[15px] rounded-mdPlus"
      to={pageConfig.home}
    >
      <span className="text-textWhite">На главную</span>
    </Link>
  );
};

export default GoBackHome;
