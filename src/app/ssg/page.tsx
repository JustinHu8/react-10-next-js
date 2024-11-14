import { items, Item } from '../../lib/data';
import { paginate } from '../../lib/paginate';
import Pagination from '../../components/Pagination';

const pageSize = 10;

interface SSGPageProps {
  params: {
    page: string;
  };
}

export default function SSGPage({ params }: SSGPageProps) {
  const currentPage = parseInt(params.page) || 1;
  const totalPages = Math.ceil(items.length / pageSize);
  const paginatedItems = paginate(items, currentPage, pageSize);

  return (
    <div>
      <h1>SSG Paginated List</h1>
      <ul>
        {paginatedItems.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <Pagination currentPage={currentPage} totalPages={totalPages} />
    </div>
  );
}

// Generate static params for each page during the build
export async function generateStaticParams() {
  const totalPages = Math.ceil(items.length / pageSize);
  const paths = Array.from({ length: totalPages }, (_, i) => ({
    page: (i + 1).toString(),
  }));

  return paths;
}

// Set ISR revalidation interval
export const revalidate = 60; // Revalidate every 60 seconds