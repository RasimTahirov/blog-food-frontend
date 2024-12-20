import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../store/store';
import { imageUploadThunk } from '../../../entities/article/thunk/thunk';

const CoverUpload = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [images, setImages] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImages(imageUrl);

      dispatch(imageUploadThunk({ imageData: file }));
    }
  };

  return (
    <div className="bg-containerWhite rounded-mdPlus border border-solid border-borderWhite custom-input-cover mb-5">
      <div className="relative cursor-pointer h-[400px]">
        <input
          className="absolute inset-0 opacity-0 cursor-pointer"
          type="file"
          onChange={handleFileChange}
        />
        {images ? (
          <img
            src={images}
            alt=""
            className="w-full h-full object-cover rounded-mdPlus"
          />
        ) : (
          <button className="flex text-center items-center justify-center w-full h-full">
            Загрузить обложку статьи
          </button>
        )}
      </div>
    </div>
  );
};

export default CoverUpload;
