import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { pageConfig } from '../../../config/PageConfig';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../store/store';
import { fullUrl } from '../../../shared/helpers';
import {
  recipeCategoryThunk,
  recipeListThunk,
} from '../../../entities/recipe/thunk/thunk';

import Modal from '../../../shared/ui/Modal/Modal';
import { Button } from 'antd';

type Post = {
  _id: string;
  categories: string;
  title: string;
  image: string;
};

const RecipeListAll = ({ posts }: { posts: Post[] }) => {
  const [modalActive, setModalActive] = useState(false);

  const dispatch = useDispatch<AppDispatch>();

  const { categories } = useSelector((state: RootState) => state.postCategory);

  useEffect(() => {
    dispatch(recipeListThunk());
    dispatch(recipeCategoryThunk());
  }, [dispatch]);

  return (
    <div className=" text-textBlack w-full mb-5">
      <div className="main-container">
        <div className="flex gap-5 pb-5 justify-end items-center">
          <ul className="flex gap-2.5">
            {categories.slice(0, 4).map((cat, index) => (
              <li key={index}>
                <Link to={pageConfig.recipeCategory.replace(':category', cat)}>
                  {cat}
                </Link>
              </li>
            ))}
          </ul>
          <Button
            onClick={() => setModalActive(true)}
            className="custom-button-red"
          >
            Все категории
          </Button>
        </div>

        <div className="">
          <ul className="grid grid-cols-3 gap-[15px]">
            {posts.map((post) => (
              <Link
                key={post._id}
                to={`${pageConfig.recipe.replace(':id', post._id)}`}
              >
                <li>
                  <div className="relative overflow-hidden rounded-mdPlus cardHover">
                    <p className="absolute mt-[5px] ml-[5px] py-[5px] px-2.5 leading-5 bg-containerWhite rounded-mdPlus">
                      {post.categories}
                    </p>
                    <img
                      src={`${fullUrl}${post.image}`}
                      alt=""
                      className="w-full h-[200px] object-cover"
                    />
                  </div>
                  <p className="px-5 mt-[5px] text-lg break-words">
                    {post.title}
                  </p>
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
      <Modal active={modalActive} setActive={setModalActive}>
        <div className="bg-black py-10 px-20 rounded-mdPlus">
          <ul className="grid grid-cols-3 gap-x-[30px] gap-y-[5px]">
            <Link to={pageConfig.recipeList}>Все категории</Link>
            {categories.map((cat, index) => (
              <li key={index}>
                <Link to={pageConfig.recipeCategory.replace(':category', cat)}>
                  {cat}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Modal>
    </div>
  );
};

export default RecipeListAll;
