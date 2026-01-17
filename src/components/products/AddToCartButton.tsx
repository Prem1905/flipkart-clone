"use client";

type Props = {
  product: {
    id: number;
    title: string;
    price: number;
    stock: number;
  };
};

export default function AddToCartButton({ product }: Props) {
  const handleAdd = () => {
    alert(`Added "${product.title}" to cart (UI only)`);
  };

  return (
    <button
      onClick={handleAdd}
      disabled={product.stock === 0}
      className={`w-full py-3 rounded-md font-semibold transition ${
        product.stock === 0
          ? "bg-gray-400 cursor-not-allowed"
          : "bg-blue-600 hover:bg-blue-700 text-white"
      }`}
    >
      {product.stock === 0 ? "Out of Stock" : "Add to Cart"}
    </button>
  );
}
