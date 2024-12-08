import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { AppDispatch, RootState } from '../../store/store';
import { Button } from 'antd';
import { fullUrl, localId } from '../../shared/helpers';
import {
  articleThunk,
  deleteArticleThunk,
} from '../../entities/article/thunk/thunk';

import { Error, Modal, SpinLoading } from '../../shared/ui';

import style from './Index.module.scss';
import { pageConfig } from '../../config/PageConfig';

const Article = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState(false);
  const { id } = useParams();
  const { article, loading, error } = useSelector(
    (state: RootState) => state.article
  );

  useEffect(() => {
    if (id) {
      dispatch(articleThunk(id));
    }
  }, [dispatch, id]);

  const handleDelete = () => {
    if (id) {
      dispatch(deleteArticleThunk(id));
      setIsActive(false);
      navigate(pageConfig.home);
    }
  };

  if (loading && !error) {
    return <SpinLoading />;
  }

  if (error) {
    return <Error subTitle={error} />;
  }

  return (
    <div className="container-max text-textBlack w-full">
      {article && (
        <div className="main-container">
          <div className="mb-5">
            <div className="mb-5">
              <img
                src={`${fullUrl}${article.image}`}
                alt={article.title}
                className="w-full h-[500px] object-cover rounded-mdPlus"
              />
            </div>
            <h3 className="text-3xl font-bold">{article.title}</h3>
          </div>
          <div className="">
            <div className="flex gap-2.5 text-lg mb-5">
              <span className="">Автор статьи:</span>
              <span>
                {article.author.name} {article.author.surname}
              </span>
            </div>
            <div className="grid gap-10">
              {article.paragraph.map((art) => (
                <div key={art._id} className={style.articleContainer}>
                  <h4 className="text-2xl font-bold">{art.title}</h4>
                  <span className="text-lg ">{art.description}</span>
                </div>
              ))}
            </div>
            {localId === article.author.id ? (
              <div className="mb-5">
                <Button
                  className="custom-button-red"
                  onClick={() => setIsActive(true)}
                >
                  Удалть статью
                </Button>
              </div>
            ) : null}
          </div>
        </div>
      )}
      <Modal active={isActive} setActive={setIsActive}>
        <div className="bg-black p-10 rounded-mdPlus">
          <div className="grid gap-2.5">
            <span>Вы действительно хотите удалить рецепт?</span>
            <button onClick={handleDelete}>Удалить</button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Article;
