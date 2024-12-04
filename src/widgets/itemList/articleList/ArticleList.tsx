import { Button } from 'antd';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { AppDispatch } from '../../../store/store';
import { pageConfig } from '../../../config/PageConfig';
import ArticleGrid from '../ui/ArticleGrid';
import { articleListThunk } from '../../../entities/article/thunks/thunk';

const ArticleList = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(articleListThunk());
  }, [dispatch]);

  return (
    <div className="container-max text-textBlack w-full">
      <div className="main-container">
        <div className="flex justify-between items-center gap-2.5 mb-2.5">
          <span className="text-2xl font-semibold">Статьи</span>
          <Link to={pageConfig.articleList}>
            <Button className="custom-button-red">Все статьи</Button>
          </Link>
        </div>
        <ArticleGrid />
      </div>
    </div>
  );
};

export default ArticleList;
