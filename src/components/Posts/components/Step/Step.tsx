import { PlusIcon } from '@heroicons/react/16/solid';

const Step = () => {
  return (
    <div className="borderStyle rounded-lg p-5 bg-assa">
      <p className="text-xl font-bold mb-1">Шаг 1</p>
      <div className="relative flex justify-between w-[35%] borderStyle rounded-md p-2 mb-2.5 bg-inputs">
        <span>Загрузить фото</span>
        <input
          className="absolute inset-0 opacity-0 w-full h-full cursor-pointer"
          type="file"
        />
        <PlusIcon className="w-5" />
      </div>
      <div className="grid">
        <label className="titleForm">Описание шага</label>
        <input
          className="inputStyle"
          type="text"
          placeholder="Налейте в небольшую кастрюлю 1 ст. л. оливкового масла."
        />
      </div>
    </div>
  );
};

export default Step;
