"use client";

import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { state } = useCart();

  const query = searchParams.get("q") ?? "";

  const onSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams(searchParams.toString());

    if (query) params.set("q", query);
    else params.delete("q");

    router.push(`/?${params.toString()}`);
  };

  const totalItems = state.items.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  return (
    <header className="bg-blue-600 text-white">
      <div className="max-w-7xl mx-auto flex items-center gap-6 px-6 py-3">
        <Link href="/" className="font-bold text-xl text-white">
          Flipkart
        </Link>

        <form onSubmit={onSearch} className="flex-1">
          <input
            value={query}
            onChange={(e) => {
              const params = new URLSearchParams(searchParams.toString());
              const value = e.target.value;

              if (value) params.set("q", value);
              else params.delete("q");

              router.push(`/?${params.toString()}`);
            }}
            placeholder="Search for products, brands and more"
            className="w-full px-4 py-2 rounded-sm text-sm text-black bg-white shadow-sm focus:shadow-md"
          />
        </form>

        <Link href="/cart" className="font-semibold">
          Cart ({totalItems})
        </Link>
      </div>
    </header>
  );
}
