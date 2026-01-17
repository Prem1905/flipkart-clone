"use client";

import { useCart } from "@/context/CartContext";
import Link from "next/link";

export default function CartSummary() {
  const { state } = useCart();

  const total = state.items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="bg-white p-6 rounded shadow sticky top-24">
      <h2 className="text-sm font-semibold text-gray-600 mb-4 uppercase">
        Price Details
      </h2>

      <div className="flex justify-between text-sm mb-2">
        <span>Price ({state.items.length} items)</span>
        <span>₹{total.toLocaleString()}</span>
      </div>

      <div className="flex justify-between text-sm mb-2">
        <span>Delivery Charges</span>
        <span className="text-green-600 font-medium">FREE</span>
      </div>

      <div className="border-t pt-3 mt-3 flex justify-between font-semibold">
        <span>Total Amount</span>
        <span>₹{total.toLocaleString()}</span>
      </div>

      <Link href="/checkout">
        <button className="mt-6 w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded font-medium">
          Proceed to Checkout
        </button>
      </Link>
    </div>
  );
}
