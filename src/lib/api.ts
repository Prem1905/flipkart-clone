import { Product } from "@/types/product";

const API_BASE = "http://localhost:4000";

export async function fetchProducts(params?: {
  page?: number;
  limit?: number;
  category?: string;
  q?: string;
  sort?: string;
}) {
  const searchParams = new URLSearchParams();

  if (params?.page) searchParams.set("page", String(params.page));
  if (params?.limit) searchParams.set("limit", String(params.limit));
  if (params?.category) searchParams.set("category", params.category);
  if (params?.q) searchParams.set("q", params.q);
  if (params?.sort) searchParams.set("sort", params.sort);

  const res = await fetch(
    `${API_BASE}/products?${searchParams.toString()}`,
    { cache: "no-store" } // always fresh
  );

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  return res.json() as Promise<Product[]>;
}
