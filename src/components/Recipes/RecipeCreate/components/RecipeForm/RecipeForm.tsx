import { useDispatch, useSelector } from 'react-redux';
import { setDescription, setTitle } from '../../../../../redux/postCreateSlice';
import { AppDispatch, RootState } from '../../../../../store/store';
import { SelectCategories } from '../Index';
import { Input } from 'antd';

import TextArea from 'antd/es/input/TextArea';

const RecipeForm = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { title, description } = useSelector(
    (state: RootState) => state.postCreate.post
  );

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setTitle(e.target.value));
  };

  const handleDescriptionChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    dispatch(setDescription(e.target.value));
  };

  return (
    <div className="grid items-center w-full">
      <div className="grid mb-[5px]">
        <label className="titleForm">Название рецепта</label>
        <Input
          showCount
          maxLength={35}
          placeholder="Томатный суп с сырными гренками"
          value={title}
          onChange={handleTitleChange}
          className="custom-input"
          style={{ height: 35 }}
        />
      </div>
      <div className="grid mb-[5px]">
        <label className="titleForm">Описание рецепта</label>
        <TextArea
          showCount
          minLength={10}
          maxLength={250}
          placeholder="Быстрый, простой и вкусный рецепт томатного супа-пюре"
          value={description}
          onChange={handleDescriptionChange}
          style={{ height: 120, resize: 'none' }}
          className="custom-input"
        />
      </div>
      <div className="grid mb-[5px]">
        <label className="titleForm">Категория</label>
        <SelectCategories />
      </div>
    </div>
  );
};

export default RecipeForm;
