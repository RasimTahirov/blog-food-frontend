import useManageList from '../hooks/useManageList';
import { XMarkIcon, SparklesIcon } from '@heroicons/react/16/solid';
import {
  Ingredient,
  Step,
  Time,
  CoverUpload,
  RecipeForm,
} from './components/Index';
import { SubmitButton } from '../../Index';

const PostCreate = () => {
  const {
    items: ingredient,
    addItem: addIngredient,
    removeItem: removeIngredient,
  } = useManageList();
  const {
    items: step,
    addItem: addStep,
    removeItem: removeStep,
  } = useManageList();

  return (
    <div className="grid justify-center py-5 px-10 text-textBlack">
      <main>
        <form>
          <div className="mb-3">
            <h3 className="text-5xl font-bold">Создание рецепта</h3>
          </div>
          <div className="grid mb-2.5">
            <CoverUpload />
            <RecipeForm />
          </div>
          <div className="grid">
            <label className="titleForm">Ингредиенты</label>
            <div className="grid gap-2.5">
              <Ingredient />
              {ingredient.map((ingredient) => (
                <div className="flex gap-5" key={ingredient.id}>
                  <Ingredient />
                  <button
                    className="inputStyle h-full bg-white"
                    onClick={(e) => removeIngredient(e, ingredient.id)}
                  >
                    <XMarkIcon className="w-5" />
                  </button>
                </div>
              ))}
            </div>
          </div>
          <div className="w-[50%] mt-2.5 mb-2.5">
            <button onClick={addIngredient} className="buttonStyle">
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
              <Step />
              {step.map((step) => (
                <div key={step.id} className="relative">
                  <Step />
                  <button
                    onClick={(e) => removeStep(e, step.id)}
                    className="absolute w-7 top-[10%] left-[90%]"
                  >
                    <XMarkIcon />
                  </button>
                </div>
              ))}
              <div className="mb-2.5">
                <button onClick={addStep} className="buttonStyle">
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

export default PostCreate;
