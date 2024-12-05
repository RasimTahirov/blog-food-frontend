import { Button } from 'antd';
import { useDispatch } from 'react-redux';

import ArticleParagraph from './ArticleParagraph';
import {
  addParagraph,
  removeParagraph,
} from '../../../entities/article/slices/articleCreateSlice';

const ArticleParagraphList = ({ paragraph }) => {
  const dispatch = useDispatch();

  return (
    <div className="grid gap-5">
      {paragraph.map((paragraph) => (
        <div key={paragraph.id} className="relative">
          <ArticleParagraph paragraph={paragraph} />
          <Button
            className="absolute top-[5px] right-[20px] custom-button-red"
            onClick={() => dispatch(removeParagraph(paragraph.id))}
          >
            Удалить абзац
          </Button>
        </div>
      ))}
      <Button
        className="custom-button-red mb-2.5"
        onClick={() => dispatch(addParagraph())}
      >
        Добавить абзац
      </Button>
    </div>
  );
};

export default ArticleParagraphList;
