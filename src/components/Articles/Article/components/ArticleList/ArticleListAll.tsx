import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../../../store/store';
import { articleListThunk } from '../../../../../redux/articleList';
import { useEffect } from 'react';
import { fullUrl } from '../../../../../utils/fullUrl';
import { Link } from 'react-router-dom';
import { pageConfig } from '../../../../../config/PageConfig';

const ArticleListAll = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { article } = useSelector((state: RootState) => state.articleList);

  console.log(article);

  useEffect(() => {
    dispatch(articleListThunk());
  }, [dispatch]);

  return (
    <div className="container-max text-textBlack w-full">
      <div>
        <ul className="grid grid-cols-2 gap-[15px]">
          {article.map((art) => (
            <Link
              key={art._id}
              to={`${pageConfig.article.replace(':id', art._id)}`}
            >
              <li>
                <div className="relative overflow-hidden rounded-mdPlus cardHover">
                  <img
                    src={`${fullUrl}${art.image}`}
                    alt=""
                    className="w-full h-[200px] object-cover"
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
