"use client";

import { useCart } from "@/context/CartContext";
import type { CartItem as CartItemType } from "@/context/CartContext";

export default function CartItem({ item }: { item: CartItemType }) {
  const { dispatch } = useCart();

  const isAtMin = item.quantity <= 1;
  const isAtMax = item.quantity >= item.stock;

  return (
    <div className="flex justify-between items-center border-b py-4">
      {/* Product Info */}
      <div>
        <h3 className="font-medium">{item.title}</h3>
        <p className="text-sm text-gray-500">
          ₹{item.price.toLocaleString()}
        </p>
      </div>

      {/* Quantity + Price */}
      <div className="flex items-center gap-6">
        {/* Quantity Controls */}
        <div className="flex items-center border rounded">
          <button
            disabled={isAtMin}
            onClick={() =>
              dispatch({ type: "DECREMENT", id: item.id })
            }
            className={`px-3 py-1 text-lg ${
              isAtMin
                ? "text-gray-400 cursor-not-allowed"
                : "hover:bg-gray-100"
            }`}
          >
            −
          </button>

          <span className="px-3">{item.quantity}</span>

          <button
            disabled={isAtMax}
            onClick={() =>
              dispatch({ type: "INCREMENT", id: item.id })
            }
            className={`px-3 py-1 text-lg ${
              isAtMax
                ? "text-gray-400 cursor-not-allowed"
                : "hover:bg-gray-100"
            }`}
          >
            +
          </button>
        </div>

        {/* Total Price */}
        <p className="font-semibold w-24 text-right">
          ₹{(item.price * item.quantity).toLocaleString()}
        </p>

        {/* Remove */}
        <button
          onClick={() =>
            dispatch({ type: "REMOVE", id: item.id })
          }
          className="text-red-600 text-sm hover:underline"
        >
          Remove
        </button>
      </div>
    </div>
  );
}
