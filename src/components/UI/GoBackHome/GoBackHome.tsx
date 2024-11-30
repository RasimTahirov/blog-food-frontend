import { Link } from 'react-router-dom';
import { pageConfig } from '../../../config/PageConfig';
import { Button } from 'antd';

const GoBackHome = () => {
  return (
    <Link to={pageConfig.home}>
      <Button className="custom-button">На главную</Button>
    </Link>
  );
};

export default GoBackHome;
