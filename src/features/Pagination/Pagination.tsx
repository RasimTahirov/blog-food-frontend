import { Button } from 'antd';
import { PaginationProps } from './model/types';

const Pagination: React.FC<PaginationProps> = ({
  itemPerPage,
  totalItem,
  paginate,
}) => {
  const pageNumber = [];

  for (let i = 1; i < Math.ceil(totalItem / itemPerPage); i++) {
    pageNumber.push(i);
  }

  return (
    <div className="main-container">
      <ul className="flex gap-[5px] justify-center">
        {pageNumber.map((number) => (
          <li key={number}>
            <Button
              className="custom-button-white"
              onClick={() => paginate(number)}
            >
              {number}
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
