import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { pageConfig } from '../../../config/PageConfig';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../store/store';
import { postListThunk } from '../../../redux/postListSlice';
import { fullUrl } from '../../../utils/fullUrl';

import { NavButtonWhite } from '../../Index';

type Post = {
  _id: string;
  categories: string;
  title: string;
  image: string;
};

const PostList = () => {
  const { posts }: { posts: Post[] } = useSelector(
    (state: RootState) => state.postList
  );
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(postListThunk());
  }, [dispatch]);

  return (
    <div className="container-max text-textBlack">
      <div className="main-container">
        <div className="flex justify-between items-center gap-2.5 pb-5">
          <span className="text-[30px] font-semibold">Рецепты</span>
          <NavButtonWhite title="Все рецепты" to={pageConfig.recipeList} />
        </div>
        <div>
          <ul className="grid grid-cols-3 gap-[15px]">
            {posts.slice(-6).map((post) => (
              <Link
                key={post._id}
                to={`${pageConfig.recipe.replace(':id', post._id)}`}
              >
                <li>
                  <div className="relative">
                    <p className="absolute mt-[5px] ml-[5px] py-[5px] px-2.5 leading-5 bg-containerWhite rounded-mdPlus">
                      {post.categories}
                    </p>
                    <img
                      src={`${fullUrl}${post.image}`}
                      alt=""
                      className="w-full h-[200px] object-cover rounded-mdPlus"
                    />
                  </div>
                  <p className="px-5 mt-[5px] text-lg">{post.title}</p>
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PostList;
