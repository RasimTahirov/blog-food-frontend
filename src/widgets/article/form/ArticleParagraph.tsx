import { Input } from 'antd';
import { useDispatch } from 'react-redux';

import TextArea from 'antd/es/input/TextArea';
import { Paragraph } from '../../../entities/article/types/types';
import {
  setParagraphDescription,
  setParagraphTitle,
} from '../../../entities/article/slices/articleCreateSlice';

const ArticleParagraph = ({ paragraph }: { paragraph: Paragraph }) => {
  const dispatch = useDispatch();

  const handleTitleParagraph = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setParagraphTitle({ id: paragraph.id, title: e.target.value }));
  };

  const handleDescriptionParagraph = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
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
