import { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';

import ArticleListAll from './ArticleListAll';
import Pagination from '../../../features/Pagination/Pagination';

const ArticleBrowser = () => {
  const { article } = useSelector((state: RootState) => state.articleList);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemPerPage] = useState(4);

  const lastItemIndex = currentPage * itemPerPage;
  const firstItemIndex = lastItemIndex - itemPerPage;
  const currentItem = article.slice(firstItemIndex, lastItemIndex);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <ArticleListAll article={currentItem} />
      <Pagination
        itemPerPage={itemPerPage}
        totalItem={article.length}
        paginate={paginate}
      />
    </>
  );
};

export default ArticleBrowser;
