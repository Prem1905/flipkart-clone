"use client";

import { useRouter, useSearchParams } from "next/navigation";

type Props = {
  page: number;
  totalPages: number;
  hasNext: boolean;
  hasPrev: boolean;
};

export default function Pagination({
  page,
  totalPages,
  hasNext,
  hasPrev,
}: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const goToPage = (p: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", String(p));
    router.push(`/?${params.toString()}`);
  };

  return (
    <div className="flex justify-center items-center gap-2 mt-8">
      <button
        disabled={!hasPrev}
        onClick={() => goToPage(page - 1)}
        className="px-3 py-1 border rounded disabled:opacity-50"
      >
        ◀
      </button>

      {Array.from({ length: totalPages }).map((_, i) => {
        const p = i + 1;
        const active = p === page;

        return (
          <button
            key={p}
            onClick={() => goToPage(p)}
            className={`px-3 py-1 rounded border ${
              active
                ? "bg-blue-600 text-white"
                : "bg-white hover:bg-gray-100"
            }`}
          >
            {p}
          </button>
        );
      })}

      <button
        disabled={!hasNext}
        onClick={() => goToPage(page + 1)}
        className="px-3 py-1 border rounded disabled:opacity-50"
      >
        ▶
      </button>
    </div>
  );
}
