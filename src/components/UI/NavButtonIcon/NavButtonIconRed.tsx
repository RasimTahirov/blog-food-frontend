import { Link } from 'react-router-dom';
import { NavButtonIcon } from './type';

const NavButtonIconRed: React.FC<NavButtonIcon> = ({ children, to }) => {
  return (
    <Link
      to={to}
      className="flex items-center p-2.5 bg-buttonColorRed rounded-mdPlus h-full"
    >
      {children}
    </Link>
  );
};

export default NavButtonIconRed;
