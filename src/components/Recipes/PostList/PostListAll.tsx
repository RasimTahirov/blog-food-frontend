import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { pageConfig } from '../../../config/PageConfig';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../store/store';
import { postListThunk } from '../../../redux/postListSlice';
import { fullUrl } from '../../../utils/fullUrl';
import Modal from '../../UI/Modal/Modal';

type Post = {
  _id: string;
  categories: string;
  title: string;
  image: string;
};

const PostListAll = () => {
  const [modalActive, setModalActive] = useState(false);

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
        <div className="flex gap-2.5 pb-5">
          <div className="py-[5px] px-2.5 bg-containerWhite rounded-xl">
            <a href="#!">Завтраки</a>
          </div>
          <div className="py-[5px] px-2.5 bg-containerWhite rounded-xl">
            <a href="#!">Салаты</a>
          </div>
          <div className="py-[5px] px-2.5 bg-containerWhite rounded-xl">
            <a href="#!">Супы</a>
          </div>
          <div className="py-[5px] px-2.5 bg-containerWhite rounded-xl">
            <button onClick={() => setModalActive(true)}>Все категории</button>
          </div>
        </div>

        <div>
          <ul className="grid grid-cols-3 gap-[15px]">
            {posts.map((post) => (
              <Link
                key={post._id}
                to={`${pageConfig.recipe.replace(':id', post._id)}`}
                className="overflow-hidden"
              >
                <li>
                  <div className="relative">
                    <p className="absolute mt-[5px] ml-[5px] py-[5px] px-2.5 leading-5 bg-containerWhite rounded-mdPlus">
                      {post.categories}
                    </p>
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
        </div>
      </div>
      <Modal active={modalActive} setActive={setModalActive}>
        <div>
          <ul className="grid grid-cols-3 gap-x-[30px] gap-y-[5px]">
            <li>Завтраки</li>
            <li>Закуски</li>
            <li>Салаты</li>
            <li>Супы</li>
            <li>Основные блюда</li>
            <li>Десерты</li>
            <li>Напитки</li>
            <li>Выпечка</li>
            <li>Фасфуд</li>
            <li>Каши</li>
          </ul>
        </div>
      </Modal>
    </div>
  );
};

export default PostListAll;
