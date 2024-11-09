const SelectUnits = () => {
  return (
    <div>
      <select className="inputStyle py-1.5 px-2" name="" id="">
        <option value="g">г</option>
        <option value="kg">кг</option>
        <option value="pc">шт</option>
        <option value="ml">мл</option>
        <option value="l">л</option>
        <option value="teaspoon">ч.л</option>
        <option value="tablespoon">ст.л</option>
      </select>
    </div>
  );
};

export default SelectUnits;
