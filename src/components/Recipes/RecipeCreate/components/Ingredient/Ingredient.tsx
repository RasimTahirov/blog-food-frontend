import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../../../store/store';
import {
  setIngredientAmount,
  setIngredientName,
  setIngredientUnit,
} from '../../../../../redux/postCreateSlice';
import { IngredientType } from '../../../../../types/types';

const Ingredient = ({ ingredient }: { ingredient: IngredientType }) => {
  const dispatch = useDispatch<AppDispatch>();

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setIngredientName({ id: ingredient.id, name: e.target.value }));
  };

  const handleUnitChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setIngredientUnit({ id: ingredient.id, unit: e.target.value }));
  };

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(
      setIngredientAmount({ id: ingredient.id, amount: e.target.value })
    );
  };

  return (
    <div className="grid grid-cols-[4fr_1fr_1fr] gap-5">
      <input
        className="inputStyle"
        type="text"
        placeholder="Например: лук"
        value={ingredient.name.toLowerCase()}
        onChange={handleNameChange}
      />
      <input
        className="inputStyle flex text-center"
        type="number"
        placeholder="кол-во"
        onChange={handleAmountChange}
      />
      <select
        className="inputStyle"
        value={ingredient.unit}
        onChange={handleUnitChange}
      >
        <option value="г">г</option>
        <option value="л">л</option>
        <option value="кг">кг</option>
        <option value="шт">шт</option>
        <option value="мл">мл</option>
        <option value="ч.л">ч.л</option>
        <option value="ст.л">ст.л</option>
      </select>
    </div>
  );
};
export default Ingredient;
