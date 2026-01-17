"use client";

import { useRouter, useSearchParams } from "next/navigation";

export default function SortBar() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentSort = searchParams.get("sort") || "";

  const handleSortChange = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (value) params.set("sort", value);
    else params.delete("sort");

    router.push(`/?${params.toString()}`);
  };

  return (
    <div className="flex items-center justify-between mb-6">
      <h2 className="text-lg font-semibold">Products</h2>

      <select
        value={currentSort}
        onChange={(e) => handleSortChange(e.target.value)}
        className="border border-gray-300 bg-white rounded px-4 py-2 text-sm shadow-sm"
      >
        <option value="">Sort by</option>
        <option value="price_asc">Price: Low to High</option>
        <option value="price_desc">Price: High to Low</option>
        <option value="newest">Newest First</option>
      </select>
    </div>
  );
}
