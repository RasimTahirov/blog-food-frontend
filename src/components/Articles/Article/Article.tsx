import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { articleThunk } from '../../../redux/articleSlice';
import { fullUrl } from '../../../utils/fullUrl';
import { AppDispatch, RootState } from '../../../store/store';
import { Button, Modal } from 'antd';
import { localId } from '../../../utils/userStorage';
import { deleteArticleThunk } from '../../../redux/articleCreate';

const Article = () => {
  const { id } = useParams();
  const dispatch = useDispatch<AppDispatch>();

  const { article, loading } = useSelector((state: RootState) => state.article);

  useEffect(() => {
    if (id) {
      dispatch(articleThunk(id));
    }
    console.log(article);
  }, [dispatch, id]);

  const handleDelete = () => {
    dispatch(deleteArticleThunk(id));
  };

  if (loading && !article) {
    return <div>загрузка...</div>;
  }

  return (
    <div className="container-max text-textBlack w-full">
      {article && (
        <div className="main-container">
          <div className="mb-5">
            <div className="mb-5">
              <img
                src={`${fullUrl}${article.image}`}
                alt=""
                className="w-full h-[500px] object-cover rounded-mdPlus"
              />
            </div>
            <h3 className="text-3xl font-bold">{article.title}</h3>
          </div>
          <div className="flex gap-2.5 text-lg mb-5">
            <span className="">Автор статьи:</span>
            <span>
              {article.author.name} {article.author.surname}
            </span>
          </div>
          <div className="grid gap-10">
            {article.paragraph.map((art) => (
              <div key={art._id} className="grid gap-[5px]">
                <h4 className="text-2xl font-bold">{art.title}</h4>
                <span className="text-lg">{art.description}</span>
              </div>
            ))}
          </div>
          {localId === article.author.id ? (
            <div>
              <Button className="custom-button-red" onClick={handleDelete}>
                Удалть статью
              </Button>
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
};

export default Article;
