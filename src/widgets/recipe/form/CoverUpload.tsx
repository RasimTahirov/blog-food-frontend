import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../store/store';
import { useState } from 'react';
import { imageUploadThunk } from '../../../entities/recipe/thunks/thunks';

const CoverUpload = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [image, setImage] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);

      dispatch(imageUploadThunk({ imageData: file, type: 'cover' }));
    }
  };

  return (
    <div className="mb-5 bg-containerWhite w-full rounded-mdPlus border border-solid border-borderWhite custom-input-cover">
      <div className="relative cursor-pointer w-full h-[250px]">
        <input
          className="absolute inset-0 opacity-0 cursor-pointer"
          type="file"
          onChange={handleFileChange}
        />
        {image ? (
          <img
            src={image}
            alt=""
            className="w-full h-full object-cover rounded-mdPlus"
          />
        ) : (
          <button className="flex text-center items-center justify-center w-full h-full">
            Загрузить обложку рецепта
          </button>
        )}
      </div>
    </div>
  );
};

export default CoverUpload;
