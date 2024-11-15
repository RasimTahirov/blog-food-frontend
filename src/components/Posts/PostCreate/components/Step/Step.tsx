import { useState } from 'react';
import { PlusIcon } from '@heroicons/react/16/solid';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../../../store/store';
import {
  imageUploadThunk,
  setDescriptionStep,
  setImageStep,
  StepType,
} from '../../../../../redux/postSlice';

const Step = ({
  steps,
  stepNumber,
}: {
  steps: StepType;
  stepNumber: number;
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const [image, setImage] = useState<string | null>(null);

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setDescriptionStep({ id: steps.id, description: e.target.value }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      dispatch(setImageStep({ id: steps.id, image: imageUrl }));
      setImage(URL.createObjectURL(file));
      dispatch(imageUploadThunk(file)).then((res) => {
        if (imageUploadThunk.fulfilled.match(res)) {
          dispatch(setImageStep({ id: steps.id, image: res.payload }));
        }
      });
    }
  };

  return (
    <div className="borderStyle rounded-lg p-5">
      <p className="text-xl font-bold mb-1">Шаг {stepNumber}</p>
      {image ? (
        <img
          src={image}
          alt=""
          className="w-[90%] h-[250px] object-cover rounded-md mb-2"
        />
      ) : (
        <div className="relative bg-containerWhite flex justify-between w-[35%] rounded-md p-2 mb-2.5 cursor-pointer">
          <span>Загрузить фото</span>
          <input
            className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
            type="file"
            onChange={handleImageChange}
          />
          <PlusIcon className="w-5" />
        </div>
      )}
      <div className="grid">
        <label className="titleForm">Описание шага</label>
        <input
          className="inputStyle"
          type="text"
          placeholder="Налейте в небольшую кастрюлю 1 ст. л. оливкового масла."
          value={steps.description}
          onChange={handleDescriptionChange}
        />
      </div>
    </div>
  );
};

export default Step;
