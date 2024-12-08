import { Button } from 'antd';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { AppDispatch, RootState } from '../../../store/store';
import { pageConfig } from '../../../config/PageConfig';
import { articleListThunk } from '../../../entities/article/thunk/thunk';
import { fullUrl } from '../../../shared/helpers';
import { Error, SpinLoading } from '../../../shared/ui';

const ArticleList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { article, loading, error } = useSelector(
    (state: RootState) => state.articleList
  );

  useEffect(() => {
    dispatch(articleListThunk());
  }, [dispatch]);

  if (loading) {
    return <SpinLoading />;
  }

  if (error) {
    return <Error subTitle={error} />;
  }

  return (
    <div className="container-max text-textBlack w-full">
      <div className="main-container">
        <div className="flex justify-between items-center gap-2.5 mb-5">
          <span className="text-3xl font-semibold">Статьи</span>
          <Link to={pageConfig.articleList}>
            <Button className="custom-button-red">Все статьи</Button>
          </Link>
        </div>
        <div className="mb-2.5">
          <ul className="grid grid-cols-2 gap-[15px]">
            {article.slice(-4).map(
              (art) =>
                art._id && (
                  <Link
                    key={art._id}
                    to={`${pageConfig.article.replace(':id', art._id)}`}
                  >
                    <li key={art._id}>
                      <div className="relative overflow-hidden rounded-mdPlus cardHover">
                        <img
                          src={`${fullUrl}${art.image}`}
                          alt=""
                          className="w-full h-[300px] object-cover"
                        />
                      </div>
                      <p className="px-5 mt-[5px] text-lg">{art.title}</p>
                    </li>
                  </Link>
                )
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ArticleList;
