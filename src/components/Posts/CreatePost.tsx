import { useState } from 'react';

import { XCircleIcon, SparklesIcon } from '@heroicons/react/16/solid';
import { IngredientType, StepType } from './type/type';

import { Ingredient, Step, Time, SelectCategories } from './components/Index';
import { SubmitButton } from '../Index';

const CreatePost = () => {
  const [ingredient, setIngredient] = useState<IngredientType[]>([]);
  const [step, setStep] = useState<StepType[]>([]);

  const addElement = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIngredient([...ingredient, { id: Date.now(), name: '' }]);
    console.log(Date.now());
  };

  const removeElement = (
    e: React.MouseEvent<HTMLButtonElement>,
    id: number
  ) => {
    e.preventDefault();
    setIngredient(ingredient.filter((ingredient) => ingredient.id !== id));
  };

  const addStep = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setStep([...step, { id: Date.now(), name: '' }]);
  };

  const removeStep = (e: React.MouseEvent<HTMLButtonElement>, id: number) => {
    e.preventDefault();
    setStep(step.filter((ingredient) => ingredient.id !== id));
  };

  return (
    <div className="grid justify-center py-5 px-10 text-textBlack">
      <main>
        <form>
          <div className="mb-3">
            <h3 className="text-5xl font-bold">Создание рецепта</h3>
          </div>
          <div className="">
            <div className="grid mb-5">
              <div className="mb-5 bg-containerWhite">
                <div className="relative w-full h-[250px] borderStyle cursor-pointer rounded-lg">
                  <input
                    className="absolute inset-0 opacity-0 w-full h-full cursor-pointer"
                    type="file"
                  />
                  <span className="flex w-full h-full text-center items-center justify-center">
                    Загрузить обложку рецепта
                  </span>
                </div>
              </div>
              <div className="grid items-center w-full">
                <div className="grid containerCreate">
                  <label className="titleForm">Название рецепта</label>
                  <input
                    className="inputStyle"
                    type="text"
                    placeholder="Томатный суп с сырными гренками"
                  />
                </div>
                <div className="grid containerCreate">
                  <label className="titleForm">Описание рецепта</label>
                  <input
                    className="inputStyle"
                    type="text"
                    placeholder="Быстрый, простой и вкусный рецепт томатного супа-пюре"
                  />
                </div>
                <div className="grid containerCreate">
                  <label className="titleForm">Категория</label>
                  <SelectCategories />
                </div>
              </div>
            </div>
            <div className="grid gap-5">
              <div className="grid gap-5 ">
                <div className="grid">
                  <label className="titleForm">Ингредиенты</label>
                  <div className="grid gap-2.5">
                    <Ingredient />
                    {ingredient.map((ingredient) => (
                      <div className="flex gap-5" key={ingredient.id}>
                        <Ingredient />
                        <button
                          className="inputStyle h-full bg-white"
                          onClick={(e) => removeElement(e, ingredient.id)}
                        >
                          <XCircleIcon className="w-5" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="w-[50%]">
                  <button onClick={addElement} className="buttonStyle">
                    <span>Добавить ингредиент</span>
                  </button>
                </div>
                <div className="">
                  <div className="mb-2.5">
                    <p className="text-4xl font-bold">
                      Инстуркция по приготовлению
                    </p>
                  </div>
                  <div className="flex items-center gap-2 font-extralight bg-containerNotification max-w-[80%] py-1.5 px-2.5 leading-normal rounded-md mb-2.5">
                    <SparklesIcon className="fill-black w-5" />
                    <p>Для создания рецепта необходимо иметь 3 шага</p>
                  </div>
                  <div>
                    <Step />
                    {step.map((step) => (
                      <div key={step.id}>
                        <Step />
                        <button onClick={(e) => removeStep(e, step.id)}>
                          Удалить
                        </button>
                      </div>
                    ))}
                    <div className="mt-5">
                      <button onClick={addStep} className="buttonStyle">
                        Добавить шаг
                      </button>
                    </div>
                  </div>
                </div>
                <div className="max-w-[50%]">
                  <Time />
                </div>
              </div>
            </div>
            <div className="w-[50%]">
              <SubmitButton />
            </div>
          </div>
        </form>
      </main>
    </div>
  );
};

export default CreatePost;
