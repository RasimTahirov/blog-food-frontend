import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { AppDispatch, RootState } from '../../../store/store';
import { postsByCategoryThunk } from '../../../redux/postCategorySlice';
import { useEffect, useState } from 'react';
import { fullUrl } from '../../../utils/fullUrl';
import { pageConfig } from '../../../config/PageConfig';
import { Button } from 'antd';
import { Modal } from '../../Index';

const RecipeCategory = () => {
  const [modalActive, setModalActive] = useState(false);
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
    <div className="container-max text-textBlack w-full">
      <div className="main-container">
        <div className="flex justify-between items-center">
          <h2 className="text-3xl font-semibold mb-2.5">{category}</h2>
          <Button
            className="custom-button-red"
            onClick={() => setModalActive(true)}
          >
            Все категории
          </Button>
        </div>
        {categories.length > 0 ? (
          <ul className="grid grid-cols-3 gap-[15px] ">
            {posts.map((post: any) => (
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
                  <p className="px-5 mt-[5px] text-lg">{post.title}</p>
                </li>
              </Link>
            ))}
          </ul>
        ) : (
          <p>Нет постов в этой категории.</p>
        )}
      </div>
      <Modal active={modalActive} setActive={setModalActive}>
        <div className="bg-black py-10 px-20 rounded-mdPlus">
          <ul className="grid grid-cols-3 gap-x-[30px] gap-y-[5px]">
            <Link to={pageConfig.recipeList}>Все категории</Link>
            {categories.map((cat, index) => (
              <li key={index}>
                <Link to={pageConfig.recipeCategory.replace(':category', cat)}>
                  <button onClick={() => setModalActive(false)}>{cat}</button>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Modal>
    </div>
  );
};

export default RecipeCategory;
