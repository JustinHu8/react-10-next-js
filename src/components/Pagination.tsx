import Link from 'next/link';
import { FC } from 'react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
}

const Pagination: FC<PaginationProps> = ({ currentPage, totalPages }) => (
  <div>
    {Array.from({ length: totalPages }, (_, i) => (
      <Link key={i + 1} href={`?page=${i + 1}`} style={{ margin: '0 5px', textDecoration: currentPage === i + 1 ? 'underline' : 'none' }}>
      {i + 1}
    </Link>
    ))}
  </div>
);

export default Pagination;