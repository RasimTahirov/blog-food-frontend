import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../../store/store';
import { setCategories } from '../../../../../redux/postCreateSlice';
import { Select } from 'antd';

const SelectCategories = () => {
  const dispatch = useDispatch();
  const { categories } = useSelector(
    (state: RootState) => state.postCreate.post
  );

  const handleCategoriesChange = (value: string) => {
    dispatch(setCategories(value));
  };

  return (
    <div>
      <Select
        value={categories}
        onChange={handleCategoriesChange}
        style={{ width: 245, height: 35 }}
        className="custom-select"
        options={[
          { value: 'Завртаки', label: 'Завртаки' },
          { value: 'Закуски', label: 'Закуски' },
          { value: 'Салаты', label: 'Салаты' },
          { value: 'Основные блюда', label: 'Основные блюда' },
          { value: 'Супы', label: 'Супы' },
          { value: 'Напитки', label: 'Напитки' },
          { value: 'Выпечка', label: 'Выпечка' },
          { value: 'Фастфуд', label: 'Фастфуд' },
          { value: 'Каши', label: 'Каши' },
          { value: 'Паста', label: 'Паста' },
          { value: 'Соусы', label: 'Соусы' },
          { value: 'Рыба', label: 'Рыба' },
          { value: 'Мясо', label: 'Мясо' },
          { value: 'Морепродукты', label: 'Морепродукты' },
        ]}
      />
    </div>
  );
};

export default SelectCategories;
