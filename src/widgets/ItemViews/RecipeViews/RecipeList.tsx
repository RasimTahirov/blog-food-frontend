import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { pageConfig } from '../../../config/PageConfig';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../store/store';

import { Button } from 'antd';
import { fullUrl } from '../../../shared/helpers';
import { recipeListThunk } from '../../../entities/recipe/thunk/thunk';
import { Error, SpinLoading } from '../../../shared/ui';

const RecipeList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { recipes, error, loading } = useSelector(
    (state: RootState) => state.recipeList
  );

  useEffect(() => {
    dispatch(recipeListThunk());
  }, [dispatch]);

  if (loading) {
    return <SpinLoading />;
  }

  if (error) {
    return <Error subTitle={error} />;
  }

  return (
    <div className="container-max text-textBlack w-full">
      <div className="main-container">
        <div className="flex justify-between items-center gap-2.5 mb-5">
          <span className="text-3xl font-semibold">Рецепты</span>
          <Link to={pageConfig.recipeList}>
            <Button className="custom-button-red">Все рецепты</Button>
          </Link>
        </div>
        <div className="mb-2.5">
          <ul className="grid grid-cols-3 gap-[15px]">
            {recipes.slice(-6).map((recipe) => (
              <Link
                key={recipe._id}
                to={`${pageConfig.recipe.replace(':id', recipe._id as string)}`}
              >
                <li>
                  <div className="relative overflow-hidden rounded-mdPlus cardHover">
                    <p className="absolute mt-[5px] ml-[5px] py-[5px] px-2.5 leading-5 bg-containerWhite rounded-mdPlus">
                      {recipe.categories}
                    </p>
                    <img
                      src={`${fullUrl}${recipe.image}`}
                      alt=""
                      className="w-full h-[200px] object-cover"
                    />
                  </div>
                  <p className="px-5 mt-[5px] text-lg">{recipe.title}</p>
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RecipeList;
