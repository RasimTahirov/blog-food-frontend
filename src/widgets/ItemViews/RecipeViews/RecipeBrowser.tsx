import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { useState } from 'react';

import { Pagination } from '../../../features';
import RecipeListAll from './RecipeListAll';

const RecipeBrowser = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemPerPage] = useState(6);
  const { recipes, error, loading } = useSelector(
    (state: RootState) => state.recipeList
  );

  const lastItemIndex = currentPage * itemPerPage;
  const firstItemIndex = lastItemIndex - itemPerPage;
  const currentItem = recipes.slice(firstItemIndex, lastItemIndex);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="container-max mb-5">
      <RecipeListAll recipes={currentItem} error={error} loading={loading} />
      <Pagination
        itemPerPage={itemPerPage}
        totalItem={recipes.length}
        paginate={paginate}
      />
    </div>
  );
};

export default RecipeBrowser;
