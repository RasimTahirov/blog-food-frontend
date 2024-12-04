import { Link } from 'react-router-dom';
import { pageConfig } from '../../../config/PageConfig';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { fullUrl } from '../../../shared/helpers';

const ArticleGrid = () => {
  const { article } = useSelector((state: RootState) => state.articleList);

  return (
    <div className="mb-2.5">
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
  );
};

export default ArticleGrid;
