import { useState } from 'react';
import { PlusIcon } from '@heroicons/react/16/solid';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../../../store/store';
import {
  imageUploadThunk,
  setDescriptionStep,
  setImageStep,
} from '../../../../../redux/postCreateSlice';
import { StepType } from '../../../../../types/types';

import TextArea from 'antd/es/input/TextArea';

const Step = ({ steps }: { steps: StepType }) => {
  const dispatch = useDispatch<AppDispatch>();
  const [image, setImage] = useState<string | null>(null);

  const handleDescriptionChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    dispatch(setDescriptionStep({ id: steps.id, description: e.target.value }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
      dispatch(
        imageUploadThunk({ imageData: file, type: 'step', id: steps.id })
      ).then((res) => {
        if (imageUploadThunk.fulfilled.match(res)) {
          dispatch(setImageStep({ id: steps.id, image: res.payload.url }));
        }
      });
    }
  };

  return (
    <div className="border-solid border border-borderRed rounded-lg p-5">
      <span className="text-xl font-bold mb-1">Шаг {steps.stepNumber}</span>
      {image ? (
        <img
          src={image}
          alt={`шаг ${steps.stepNumber}`}
          className="w-[90%] h-[250px] object-cover rounded-mdPlus mb-2"
        />
      ) : (
        <div className="relative bg-containerWhite flex justify-between w-[35%] rounded-mdPlus p-2 mb-2.5 cursor-pointer">
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
        <TextArea
          showCount
          minLength={10}
          maxLength={250}
          placeholder="Быстрый, простой и вкусный рецепт томатного супа-пюре"
          value={steps.description}
          onChange={handleDescriptionChange}
          style={{ height: 100, resize: 'none' }}
          className="custom-input"
        />
      </div>
    </div>
  );
};

export default Step;
