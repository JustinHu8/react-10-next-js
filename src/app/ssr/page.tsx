import { items, Item } from '../../lib/data';
import { paginate } from '../../lib/paginate';
import Pagination from '../../components/Pagination';
import { useSearchParams } from 'next/navigation';

const pageSize = 10;

export default function SSRPage({ searchParams }: { searchParams: { page?: string } }) {
  const currentPage = parseInt(searchParams.page || '1');
  const totalPages = Math.ceil(items.length / pageSize);
  const paginatedItems = paginate(items, currentPage, pageSize);

  return (
    <div>
      <h1>SSR Paginated List</h1>
      <ul>
        {paginatedItems.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <Pagination currentPage={currentPage} totalPages={totalPages} />
    </div>
  );
}
