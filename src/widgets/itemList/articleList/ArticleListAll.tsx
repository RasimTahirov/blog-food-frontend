import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../store/store';
import { useEffect } from 'react';

import ArticleGrid from '../ui/ArticleGrid';
import { articleListThunk } from '../../../entities/article/thunks/thunk';

const ArticleListAll = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(articleListThunk());
  }, [dispatch]);

  return (
    <div className="container-max text-textBlack w-full">
      <ArticleGrid />
    </div>
  );
};

export default ArticleListAll;
