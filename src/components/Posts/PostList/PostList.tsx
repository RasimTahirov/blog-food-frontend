import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { pageConfig } from '../../../config/PageConfig';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../store/store';
import { postListThunk } from '../../../redux/postListSlice';

type Post = {
  _id: string;
  categories: string;
  title: string;
  image: string;
};

const PostList = () => {
  const fullUrl = 'http://localhost:9000';
  const dispatch = useDispatch<AppDispatch>();
  const { posts }: { posts: Post[] } = useSelector(
    (state: RootState) => state.postList
  );

  useEffect(() => {
    dispatch(postListThunk());
  }, [dispatch]);

  return (
    <div className="container-max text-textBlack">
      <div className="main-container">
        <div>
          <ul className="grid grid-cols-3 gap-3.5">
            {posts.map((post) => (
              <Link
                key={post._id}
                to={`${pageConfig.recipe.replace(':id', post._id)}`}
              >
                <li className="shadow-posts rounded-xl overflow-hidden h-full">
                  <div className="relative h-full">
                    <div className="mt-2.5 absolute left-[75%] rounded-lg py-[5px] px-3.5 bg-containerWhite text-sm">
                      <p className="leading-4">{post.categories}</p>
                    </div>
                    <div className="bg-white w-full h-[15%] absolute bottom-0">
                      <p className="absolute bottom-[15%] left-[5%] leading-normal text-base">
                        {post.title}
                      </p>
                    </div>
                    <img src={`${fullUrl}${post.image}`} alt="" />
                  </div>
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
