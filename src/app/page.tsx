import ProductGrid from "@/components/products/ProductGrid";
import Pagination from "@/components/products/Pagination";
import SortBar from "@/components/products/SortBar";

type SearchParams = {
  category?: string;
  q?: string;
  sort?: string;
  page?: string;
};

export default async function HomePage({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const { category, q, sort, page } = await searchParams;

  const url = new URL("http://localhost:4000/products");

  if (category) url.searchParams.set("category", category);
  if (q) url.searchParams.set("q", q);
  if (sort) url.searchParams.set("sort", sort);
  url.searchParams.set("page", page ?? "1");

  const res = await fetch(url.toString(), { cache: "no-store" });
  const data = await res.json();

  return (
    <main className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-6 space-y-6">
        <SortBar />

        <ProductGrid products={data.items} />

        <Pagination
          page={data.page}
          totalPages={data.totalPages}
          hasNext={data.hasNextPage}
          hasPrev={data.hasPrevPage}
        />
      </div>
    </main>
  );
}
