"use client";

import { useCart } from "@/context/CartContext";
import CartItem from "@/components/cart/CartItem";
import CartSummary from "@/components/cart/CartSummary";
import Link from "next/link";
import type { CartItem as CartItemType } from "@/context/CartContext";

export default function CartPage() {
  const { state } = useCart();
  const isEmpty = state.items.length === 0;

  if (isEmpty) {
    return (
      <main className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white rounded shadow-md px-10 py-12 text-center max-w-md w-full">
          {/* Icon */}
          <div className="text-6xl mb-4">🛒</div>

          <h2 className="text-xl font-semibold mb-2">
            Your cart is empty
          </h2>

          <p className="text-gray-600 text-sm mb-6">
            Looks like you haven’t added anything to your cart yet
          </p>

          <Link
            href="/"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded font-medium"
          >
            Shop Now
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-6 grid grid-cols-3 gap-6">
        {/* Cart Items */}
        <div className="col-span-2 bg-white rounded shadow p-6">
          <h1 className="text-lg font-semibold mb-4">
            My Cart ({state.items.length})
          </h1>

          {state.items.map((item: CartItemType) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>

        {/* Summary */}
        <CartSummary />
      </div>
    </main>
  );
}
