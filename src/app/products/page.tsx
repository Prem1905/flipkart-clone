import ProductCard from "@/components/products/ProductCard";

async function getProducts() {
  const res = await fetch("http://localhost:4000/products", {
    cache: "no-store",
  });

  const json = await res.json();

  // ✅ normalize response
  return Array.isArray(json) ? json : json.data;
}


export default async function ProductsPage() {
  const products = await getProducts();
  console.log(products);


  return (
    <div className="max-w-7xl mx-auto px-6 py-6">
      <h1 className="text-xl font-semibold mb-6">Products</h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {products.map((product: any) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
