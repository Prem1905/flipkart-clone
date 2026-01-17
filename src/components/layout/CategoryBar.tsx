"use client";

import { useRouter, useSearchParams } from "next/navigation";

const categories = [
  "Mobiles",
  "Electronics",
  "Fashion",
  "Home",
  "Beauty",
  "Grocery",
];

export default function CategoryBar() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const activeCategory = searchParams.get("category");

  const handleClick = (category: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("category", category);
    params.delete("page"); // reset page on filter change

    router.push(`/?${params.toString()}`);
  };


  return (
    <div className="bg-white border-b">
      <div className="max-w-7xl mx-auto flex gap-8 px-6 py-3">
        {categories.map((cat) => {
          const isActive = activeCategory === cat;

          return (
            <button
              key={cat}
              onClick={() => handleClick(cat)}
              className={`text-sm font-medium transition ${
                isActive
                  ? "text-blue-600 border-b-2 border-blue-600 pb-1"
                  : "text-gray-800 hover:text-blue-600"
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>
    </div>
  );
}
