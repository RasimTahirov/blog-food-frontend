import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../../../store/store';
import {
  IngredientType,
  setIngredientAmount,
  setIngredientName,
  setIngredientUnit,
} from '../../../../../redux/postSlice';

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
    <div className="flex gap-5">
      <input
        className="inputStyle w-full"
        type="text"
        placeholder="Например: лук"
        value={ingredient.name}
        onChange={handleNameChange}
      />
      <input
        className="inputStyle w-[25%] flex text-center"
        type="number"
        placeholder="кол-во"
        onChange={handleAmountChange}
      />
      <select
        className="inputStyle py-1.5 px-2 w-[20%]"
        value={ingredient.unit}
        onChange={handleUnitChange}
      >
        <option value="g">г</option>
        <option value="kg">кг</option>
        <option value="pc">шт</option>
        <option value="ml">мл</option>
        <option value="l">л</option>
        <option value="teaspoon">ч.л</option>
        <option value="tablespoon">ст.л</option>
      </select>
    </div>
  );
};
export default Ingredient;
