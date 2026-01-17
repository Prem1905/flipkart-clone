"use client";

import { useCart } from "@/context/CartContext";
import type { Product } from "@/context/CartContext";

export default function AddToCartButton({ product }: { product: Product }) {
  const { state, dispatch } = useCart();

  // find item in cart (if already added)
  const cartItem = state.items.find((i) => i.id === product.id);

  const currentQty = cartItem?.quantity ?? 0;
  const isOutOfStock = product.stock === 0;
  const isAtLimit = currentQty >= product.stock;

  const disabled = isOutOfStock || isAtLimit;

  return (
    <button
      disabled={disabled}
      onClick={() => {
        if (disabled) return;
        dispatch({ type: "ADD", product });
      }}
      className={`mt-4 w-full py-2 rounded text-white transition
        ${
          disabled
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-blue-600 hover:bg-blue-700"
        }
      `}
    >
      {isOutOfStock
        ? "Out of Stock"
        : isAtLimit
        ? "Stock Limit Reached"
        : "Add to Cart"}
    </button>
  );
}
