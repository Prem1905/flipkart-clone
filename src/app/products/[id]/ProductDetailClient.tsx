"use client";

import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { Product } from "@/types/product";
// import ReviewsSection from "@/components/products/ReviewsSection";

export default function ProductDetailClient({
  product,
}: {
  product: Product;
}) {
  const { state, dispatch } = useCart();

  const cartItem = state.items.find((i) => i.id === product.id);

  const isOutOfStock =
    product.stock === 0 ||
    (cartItem && cartItem.quantity >= product.stock);

  return (
    <div className="bg-white rounded shadow p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Image */}
      <div className="relative w-full h-[420px] bg-gray-100 rounded">
        <Image
          src={product.images[0]}
          alt={product.title}
          fill
          priority
          className="object-contain"
          sizes="(max-width: 768px) 100vw, 420px"
        />
      </div>

      {/* Details */}
      <div>
        <h1 className="text-2xl font-bold">{product.title}</h1>
        <p className="text-sm text-gray-500 mt-1">
          {product.category}
        </p>

        {/* Rating + reviews */}
      <div className="mt-2 flex items-center gap-3">
        <span className="flex items-center gap-1 bg-green-600 text-white text-sm font-semibold px-2 py-1 rounded">
          {product.rating} ★
        </span>

        <span className="text-sm text-gray-600">
          {product.reviews.toLocaleString()} Ratings & Reviews
        </span>
      </div>


        {/* Price */}
        <div className="mt-4 flex items-center gap-3">
          <span className="text-2xl font-semibold">
            ₹{product.price.toLocaleString("en-IN")}
          </span>

          {product.originalPrice && (
            <span className="text-gray-400 line-through">
              ₹{product.originalPrice.toLocaleString("en-IN")}
            </span>
          )}

          {product.discountPercent && (
            <span className="text-green-600 font-medium text-sm">
              {product.discountPercent}% off
            </span>
          )}
        </div>

        {/* Description */}
        <p className="mt-4 text-sm text-gray-700">
          {product.description}
        </p>

        {/* Stock */}
        {product.stock > 0 ? (
          <p className="mt-3 text-sm text-green-600">
            In stock ({product.stock} left)
          </p>
        ) : (
          <p className="mt-3 text-sm text-red-600">
            Out of stock
          </p>
        )}

        {/* Add to cart */}
        <button
          disabled={isOutOfStock}
          onClick={() => dispatch({ type: "ADD", product })}
          className={`mt-6 w-full py-3 rounded text-white font-medium ${
            isOutOfStock
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {isOutOfStock ? "Out of Stock" : "Add to Cart"}
        </button>
      </div>
      {/* <ReviewsSection
        rating={product.rating}
        reviewsCount={product.reviews}
      /> */}
    </div>
  );
}
