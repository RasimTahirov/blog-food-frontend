import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { pageConfig } from '../../../config/PageConfig';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../store/store';
import { postListThunk } from '../../../redux/postListSlice';
import { fullUrl } from '../../../utils/fullUrl';

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
        <div className="flex gap-2.5 pb-4 justify-between items-center">
          <span className="text-[30px] font-semibold">Рецепты</span>
          <div className="py-[5px] px-2.5 bg-containerWhite rounded-xl">
            <Link to={pageConfig.recipeList}>Все рецепты</Link>
          </div>
        </div>
        <div>
          <ul className="grid grid-cols-3 gap-3.5 ">
            {posts.slice(-6).map((post) => (
              <Link
                key={post._id}
                to={`${pageConfig.recipe.replace(':id', post._id)}`}
                className="overflow-hidden"
              >
                <li className=" h-fulln ">
                  <div className="relative h-full ">
                    <p className="absolute mt-1 ml-1 py-1.5 px-2.5 leading-4 bg-containerWhite rounded-lg">
                      {post.categories}
                    </p>
                    <img
                      src={`${fullUrl}${post.image}`}
                      alt=""
                      className="h-full rounded-xl"
                    />
                  </div>
                  <p className=" px-3 mt-[5px] text-[19px]">{post.title}</p>
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
