import { Link } from 'react-router-dom';
import { NavButtonIcon } from './type';

const NavButtonIconWhite: React.FC<NavButtonIcon> = ({ children, to }) => {
  return (
    <Link
      to={to}
      className="flex items-center p-2.5 bg-buttonColorWhite rounded-mdPlus h-full"
    >
      {children}
    </Link>
  );
};

export default NavButtonIconWhite;
