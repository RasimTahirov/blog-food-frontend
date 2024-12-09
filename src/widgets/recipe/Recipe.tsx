import { Button, message } from 'antd';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { AppDispatch, RootState } from '../../store/store';
import { pageConfig } from '../../config/PageConfig';
import { Modal } from '../../shared/ui';
import { RecipeDetalis, RecipePreview, RecipeStep } from './ui';
import { localId } from '../../shared/helpers';
import {
  deleteRecipeThunk,
  recipeAddFavorites,
  recipeAllFavorites,
  recipeRemoveFavorites,
  recipeThunk,
} from '../../entities/recipe/thunk/thunk';

const Recipe = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState(false);
  const { id } = useParams();
  const { recipe } = useSelector((state: RootState) => state.recipe);
  const { recipes } = useSelector((state: RootState) => state.recipeFavorite);

  if (!id || id === 'create') {
    return <Navigate to={pageConfig.recipeCreate} replace />;
  }

  const isFavorite =
    Array.isArray(recipes) &&
    recipes.some((favRecipe) => favRecipe._id === recipe?._id);

  useEffect(() => {
    if (id) {
      dispatch(recipeThunk(id));
      dispatch(recipeAllFavorites());
    }
  }, [dispatch, id, isFavorite]);

  const handleDelete = () => {
    dispatch(deleteRecipeThunk(id));
    setIsActive(false);
    navigate(pageConfig.home);
    message.success('Рецепт успешно удалён');
  };

  const handleAddFavorite = () => {
    dispatch(recipeAddFavorites({ recipeId: recipe?._id }));
    console.log({ recipeId: recipe?._id });
  };

  const handleDeleteFavorite = () => {
    dispatch(recipeRemoveFavorites({ recipeId: recipe?._id }));
  };

  return (
    <div className="container-max text-textBlack w-full mb-10">
      {recipe && (
        <div className="main-container">
          <RecipePreview />
          <div className="flex justify-between gap-x-5">
            <RecipeStep />
            <RecipeDetalis />
          </div>
          <div className="my-5 p-3.5 rounded-mdPlus h-fit bg-containerWhite w-[30%]">
            <p>
              Автор: {recipe.author.name} {recipe.author.surname}
            </p>
            <p>Категория: {recipe.categories}</p>
          </div>
          <div className="flex gap-5">
            {localId === recipe.author.id ? (
              <div>
                <Button
                  className="custom-button-red"
                  onClick={() => setIsActive(true)}
                >
                  Удалть статью
                </Button>
              </div>
            ) : null}

            {isFavorite ? (
              <Button
                onClick={handleDeleteFavorite}
                className="custom-button-white"
              >
                Удалить из избранного
              </Button>
            ) : (
              <Button onClick={handleAddFavorite} className="custom-button-red">
                В избранное
              </Button>
            )}
          </div>
        </div>
      )}
      <Modal active={isActive} setActive={setIsActive}>
        <div className="grid gap-5 mx-20 py-10">
          <span>Вы действительно хотите удалить рецепт?</span>
          <div className="justify-center flex">
            <Button className="custom-button-white" onClick={handleDelete}>
              Удалить
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Recipe;
