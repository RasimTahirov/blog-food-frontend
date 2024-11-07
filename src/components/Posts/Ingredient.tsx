import SelectUnits from './SelectUnits';

const Ingredient = () => {
  return (
    <>
      <div className="flex gap-5">
        <input
          className="max-w-[40%] inputStyle2"
          type="text"
          placeholder="Например: курица"
        />
        <SelectUnits />
      </div>
    </>
  );
};

export default Ingredient;
