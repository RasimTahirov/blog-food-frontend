import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { fullUrl } from '../../../shared/helpers';

const RecipeStep = () => {
  const { post } = useSelector((state: RootState) => state.post);

  if (!post) {
    // Временно
    return <div>Загрузка...</div>;
  }

  return (
    <div className="grid gap-y-5 w-[65%]">
      {post.steps.map((step) => (
        <div key={step.id} className="grid gap-y-2.5 relative">
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
            <span className="text-[17px]">{step.description}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecipeStep;
