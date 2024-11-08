import { PlusIcon } from '@heroicons/react/16/solid';

const Step = () => {
  return (
    <div className="border-2 border-solid border-black rounded-lg p-5 bg-white">
      <p className="text-xl font-bold mb-1">Шаг 1</p>
      <div className="relative flex w-[30%] border-2 border-solid border-black rounded-md p-2 mb-2.5">
        <span>Загрузить фото</span>
        <input
          className="absolute inset-0 opacity-0 w-full h-full cursor-pointer"
          type="file"
        />
        <PlusIcon className="w-5" />
      </div>
      <div className="grid">
        <label>Описание шага</label>
        <input className="inputStyle2" type="text" />
      </div>
    </div>
  );
};

export default Step;
