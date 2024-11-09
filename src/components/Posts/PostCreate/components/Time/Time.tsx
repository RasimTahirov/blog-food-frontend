const Time = () => {
  return (
    <div className="grid mb-5">
      <label className="titleForm">Время на приготовление</label>
      <div className="flex gap-2.5">
        <div className="flex gap-2.5 items-center">
          <input
            className="inputStyle text-center w-[70px]"
            type="number"
            placeholder="0"
          />
          <label>Часов</label>
        </div>
        <div className="flex gap-2.5 items-center">
          <input
            className="inputStyle text-center w-[70px]"
            type="number"
            placeholder="0"
          />
          <label>Минут</label>
        </div>
      </div>
    </div>
  );
};

export default Time;
