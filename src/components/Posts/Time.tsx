const Time = () => {
  return (
    <div className="grid mb-5">
      <label className="mb-1.5">Время на приготовление</label>
      <div className="flex gap-2.5">
        <div className="flex gap-2.5 items-center">
          <input
            className="py-1.5 p-2 w-12 text-black bg-slate-200 text-center appearance-none rounded-md"
            type="number"
          />
          <label>Часов</label>
        </div>
        <div className="flex gap-2.5 items-center">
          <input
            className="py-1.5 p-2 w-12 text-black bg-slate-200 text-center appearance-none rounded-md"
            type="number"
          />
          <label>Минут</label>
        </div>
      </div>
    </div>
  );
};

export default Time;
