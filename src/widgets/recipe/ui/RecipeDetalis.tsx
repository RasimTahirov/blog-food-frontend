import style from './Index.module.scss';

import { useSelector } from 'react-redux';
import { formatHours } from '../../../utils/formatHours';
import { RootState } from '../../../store/store';

const RecipeDetalis = () => {
  const { post } = useSelector((state: RootState) => state.post);

  if (!post) {
    // Временно
    return <div>Загрузка...</div>;
  }

  return (
    <div className="grid gap-2.5 w-[35%] sticky top-5 h-full">
      <div className="p-3.5 rounded-mdPlus h-fit bg-containerWhite">
        <p className="mb-[5px] text-2xl font-semibold">Ингредиенты</p>
        <ul className="grid gap-y-[5px]">
          {post.ingredients.map((ing) => (
            <li key={ing.id} className={style.itemList}>
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
        {post.cookTime.hours > 0 && (
          <span>{formatHours(post.cookTime.hours)}</span>
        )}
        {post.cookTime.minutes > 0 && (
          <span>{post.cookTime.minutes} минут</span>
        )}
      </div>
    </div>
  );
};

export default RecipeDetalis;
