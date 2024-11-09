const CoverUpload = () => {
  return (
    <div className="mb-5 bg-containerWhite">
      <div className="relative borderStyle cursor-pointer rounded-lg w-full h-[250px]">
        <input
          className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
          type="file"
        />
        <span className="flex text-center items-center justify-center w-full h-full">
          Загрузить обложку рецепта
        </span>
      </div>
    </div>
  );
};

export default CoverUpload;
