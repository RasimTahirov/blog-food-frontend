export interface PaginationProps {
  itemPerPage: number;
  totalItem: number;
  paginate: (pageNumber: number) => void;
}
