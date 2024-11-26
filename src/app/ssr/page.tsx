import { items } from '../../lib/data';
import { paginate } from '../../lib/paginate';
import Pagination from '../../components/Pagination';

const pageSize = 10;

// Server Rendering Context
// It directly uses searchParams as a prop
// passing searchParams is a way to handle dynamic query parameters on the server
// searchParams is only available in the Server 
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

// Unlike SSG, there is no use of generateStaticParams() or revalidate export,
// Instead, all logic for pagination (currentPage, totalPages, paginatedItems) happens at request time, which is characteristic of SSR.
// The use of searchParams.page to compute the current page means that the rendering 
// of content is dynamically tied to the query parameters in the URL.
// This ensures that the page content is generated fresh on every request

