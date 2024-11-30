import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { pageConfig } from '../../../config/PageConfig';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../store/store';
import { postListThunk } from '../../../redux/postListSlice';
import { fullUrl } from '../../../utils/fullUrl';

import { Button } from 'antd';

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
    <div className="container-max text-textBlack w-full">
      <div className="main-container">
        <div className="flex justify-between items-center gap-2.5 pb-5">
          <span className="text-[30px] font-semibold">Рецепты</span>
          <Link to={pageConfig.recipeList}>
            <Button className="custom-button">Все рецепты</Button>
          </Link>
        </div>
        <div>
          <ul className="grid grid-cols-3 gap-[15px]">
            {posts.slice(-6).map((post) => (
              <Link
                key={post._id}
                to={`${pageConfig.recipe.replace(':id', post._id)}`}
              >
                <li>
                  <div>
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
