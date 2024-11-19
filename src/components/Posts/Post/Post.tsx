import style from './Index.module.scss';

import { useParams } from 'react-router-dom';
import { StarIcon } from '@heroicons/react/16/solid';
import { useEffect } from 'react';
import { formatHours } from '../../../utils/utils';
import { useDispatch, useSelector } from 'react-redux';
import { postsThunk } from '../../../redux/postSlice';
import { AppDispatch, RootState } from '../../../store/store';

const Post = () => {
  const { id } = useParams();
  const fullUrl = 'http://localhost:9000';
  const dispatch = useDispatch<AppDispatch>();
  const { post } = useSelector((state: RootState) => state.post);

  useEffect(() => {
    if (id) {
      dispatch(postsThunk(id));
    }
  }, [dispatch, id]);

  return (
    <div className="container-max text-textBlack ">
      {post && (
        <div className="main-container relative">
          <div className="flex items-center justify-between gap-x-10 mb-5 h-[320px]">
            <div className="grid content-evenly h-full">
              <div>
                <h3 className="text-[40px] font-bold leading-9">
                  {post.title}
                </h3>
              </div>
              <div>
                <span className="text-[16px]">{post.description}</span>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-xl overflow-hidden w-[580px] h-[320px]">
                <img
                  src={`${fullUrl}${post.image}`}
                  alt=""
                  className="w-[580px] h-[320px] object-cover"
                />
              </div>
              <button className="absolute top-[5%] right-[5%] py-1.5 px-2.5 bg-containerWhite rounded-xl flex items-center gap-1.5">
                <StarIcon
                  className="w-5 hover:fill-black"
                  fill="transparent"
                  stroke="#333333"
                />
                <p>в избранное</p>
              </button>
            </div>
          </div>
          <div className="flex justify-between gap-x-5">
            <div className="grid gap-y-5 w-[65%]">
              {post.steps.map((step) => (
                <div key={step.id} className="grid gap-y-2.5 relative">
                  <div className="rounded-xl overflow-hidden">
                    <img
                      src={`${fullUrl}${step.image}`}
                      alt=""
                      className="w-[735px] h-[450px] object-cover"
                    />
                  </div>
                  <div className="absolute top-[1%] left-[1%] py-1 px-[15px] bg-containerWhite rounded-xl">
                    <span className="text-2xl font-semibold">Шаг </span>
                    <span className="text-2xl font-semibold">
                      {step.stepNumber}
                    </span>
                  </div>
                  <div className="px-2.5">
                    <span className="text-[17px]">{step.description}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="grid gap-2.5 w-[35%] sticky top-4 h-full">
              <div className="py-3.5 px-3.5 rounded-2xl h-fit bg-containerWhite ">
                <p className="mb-1.5 text-2xl font-semibold">Ингредиенты</p>
                <ul className="grid gap-y-[5px]">
                  {post.ingredients.map((ing) => (
                    <li key={ing.id} className={style.itemList}>
                      <div className="flex justify-between items-center">
                        <div className="w-[80%]">
                          <span>{ing.name}</span>
                        </div>
                        <div className="flex gap-1">
                          <span>{ing.amount}</span>
                          <span>{ing.unit}</span>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="py-3.5 px-3.5 rounded-2xl h-fit bg-containerWhite flex gap-2.5">
                <span>Время приготовления:</span>
                {post.cookTime.hours > 0 && (
                  <span>{formatHours(post.cookTime.hours)}</span>
                )}
                {post.cookTime.minutes > 0 && (
                  <span>{post.cookTime.minutes} минут</span>
                )}
              </div>
            </div>
          </div>
          <div className="mt-5 py-3.5 px-3.5 rounded-2xl h-fit bg-containerWhite w-[30%]">
            <div>
              <p>Автор: Расим</p>
            </div>
            <div>
              <p>Категория: {post.categories}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Post;
