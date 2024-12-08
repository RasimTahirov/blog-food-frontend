import style from './Index.module.scss';

import { useSelector } from 'react-redux';
import { formatHours } from '../../../utils/formatHours';
import { RootState } from '../../../store/store';
import { SpinLoading } from '../../../shared/ui';

const RecipeDetalis = () => {
  const { recipe } = useSelector((state: RootState) => state.recipe);

  if (!recipe) {
    return <SpinLoading />;
  }

  return (
    <div className="grid gap-2.5 w-[35%] sticky top-5 h-full">
      <div className="p-3.5 rounded-mdPlus h-fit bg-containerWhite">
        <p className="mb-[5px] text-2xl font-semibold">Ингредиенты</p>
        <ul className="grid gap-y-[5px]">
          {recipe.ingredients.map((ing) => (
            <li key={ing._id} className={style.itemList}>
              <div className="flex justify-between items-center">
                <div className="w-[80%]">
                  <span>{ing.name}</span>
                </div>
                <div className="flex gap-1">
                  <span>{ing.amount}</span>
                  <span>{ing.unit}</span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="p-3.5 rounded-mdPlus h-fit bg-containerWhite flex gap-2.5">
        <span>Время приготовления:</span>
        {recipe.cookTime.hours > 0 && (
          <span>{formatHours(recipe.cookTime.hours)}</span>
        )}
        {recipe.cookTime.minutes > 0 && (
          <span>{recipe.cookTime.minutes} минут</span>
        )}
      </div>
    </div>
  );
};

export default RecipeDetalis;
