import { Link } from 'react-router-dom';

const NavButtonBlack = ({ title, to }) => {
  return (
    <button className="bg-black py-[5px] px-[15px] rounded-mdPlus text-lg">
      <Link to={to} className="text-textWhite">
        {title}
      </Link>
    </button>
  );
};

export default NavButtonBlack;
