import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../../store/store';
import { setCategories } from '../../../../../redux/postSlice';

const SelectCategories = () => {
  const dispatch = useDispatch();
  const { categories } = useSelector(
    (state: RootState) => state.createPost.post
  );

  const handleCategoriesChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setCategories(e.target.value));
  };

  return (
    <div>
      <select
        className="inputStyle w-[50%]"
        value={categories}
        onChange={handleCategoriesChange}
      >
        <option value="Breakfasts">Завтраки</option>
        <option value="Appetizers">Закуски</option>
        <option value="Salads">Салаты</option>
        <option value="Soups">Супы</option>
        <option value="Main Dishes">Основные блюда</option>
        <option value="Desserts">Десерты</option>
        <option value="Drinks">Напитки</option>
        <option value="Baking">Выпечка</option>
        <option value="Fast Food">Фастфуд</option>
        <option value="Porridges">Каши</option>
      </select>
    </div>
  );
};

export default SelectCategories;
