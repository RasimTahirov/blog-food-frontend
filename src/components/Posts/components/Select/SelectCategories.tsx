const SelectCategories = () => {
  return (
    <div>
      <select className="inputStyle w-[50%]" name="" id="">
        <option value="Breakfasts">Завтраки</option>
        <option value="Appetizers">Закуски</option>
        <option value="Salads">Салаты</option>
        <option value="Soups">Супы</option>
        <option value="Main Dishes">Основные блюда</option>
        <option value="Desserts">Десерты</option>
        <option value="Drinks">Напитки</option>
        <option value="Baking">Выпечка</option>
        <option value="Fast Food">Фастфуд</option>
        <option value="Porridges">Каши</option>
      </select>
    </div>
  );
};

export default SelectCategories;
