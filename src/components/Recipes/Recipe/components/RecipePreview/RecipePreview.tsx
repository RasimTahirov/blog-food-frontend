import { useSelector } from 'react-redux';
import { StarIcon } from '@heroicons/react/16/solid';
import { fullUrl } from '../../../../../utils/fullUrl';
import { RootState } from '../../../../../store/store';

const RecipePreview = () => {
  const { post } = useSelector((state: RootState) => state.post);

  if (!post) {
    // Временно
    return <div>Загрузка...</div>;
  }

  return (
    <div className="flex items-center justify-between gap-x-10 mb-5 h-[320px]">
      <div className="grid content-evenly h-full">
        <h3 className="text-[40px] font-bold leading-10">{post.title}</h3>
        <span className="text-[17px]">{post.description}</span>
      </div>
      <div className="relative">
        <div className="rounded-mdPlus overflow-hidden w-[580px] h-[320px]">
          <img
            src={`${fullUrl}${post.image}`}
            alt=""
            className="w-[580px] h-[320px] object-cover"
          />
        </div>
        <button className="absolute top-[5%] right-[5%] py-[5px] px-[15px] bg-buttonColorWhite rounded-mdPlus flex items-center gap-[5px]">
          <StarIcon
            className="w-5 hover:fill-black"
            fill="transparent"
            stroke="#333333"
          />
          <span>в избранное</span>
        </button>
      </div>
    </div>
  );
};

export default RecipePreview;
