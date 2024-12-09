import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { recipeAllFavorites } from '../../entities/recipe/thunk/thunk';
import { pageConfig } from '../../config/PageConfig';
import { Link } from 'react-router-dom';
import { fullUrl } from '../../shared/helpers';
import { AppDispatch, RootState } from '../../store/store';

import { Button, Result } from 'antd';

const Favorite = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { recipes } = useSelector((state: RootState) => state.recipeFavorite);

  useEffect(() => {
    dispatch(recipeAllFavorites());
  }, []);

  return (
    <div className="container-max text-textBlack w-full">
      <div className="main-container">
        {recipes.length > 0 ? (
          <div className="mb-2.5">
            <h3 className="text-3xl font-semibold mb-2.5">Избранное</h3>
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
        ) : (
          <div>
            <Result
              status="404"
              title=":("
              subTitle="У вас пока нет избранных рецептов. Добавьте что-нибудь, чтобы найти их здесь!"
              extra={
                <Link to={pageConfig.recipeList}>
                  <Button className="custom-button-white">Все рецепты</Button>
                </Link>
              }
            />
          </div>
        )}
      </div>
    </div>
  );
};
export default Favorite;
