import { Link } from 'react-router-dom';
import { pageConfig } from '../../../config/PageConfig';

const Navigation = () => {
  return (
    <nav className="relative max-md:flex gap-2.5 max-sm:grid">
      <ul className="flex gap-5">
        <li>
          <Link to={pageConfig.home}>Главная</Link>
        </li>
        <li>
          <Link to={pageConfig.recipeList}>Рецепты</Link>
        </li>
        <li>
          <Link to={pageConfig.articleList}>Блог</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
