import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../../store/store';
import { setCategories } from '../../../../../redux/postCreateSlice';

const SelectCategories = () => {
  const dispatch = useDispatch();
  const { categories } = useSelector(
    (state: RootState) => state.postCreate.post
  );

  const handleCategoriesChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setCategories(e.target.value));
  };

  return (
    <div>
      <select
        className="inputStyle"
        value={categories}
        onChange={handleCategoriesChange}
      >
        <option value="Завртаки">Завртаки</option>
        <option value="Закуски">Закуски</option>
        <option value="Салаты">Салаты</option>
        <option value="Основные блюда">Основные блюда</option>
        <option value="Супы">Супы</option>
        <option value="Десерты">Десерты</option>
        <option value="Напитки">Напитки</option>
        <option value="Выпечка">Выпечка</option>
        <option value="Фастфуд">Фастфуд</option>
        <option value="Каши">Каши</option>
        <option value="Паста">Паста</option>
        <option value="Соусы">Соусы</option>
        <option value="Рыба">Рыба</option>
        <option value="Мясо">Мясо</option>
        <option value="Морепродукты">Морепродукты</option>
      </select>
    </div>
  );
};

export default SelectCategories;
