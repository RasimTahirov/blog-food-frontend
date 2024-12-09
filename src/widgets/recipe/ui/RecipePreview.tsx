import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { fullUrl } from '../../../shared/helpers';
import { SpinLoading } from '../../../shared/ui';

import style from './Index.module.scss';

const RecipePreview = () => {
  const { recipe } = useSelector((state: RootState) => state.recipe);

  if (!recipe) {
    return <SpinLoading />;
  }

  return (
    <div className="flex items-center justify-between gap-x-10 mb-5 h-[320px]">
      <div className="grid content-evenly h-full">
        <h3 className={style.title}>{recipe.title}</h3>
        <span className={style.description}>{recipe.description}</span>
      </div>
      <div className="relative">
        <div className="rounded-mdPlus overflow-hidden w-[580px] h-[320px]">
          <img
            src={`${fullUrl}${recipe.image}`}
            alt=""
            className="w-[580px] h-[320px] object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default RecipePreview;
