import { Input } from 'antd';
import { useDispatch } from 'react-redux';

import TextArea from 'antd/es/input/TextArea';
import { ParagraphType } from '../../../entities/article/types/types';
import {
  setParagraphDescription,
  setParagraphTitle,
} from '../../../entities/article/slices/createArticleSlice';

const ArticleParagraph = ({ paragraph }: { paragraph: ParagraphType }) => {
  const dispatch = useDispatch();

  const handleTitleParagraph = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log({ title: e.target.value });

    dispatch(setParagraphTitle({ id: paragraph.id, title: e.target.value }));

    console.log({ id: paragraph.id });
  };

  const handleDescriptionParagraph = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    console.log({ description: e.target.value });

    dispatch(
      setParagraphDescription({ id: paragraph.id, description: e.target.value })
    );
  };

  return (
    <div className="border-solid border border-borderRed rounded-lg p-5">
      <div className="grid gap-5">
        <Input
          showCount
          maxLength={35}
          value={paragraph.title}
          onChange={handleTitleParagraph}
          placeholder="Название абзаца"
          className="custom-input mt-5"
          style={{ height: 35 }}
        />

        <TextArea
          showCount
          minLength={10}
          maxLength={2000}
          value={paragraph.description}
          onChange={handleDescriptionParagraph}
          placeholder="Описание абзаца"
          style={{ height: 120, resize: 'none' }}
          className="custom-input"
        />
      </div>
    </div>
  );
};

export default ArticleParagraph;
