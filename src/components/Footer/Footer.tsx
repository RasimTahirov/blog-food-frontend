import { Navigation } from '../Index';

const Footer = () => {
  return (
    <footer className="container-max bg-black my-5 w-full rounded-mdPlus text-textWhite">
      <div className="main-container py-5">
        <div className="flex justify-between mb-[30px]">
          <div>
            <p>LOGO</p>
          </div>
          <div>
            <Navigation />
          </div>
        </div>
        <div>
          <form className="grid justify-end gap-2.5">
            <label htmlFor="email-input">Рассылка о вкусном и полезном</label>
            <input
              className="inputStyle"
              type="email"
              placeholder="введите email"
            />
            <button className="buttonWhite text-textBlack">Подписаться</button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
