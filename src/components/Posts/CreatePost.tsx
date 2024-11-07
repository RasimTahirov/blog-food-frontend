import photo from '../../../public/assets/test/vegan_food_neyinxspkv4n.svg';
import photo2 from '../../../public/assets/test/d4fbed49f1d81e386a4d32ac7a0280a6.jpeg';

import SelectCategories from './SelectCategories';

import { useState } from 'react';

import Ingredient from './Ingredient';
import Step from './Step';

type IngredientType = {
  id: number;
  name: string;
};

const CreatePost = () => {
  const [ingredient, setIngredient] = useState<IngredientType[]>([]);

  const addElement = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIngredient([...ingredient, { id: Date.now(), name: '' }]);
  };

  const removeElement = (
    e: React.MouseEvent<HTMLButtonElement>,
    id: number
  ) => {
    e.preventDefault();
    setIngredient(ingredient.filter((ingredient) => ingredient.id !== id));
  };

  return (
    <div className="container-max bg-black py-2.5 px-5 rounded-3xl">
      <main>
        <form>
          <div className="mb-3">
            <h3 className="text-white text-5xl font-bold">Создание рецепта</h3>
          </div>
          <div className="grid gap-5">
            <div className="grid grid-cols-2">
              <div className="grid">
                <label className="text-white text-lg mb-1.5">
                  Название рецепта
                </label>
                <input
                  className="inputStyle2"
                  type="text"
                  placeholder="Например: шоколадные блины с какао-порошком"
                />
              </div>
              <div></div>
            </div>
            <div className="grid gap-5 max-w-[50%]">
              <div className="grid">
                <label className="text-white text-lg mb-1.5">
                  Описание рецепта
                </label>
                <input
                  className="inputStyle2"
                  type="text"
                  placeholder="Например: шоколадные блины с какао-порошком"
                />
              </div>
              <div className="grid">
                <label className="mb-1.5">Категория</label>
                <SelectCategories />
              </div>
              <div className="grid">
                <label className="mb-1.5">Ингредиенты</label>
                <div>
                  {ingredient.map((ingredient) => (
                    <div key={ingredient.id}>
                      <Ingredient />
                      <button onClick={(e) => removeElement(e, ingredient.id)}>
                        Удалить ингредиент
                      </button>
                    </div>
                  ))}
                </div>
              </div>
              <div className="w-[40%]">
                <button
                  onClick={addElement}
                  className="relative buttonWhite bg-white w-full text-violet-500"
                >
                  <span className="text-black">Добавить ингредиент</span>
                </button>
              </div>
              <div>
                <div>
                  <p className='text-4xl'>Инстуркция по приготовлению</p>
                </div>
                <div>Для создания рецепта необходимо иметь 3 шага</div>
                <div>
                  <Step />
                </div>
              </div>
              <div>
                <label>Время на приготовление</label>
                <input type="text" />
              </div>
            </div>
          </div>
        </form>
      </main>
    </div>
  );
};

export default CreatePost;
