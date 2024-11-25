import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { AppDispatch, RootState } from '../../../store/store';
import { postsByCategoryThunk } from '../../../redux/postCategorySlice';
import { useEffect } from 'react';
import { fullUrl } from '../../../utils/fullUrl';
import { pageConfig } from '../../../config/PageConfig';

const RecipeCategory = () => {
  const { category } = useParams<{ category: string }>();
  const { categories, posts } = useSelector(
    (state: RootState) => state.postCategory
  );
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (category) {
      dispatch(postsByCategoryThunk(category));
    }
  }, [dispatch, category]);

  return (
    <div className="container-max text-textBlack">
      <div className="main-container">
        <h2 className="text-3xl font-semibold mb-2.5">{category}</h2>
        {categories.length > 0 ? (
          <ul className="grid grid-cols-3 gap-[15px]">
            {posts.map((post: any) => (
              <Link
                key={post._id}
                to={`${pageConfig.recipe.replace(':id', post._id)}`}
                className="overflow-hidden"
              >
                <li>
                  <div className="relative">
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
        ) : (
          <p>Нет постов в этой категории.</p>
        )}
      </div>
    </div>
  );
};

export default RecipeCategory;
