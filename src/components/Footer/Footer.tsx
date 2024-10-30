const Footer = () => {
  return (
    <footer className="container-max bg-black mb-4 w-full rounded-3xl sm:w-4/5 md:w-3/4 lg:w-3/4 h-54">
      <div className="main-container py-5">
        <div className="flex justify-between mb-7">
          <div>
            <p>LOGO</p>
          </div>
          <div>
            <nav>
              <ul className="gap-4 flex ">
                <li>
                  <a href="">Главная</a>
                </li>
                <li>
                  <a href="">Рецепты</a>
                </li>
                <li>
                  <a href="">Блог</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div>
          <form className="grid justify-end gap-2 max-[400px]:justify-normal">
            <span>Рассылка о вкусном и полезном</span>
            <input
              className="h-10 rounded-lg px-1.5 py-0.5 text-black"
              type="text"
              placeholder="введите email"
            />
            <button className="buttonWhite text-black">Подписаться</button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
