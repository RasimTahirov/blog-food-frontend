import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { SparklesIcon, XMarkIcon } from '@heroicons/react/16/solid';
import { localId, name, surname } from '../../shared/helpers';
import { createRecipeThunk } from '../../entities/recipe/thunk/thunk';
import {
  addIngredient,
  addStep,
  removeIngredient,
  removeStep,
} from '../../entities/recipe/slices/recipeCreateSlice';

import { Button, Form } from 'antd';
import { GoBackHome } from '../../shared/ui';
import { CoverUpload, Ingredient, RecipeForm, Step, Time } from './form/Index';

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
  } = useSelector((state: RootState) => state.recipeCreate.recipe);

  const handleSubmit = () => {
    const RecipeDate = {
      title,
      description,
      categories,
      ingredients,
      steps,
      image,
      cookTime,
      author: {
        name: name,
        surname: surname,
        id: localId,
      },
    };

    dispatch(createRecipeThunk(RecipeDate));
  };

  return (
    <main className="container-max grid justify-center py-5 px-10 text-textBlack">
      <Form onFinish={handleSubmit} className="main-container">
        <div className="flex justify-between items-center mb-5">
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
                <Button
                  className="custom-button-red"
                  variant="filled"
                  onClick={() => dispatch(removeIngredient(ingredient.id))}
                  style={{ height: 35 }}
                >
                  Удалить
                </Button>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-2.5 mb-2.5">
          <Button
            className="custom-button-red"
            variant="filled"
            onClick={() => dispatch(addIngredient())}
            style={{ height: 35 }}
          >
            Добавить ингредиент
          </Button>
        </div>
        <div className="grid">
          <div className="mb-2.5">
            <span className="text-4xl font-bold">
              Инстуркция по приготовлению
            </span>
          </div>
          <div className="flex items-center gap-[10px] font-extralight bg-containerNotification py-[5px] px-2.5 leading-normal rounded-mdPlus mb-2.5">
            <SparklesIcon className="fill-black w-5" />
            <p className="text-lg">
              Для создания рецепта необходимо иметь 3 шага
            </p>
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
              <Button
                className="custom-button-red"
                variant="filled"
                onClick={() => dispatch(addStep())}
              >
                Добавить шаг
              </Button>
            </div>
          </div>
        </div>
        <div className="max-w-[50%]">
          <Time />
        </div>
        <Button className="custom-button-red" htmlType="submit">
          Опубликовать
        </Button>
      </Form>
    </main>
  );
};

export default RecipeCreate;
