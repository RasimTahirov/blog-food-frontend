import { Navigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postsThunk } from '../../../redux/postSlice';
import { AppDispatch, RootState } from '../../../store/store';
import { pageConfig } from '../../../config/PageConfig';

import { RecipeDetalis, RecipePreview, RecipeStep } from '../../Index';

const Recipe = () => {
  const { id } = useParams();
  const { post } = useSelector((state: RootState) => state.post);

  const dispatch = useDispatch<AppDispatch>();

  if (!id || id === 'create') {
    return <Navigate to={pageConfig.recipeCreate} replace />;
  }

  useEffect(() => {
    if (id) {
      dispatch(postsThunk(id));
    }
  }, [dispatch, id]);

  return (
    <div className="container-max text-textBlack w-full">
      {post && (
        <div className="main-container">
          <RecipePreview />
          <div className="flex justify-between gap-x-5">
            <RecipeStep />
            <RecipeDetalis />
          </div>
          <div className="mt-5 p-3.5 rounded-mdPlus h-fit bg-containerWhite w-[30%]">
            <p>
              Автор: {post.author.name} {post.author.surname}
            </p>
            <p>Категория: {post.categories}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Recipe;
