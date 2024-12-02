import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../store/store';
import { createArticleThunk } from '../../../redux/articleCreate';

import { Button, Form } from 'antd';

import { ArticleParagraphList, ArticleTitle, CoverUpload } from './components';
import { useEffect, useState } from 'react';
import { localId, name, surname } from '../../../utils/userStorage';

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
    <div className="container-max text-textBlack">
      <div className="main-container w-[80%] mx-auto">
        <Form onFinish={handleSubmit}>
          <CoverUpload />
          <ArticleTitle />
          <ArticleParagraphList paragraph={paragraph} />
          <Button className="custom-button-red" htmlType="submit">
            Создать
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default ArticleCreate;
