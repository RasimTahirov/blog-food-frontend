import photo from '../../../public/assets/test/vegan_food_neyinxspkv4n.svg';
import photo2 from '../../../public/assets/test/d4fbed49f1d81e386a4d32ac7a0280a6.jpeg';

import SelectCategories from './SelectCategories';
import { XCircleIcon, StarIcon, SparklesIcon } from '@heroicons/react/16/solid';

import { useState } from 'react';

import Ingredient from './Ingredient';
import Step from './Step';
import Time from './Time';
import SubmitButton from '../UI/SubmitButton/SubmitButton';

type IngredientType = {
  id: number;
  name: string;
};

const CreatePost = () => {
  const [ingredient, setIngredient] = useState<IngredientType[]>([]);

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

  return (
    <div className="container-max py-2.5 px-5 rounded-3xl">
      <main>
        <form className="text-black">
          <div className="mb-3">
            <h3 className=" text-5xl font-bold">Создание рецепта</h3>
          </div>
          <div className=" p-5 rounded-3xl">
            <div className="flex justify-between mb-5">
              <div>
                {/* <div className="grid">
                  <label className="text-lg mb-0.5">Тест</label>
                  <input className="inputStyle2" type="text" />
                </div> */}
                <div className="w-[500px] h-[250px] border-solid border-2 border-black relative cursor-pointer rounded-lg bg-white">
                  <input
                    className="absolute inset-0 opacity-0 w-full h-full cursor-pointer"
                    type="file"
                  />
                  <span className="text-center w-full h-full flex items-center justify-center">
                    Загрузить обложку рецепта
                  </span>
                </div>
              </div>
              <div className="grid items-center w-[550px]">
                <div className="grid">
                  <label className=" text-lg mb-0.5">Название рецепта</label>
                  <input
                    className="inputStyle2"
                    type="text"
                    placeholder="Например: шоколадные блины с какао-порошком"
                  />
                </div>
                <div className="grid">
                  <label className="text-lg mb-0.5">Описание рецепта</label>
                  <input
                    className="inputStyle2"
                    type="text"
                    placeholder="Например: шоколадные блины с какао-порошком"
                  />
                </div>
                <div className="grid">
                  <label className="mb-0.5">Категория</label>
                  <SelectCategories />
                </div>
              </div>
            </div>
            <div className="grid gap-5">
              <div className="grid gap-5 ">
                <div className="grid">
                  <label className="mb-1.5">Ингредиенты</label>
                  <div className="grid gap-2.5">
                    <Ingredient />
                    {ingredient.map((ingredient) => (
                      <div className="flex gap-5" key={ingredient.id}>
                        <Ingredient />
                        <button
                          className="inputStyle2 h-full bg-white"
                          onClick={(e) => removeElement(e, ingredient.id)}
                        >
                          <XCircleIcon className="w-5" />
                        </button>
                        {/* <button
                          onClick={(e) => removeElement(e, ingredient.id)}
                        >
                          Удалить ингредиент
                        </button> */}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="max-w-[20%]">
                  <button
                    onClick={addElement}
                    className="relative buttonWhite bg-white w-full "
                  >
                    <span>Добавить ингредиент</span>
                  </button>
                </div>
                <div className="max-w-[50%]">
                  <div className="mb-2.5">
                    <p className="text-4xl font-bold">
                      Инстуркция по приготовлению
                    </p>
                  </div>
                  <div className="flex items-center gap-2 font-extralight bg-tests max-w-[80%] py-1.5 px-2.5 leading-normal rounded-md mb-2.5">
                    <SparklesIcon className="w-5" />
                    <p>Для создания рецепта необходимо иметь 3 шага</p>
                  </div>
                  <div>
                    <Step />
                  </div>
                </div>
                <div className="max-w-[50%]">
                  <Time />
                </div>
              </div>
            </div>
            <SubmitButton />
          </div>
        </form>
      </main>
    </div>
  );
};

export default CreatePost;
