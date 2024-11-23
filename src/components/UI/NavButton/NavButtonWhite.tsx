import { Link } from 'react-router-dom';

const NavButtonBlack = ({ title, to }) => {
  return (
    <button className="bg-buttonColorWhite py-[5px] px-[15px] rounded-mdPlus text-lg">
      <Link to={to} className="text-textBlack">
        {title}
      </Link>
    </button>
  );
};

export default NavButtonBlack;
