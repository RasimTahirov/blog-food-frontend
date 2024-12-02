import { Form, Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../../store/store';
import { setTitle } from '../../../../../redux/articleCreate';

const ArticleTitle = () => {
  const { title } = useSelector(
    (state: RootState) => state.articleCreate.article
  );
  const dispatch = useDispatch();

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setTitle(e.target.value));
  };

  return (
    <Form.Item>
      <label className="titleForm">Название статьи</label>
      <Input
        showCount
        maxLength={80}
        value={title}
        onChange={handleTitleChange}
        placeholder="Название статьи"
        className="custom-input"
        style={{ height: 35 }}
      />
    </Form.Item>
  );
};

export default ArticleTitle;
