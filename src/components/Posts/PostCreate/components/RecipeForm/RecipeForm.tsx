import { SelectCategories } from '../Index';

const RecipeForm = () => {
  return (
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
  );
};

export default RecipeForm;
