import { SelectUnits } from '../Index';

const Ingredient = () => {
  return (
    <>
      <div className="flex gap-5">
        <input className="inputStyle" type="text" placeholder="Например: лук" />
        <SelectUnits />
      </div>
    </>
  );
};

export default Ingredient;
