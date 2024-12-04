import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../store/store';

import { IngredientType } from '../../../entities/recipe/types/types';
import { Input, InputNumber, Select } from 'antd';
import {
  setIngredientAmount,
  setIngredientName,
  setIngredientUnit,
} from '../../../entities/recipe/slices/recipeCreateSlice';

const Ingredient = ({ ingredient }: { ingredient: IngredientType }) => {
  const dispatch = useDispatch<AppDispatch>();

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setIngredientName({ id: ingredient.id, name: e.target.value }));
  };

  const handleUnitChange = (value: string) => {
    dispatch(
      setIngredientUnit({
        id: ingredient.id,
        unit: value,
      })
    );
  };

  const handleAmountChange = (value: number | null) => {
    if (value !== null) {
      dispatch(
        setIngredientAmount({
          id: ingredient.id,
          amount: value,
        })
      );
    }
  };

  return (
    <div className="grid grid-cols-[4fr_1fr_1fr] gap-5">
      <Input
        showCount
        placeholder="Например: лук"
        maxLength={35}
        value={ingredient.name.toLowerCase()}
        onChange={handleNameChange}
        className="custom-input"
        style={{ height: 35 }}
      />
      <InputNumber
        placeholder="кол-во"
        min={0}
        onChange={handleAmountChange}
        className="custom-input"
        style={{ height: 35 }}
      />
      <Select
        value={ingredient.unit}
        onChange={handleUnitChange}
        className="custom-select"
        options={[
          { value: 'г', label: 'г' },
          { value: 'л', label: 'л' },
          { value: 'кг', label: 'кг' },
          { value: 'шт', label: 'шт' },
          { value: 'мл', label: 'мл' },
          { value: 'ч.л', label: 'ч.л' },
          { value: 'ст.л', label: 'ст.л' },
        ]}
        style={{ height: 35 }}
      />
    </div>
  );
};
export default Ingredient;
