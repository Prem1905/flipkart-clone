import { notFound } from "next/navigation";
import ProductDetailClient from "@/app/products/[id]/ProductDetailClient";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function ProductDetailPage({ params }: Props) {
  const { id } = await params;

  const res = await fetch(
    `http://localhost:4000/products/${id}`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    notFound();
  }

  const product = await res.json();

  return (
    <main className="min-h-screen bg-gray-100">
      <div className="max-w-5xl mx-auto px-4 py-8">
        <ProductDetailClient product={product} />
      </div>
    </main>
  );
}
