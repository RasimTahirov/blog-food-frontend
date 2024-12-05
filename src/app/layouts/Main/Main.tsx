import { pageConfig } from '../../../config/PageConfig';
import { CompactHeader, Footer, MainHeader } from '../../../widgets/index';
import { matchPath, Outlet, useLocation } from 'react-router-dom';

const Main = () => {
  const location = useLocation();

  const compactHeaderRoutes = [
    pageConfig.articleCreate,
    pageConfig.article,
    pageConfig.recipe,
    pageConfig.recipeCategory,
    pageConfig.recipeCreate,
    pageConfig.recipeList,
    pageConfig.articleList,
  ];

  const isCompactHeader = compactHeaderRoutes.some((route) =>
    matchPath(route, location.pathname)
  );
  return (
    <>
      {isCompactHeader ? <CompactHeader /> : <MainHeader />}
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Main;
