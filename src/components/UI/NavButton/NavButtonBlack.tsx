import { Link } from 'react-router-dom';
import { NavButton } from './type';

const NavButtonBlack: React.FC<NavButton> = ({ title, to }) => {
  return (
    <Link
      to={to}
      className="text-textWhite bg-black py-[5px] px-[15px] rounded-mdPlus text-lg"
    >
      {title}
    </Link>
  );
};

export default NavButtonBlack;
