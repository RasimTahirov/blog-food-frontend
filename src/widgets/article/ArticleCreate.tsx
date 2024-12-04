import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';

import { Button, Form } from 'antd';
import { ArticleParagraphList, ArticleTitle, CoverUpload } from './form';
import { GoBackHome } from '../../shared/ui';
import { localId, name, surname } from '../../shared/helpers';
import { createArticleThunk } from '../../entities/article/thunks/thunk';

const ArticleCreate = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { title, image, paragraph } = useSelector(
    (state: RootState) => state.articleCreate.article
  );

  const handleSubmit = () => {
    const articleData = {
      title,
      image,
      paragraph,
      author: {
        name: name,
        surname: surname,
        id: localId,
      },
    };

    console.log(articleData);

    dispatch(createArticleThunk(articleData));
  };

  return (
    <main className="container-max text-textBlack py-5">
      <div className="main-container w-[80%] mx-auto">
        <Form onFinish={handleSubmit}>
          <div className="flex justify-between items-center mb-5">
            <h3 className="text-4xl font-bold">Создание статьи</h3>
            <GoBackHome />
          </div>
          <CoverUpload />
          <ArticleTitle />
          <ArticleParagraphList paragraph={paragraph} />
          <Button className="custom-button-red" htmlType="submit">
            Опубликовать статью
          </Button>
        </Form>
      </div>
    </main>
  );
};

export default ArticleCreate;
