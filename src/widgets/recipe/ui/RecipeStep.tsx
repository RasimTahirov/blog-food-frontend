import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { fullUrl } from '../../../shared/helpers';
import { SpinLoading } from '../../../shared/ui';

import style from './Index.module.scss';

const RecipeStep = () => {
  const { recipe } = useSelector((state: RootState) => state.recipe);

  if (!recipe) {
    return <SpinLoading />;
  }

  return (
    <div className="grid gap-y-5 w-[65%]">
      {recipe.steps.map((step) => (
        <div key={step._id} className="grid gap-y-2.5 relative">
          <div className="rounded-mdPlus overflow-hidden">
            <img
              src={`${fullUrl}${step.image}`}
              alt="step image"
              className="w-[735px] h-[450px] object-cover"
            />
          </div>
          <div className="absolute top-[1%] left-[1%] py-1 px-[15px] bg-containerWhite rounded-mdPlus text-2xl font-semibold">
            <span>Шаг </span>
            <span>{step.stepNumber}</span>
          </div>
          <div className="px-2.5">
            <span className={style.description}>{step.description}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecipeStep;
