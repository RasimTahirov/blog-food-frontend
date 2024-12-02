import { Button } from 'antd';
import { Link } from 'react-router-dom';
import { fullUrl } from '../../../../../utils/fullUrl';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../../../store/store';
import { useEffect } from 'react';
import { articleListThunk } from '../../../../../redux/articleList';
import { pageConfig } from '../../../../../config/PageConfig';

const ArticleList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { article } = useSelector((state: RootState) => state.articleList);

  console.log(article);

  useEffect(() => {
    dispatch(articleListThunk());
  }, [dispatch]);

  return (
    <div className="container-max text-textBlack w-full">
      <div className="main-container">
        <div className="flex justify-between items-center gap-2.5 pb-5">
          <span className="text-[30px] font-semibold">Статьи</span>
          <Link to={pageConfig.articleListAll}>
            <Button className="custom-button-red">Все статьи</Button>
          </Link>
        </div>
        <div>
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
    </div>
  );
};

export default ArticleList;
