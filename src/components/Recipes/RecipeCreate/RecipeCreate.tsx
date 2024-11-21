import { XMarkIcon, SparklesIcon } from '@heroicons/react/16/solid';
import { AppDispatch, RootState } from '../../../store/store';
import {
  Ingredient,
  Step,
  Time,
  CoverUpload,
  RecipeForm,
} from './components/Index';
import { GoBackHome, SubmitButton } from '../../Index';
import { useDispatch, useSelector } from 'react-redux';
import {
  addIngredient,
  addStep,
  createPostThunk,
  removeIngredient,
  removeStep,
} from '../../../redux/postCreateSlice';

const RecipeCreate = () => {
  const dispatch = useDispatch<AppDispatch>();
  const {
    title,
    description,
    categories,
    ingredients,
    steps,
    image,
    cookTime,
  } = useSelector((state: RootState) => state.postCreate.post);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const PostData = {
      title,
      description,
      categories,
      ingredients,
      steps,
      image,
      cookTime,
    };

    dispatch(createPostThunk(PostData));

    console.log(PostData);
  };

  return (
    <div className="grid justify-center py-5 px-10 text-textBlack">
      <main>
        <form onSubmit={handleSubmit} className="max-w-[555px]">
          <div className="flex justify-between">
            <div className="mb-3">
              <h3 className="text-4xl font-bold">Создание рецепта</h3>
            </div>
            <div>
              <GoBackHome />
            </div>
          </div>
          <div className="grid mb-2.5">
            <CoverUpload />
            <RecipeForm />
          </div>
          <div className="grid">
            <label className="titleForm">Ингредиенты</label>
            <div className="grid gap-2.5">
              {ingredients.map((ingredient) => (
                <div className="flex gap-5" key={ingredient.id}>
                  <Ingredient ingredient={ingredient} />
                  <button
                    className="inputStyle h-full bg-white"
                    onClick={() => dispatch(removeIngredient(ingredient.id))}
                  >
                    <XMarkIcon className="w-5" />
                  </button>
                </div>
              ))}
            </div>
          </div>
          <div className="w-[50%] mt-2.5 mb-2.5">
            <button
              type="button"
              onClick={() => dispatch(addIngredient())}
              className="buttonStyle"
            >
              <span>Добавить ингредиент</span>
            </button>
          </div>
          <div className="grid">
            <div className="mb-2.5">
              <p className="text-4xl font-bold">Инстуркция по приготовлению</p>
            </div>
            <div className="flex items-center gap-2 font-extralight bg-containerNotification max-w-[80%] py-1.5 px-2.5 leading-normal rounded-md mb-2.5">
              <SparklesIcon className="fill-black w-5" />
              <p>Для создания рецепта необходимо иметь 3 шага</p>
            </div>
            <div className="grid gap-5">
              {steps.map((step) => (
                <div key={step.id} className="relative">
                  <Step steps={step} />
                  <button
                    type="button"
                    className="absolute w-7 top-[21px] left-[90%]"
                    onClick={() => dispatch(removeStep(step.id))}
                  >
                    <XMarkIcon />
                  </button>
                </div>
              ))}
              <div className="mb-2.5">
                <button
                  type="button"
                  className="buttonStyle"
                  onClick={() => dispatch(addStep())}
                >
                  Добавить шаг
                </button>
              </div>
            </div>
          </div>
          <div className="max-w-[50%]">
            <Time />
          </div>
          <div className="w-[50%]">
            <SubmitButton />
          </div>
        </form>
      </main>
    </div>
  );
};

export default RecipeCreate;
