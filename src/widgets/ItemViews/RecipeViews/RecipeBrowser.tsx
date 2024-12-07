import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { useState } from 'react';

import Pagination from '../../../features/Pagination/Pagination';
import RecipeListAll from './RecipeListAll';

const RecipeBrowser = () => {
  const { posts } = useSelector((state: RootState) => state.postList);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemPerPage] = useState(6);

  const lastItemIndex = currentPage * itemPerPage;
  const firstItemIndex = lastItemIndex - itemPerPage;
  const currentItem = posts.slice(firstItemIndex, lastItemIndex);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="container-max mb-5">
      <RecipeListAll posts={currentItem} />
      <Pagination
        itemPerPage={itemPerPage}
        totalItem={posts.length}
        paginate={paginate}
      />
    </div>
  );
};

export default RecipeBrowser;
