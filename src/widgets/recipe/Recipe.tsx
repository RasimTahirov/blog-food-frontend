import { Button } from 'antd';
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
  recipeThunk,
} from '../../entities/recipe/thunk/thunk';

const Recipe = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState(false);
  const { id } = useParams();
  const { recipe } = useSelector((state: RootState) => state.recipe);

  if (!id || id === 'create') {
    return <Navigate to={pageConfig.recipeCreate} replace />;
  }

  useEffect(() => {
    if (id) {
      dispatch(recipeThunk(id));
    }
  }, [dispatch, id]);

  const handleDelete = () => {
    dispatch(deleteRecipeThunk(id));
    setIsActive(false);
    navigate(pageConfig.home);
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
            <Button className="custom-button-red">В избранное</Button>
          </div>
        </div>
      )}
      <Modal active={isActive} setActive={setIsActive}>
        <div className="bg-black p-10 rounded-mdPlus">
          <div className="grid gap-2.5">
            <span>Вы действительно хотите удалить рецепт?</span>
            <button onClick={handleDelete}>Удалить</button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Recipe;
