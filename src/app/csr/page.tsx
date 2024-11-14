"use client";

import { FC, useEffect, useState } from 'react';

interface Item {
  id: number;
  name: string;
}

const pageSize = 10;

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
  }
  
const Pagination: FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => (
<div>
    {Array.from({ length: totalPages }, (_, i) => (
    <button
        key={i + 1}
        onClick={() => onPageChange(i + 1)}
        style={{ margin: '0 5px', textDecoration: currentPage === i + 1 ? 'underline' : 'none' }}
    >
        {i + 1}
    </button>
    ))}
</div>
);

export default function ClientRenderedPage() {
  const [items, setItems] = useState<Item[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [paginatedItems, setPaginatedItems] = useState<Item[]>([]);

  useEffect(() => {
    // Simulate fetching data on the client
    const fetchData = async () => {
      const fetchedItems = Array.from({ length: 100 }, (_, i) => ({
        id: i + 1,
        name: `Item ${i + 1}`,
      }));
      setItems(fetchedItems);
    };

    fetchData();
  }, []);

  // Update paginated items whenever items or current page changes
  useEffect(() => {
    const startIndex = (currentPage - 1) * pageSize;
    setPaginatedItems(items.slice(startIndex, startIndex + pageSize));
  }, [items, currentPage]);

  const totalPages = Math.ceil(items.length / pageSize);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <h1>Client-Side Rendered Paginated List</h1>
      <ul>
        {paginatedItems.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
    </div>
  );
}
