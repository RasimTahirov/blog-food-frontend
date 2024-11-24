import { Link } from 'react-router-dom';

const NavButtonIconWhite = ({ children, to }) => {
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
