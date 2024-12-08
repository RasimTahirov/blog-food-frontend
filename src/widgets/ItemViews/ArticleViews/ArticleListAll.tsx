import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../store/store';
import { useEffect } from 'react';
import { articleListThunk } from '../../../entities/article/thunk/thunk';
import { Link } from 'react-router-dom';
import { pageConfig } from '../../../config/PageConfig';
import { fullUrl } from '../../../shared/helpers';
import { Error, SpinLoading } from '../../../shared/ui';
import { Article } from '../../../entities/article/model/types';

interface ArticleListAllProps {
  article: Article[];
  error: string | null;
  loading: boolean;
}

const ArticleListAll: React.FC<ArticleListAllProps> = ({
  article,
  error,
  loading,
}) => {
  const dispatch = useDispatch<AppDispatch>();

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
    <div className="container-max text-textBlack w-full mb-5">
      <div className="main-container mb-2.5">
        <ul className="grid grid-cols-2 gap-[15px]">
          {article.map((art) => (
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
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ArticleListAll;
