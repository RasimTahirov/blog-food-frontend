import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../store/store';
import { useEffect } from 'react';

import { articleListThunk } from '../../../entities/article/thunks/thunk';
import { Link } from 'react-router-dom';
import { pageConfig } from '../../../config/PageConfig';
import { fullUrl } from '../../../shared/helpers';

const ArticleListAll = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { article } = useSelector((state: RootState) => state.articleList);

  useEffect(() => {
    dispatch(articleListThunk());
  }, [dispatch]);

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
