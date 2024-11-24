import { XMarkIcon, SparklesIcon } from '@heroicons/react/16/solid';
import { AppDispatch, RootState } from '../../../store/store';
import { useDispatch, useSelector } from 'react-redux';
import {
  addIngredient,
  addStep,
  createPostThunk,
  removeIngredient,
  removeStep,
} from '../../../redux/postCreateSlice';

import { GoBackHome, SubmitButtonWhite } from '../../Index';
import {
  Ingredient,
  Step,
  Time,
  CoverUpload,
  RecipeForm,
} from './components/Index';
import { name } from '../../../utils/userStorage';

console.log(name);

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
      author: name,
    };

    dispatch(createPostThunk(PostData));

    console.log(PostData);
  };

  return (
    <div className="grid justify-center py-5 px-10 text-textBlack">
      <form onSubmit={handleSubmit} className="max-w-[555px]">
        <div className="flex justify-between mb-5">
          <h3 className="text-4xl font-bold">Создание рецепта</h3>
          <GoBackHome />
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
                <SubmitButtonWhite
                  onClick={() => dispatch(removeIngredient(ingredient.id))}
                >
                  <XMarkIcon className="w-5" />
                </SubmitButtonWhite>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-2.5 mb-2.5">
          <SubmitButtonWhite onClick={() => dispatch(addIngredient())}>
            Добавить ингредиент
          </SubmitButtonWhite>
        </div>
        <div className="grid">
          <div className="mb-2.5">
            <span className="text-4xl font-bold">
              Инстуркция по приготовлению
            </span>
          </div>
          <div className="flex items-center gap-[10px] font-extralight bg-containerNotification max-w-[80%] py-[5px] px-2.5 leading-normal rounded-mdPlus mb-2.5">
            <SparklesIcon className="fill-black w-5" />
            <p>Для создания рецепта необходимо иметь 3 шага</p>
          </div>
          <div className="grid gap-5">
            {steps.map((step) => (
              <div key={step.id} className="relative">
                <Step steps={step} />
                <button
                  type="button"
                  className="absolute w-7 top-[20px] left-[90%]"
                  onClick={() => dispatch(removeStep(step.id))}
                >
                  <XMarkIcon />
                </button>
              </div>
            ))}
            <div className="mb-2.5">
              <SubmitButtonWhite onClick={() => dispatch(addStep())}>
                Добавить шаг
              </SubmitButtonWhite>
            </div>
          </div>
        </div>
        <div className="max-w-[50%]">
          <Time />
        </div>
        <button className="bg-buttonColorWhite py-[5px] px-[20px] rounded-mdPlus text-lg text-textBlack">
          Опубликовать
        </button>
      </form>
    </div>
  );
};

export default RecipeCreate;
