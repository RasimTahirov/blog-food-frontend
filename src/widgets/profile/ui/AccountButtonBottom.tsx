import { Button } from 'antd';
import { pageConfig } from '../../../config/PageConfig';
import { Link } from 'react-router-dom';

const AccountButtonButtom = () => {
  return (
    <div className="flex justify-between gap-5">
      <Link to={pageConfig.recipeCreate}>
        <Button className="custom-button-red">Избранное</Button>
      </Link>
      <Link to={pageConfig.recipeCreate}>
        <Button className="custom-button-red">Опубликовать рецепт</Button>
      </Link>
      <Link to={pageConfig.articleCreate}>
        <Button className="custom-button-red">Опубликовать статью</Button>
      </Link>
    </div>
  );
};

export default AccountButtonButtom;
