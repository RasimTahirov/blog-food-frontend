import { useDispatch, useSelector } from 'react-redux';
import { setDescription, setTitle } from '../../../../../redux/postSlice';
import { AppDispatch, RootState } from '../../../../../store/store';
import { SelectCategories } from '../Index';

const RecipeForm = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { title, description } = useSelector(
    (state: RootState) => state.createPost.post
  );

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setTitle(e.target.value));
  };

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setDescription(e.target.value));
  };

  return (
    <div className="grid items-center w-full">
      <div className="grid containerCreate">
        <label className="titleForm">Название рецепта</label>
        <input
          className="inputStyle"
          type="text"
          placeholder="Томатный суп с сырными гренками"
          value={title}
          onChange={handleTitleChange}
        />
      </div>
      <div className="grid containerCreate">
        <label className="titleForm">Описание рецепта</label>
        <input
          className="inputStyle"
          type="text"
          placeholder="Быстрый, простой и вкусный рецепт томатного супа-пюре"
          value={description}
          onChange={handleDescriptionChange}
        />
      </div>
      <div className="grid containerCreate">
        <label className="titleForm">Категория</label>
        <SelectCategories />
      </div>
    </div>
  );
};

export default RecipeForm;
