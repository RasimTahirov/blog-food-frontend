import { Button } from 'antd';
import { Navigation } from '../../shared/ui';

const Footer = () => {
  return (
    <footer className="container-max bg-black w-full rounded-mdPlus text-textWhite">
      <div className="main-container py-5">
        <div className="flex justify-between mb-[30px]">
          <div>
            <span>Flavor Feast</span>
          </div>
          <div>
            <Navigation />
          </div>
        </div>
        <div>
          <form className="grid justify-end gap-2.5">
            <label htmlFor="email-input">Рассылка о вкусном и полезном</label>
            <input
              className="rounded-[5px] text-textBlack py-[2.5px] px-[5px]"
              type="email"
              placeholder="введите email"
            />
            <Button className="custom-button-white">Подписаться</Button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
