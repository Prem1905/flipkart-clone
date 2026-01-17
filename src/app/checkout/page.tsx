"use client";

import { useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";

export default function CheckoutPage() {
  const { state, dispatch } = useCart();
  const router = useRouter();

  const total = state.items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const placeOrder = () => {
    const orderId = "ORD-" + Date.now().toString(36).toUpperCase();
      localStorage.setItem(
      "lastOrder",
      JSON.stringify({
        orderId,
        items: state.items,
        total,
        placedAt: new Date().toISOString(),
      })
    );
    router.push(`/order-success?orderId=${orderId}`);
  };


  return (
    <main className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* LEFT: Items */}
        <div className="lg:col-span-2 bg-white rounded shadow">
          <h1 className="text-lg font-semibold px-6 py-4 border-b">
            Order Summary
          </h1>

          <div className="px-6">
            {state.items.map((item) => (
              <div
                key={item.id}
                className="flex justify-between py-4 border-b last:border-b-0"
              >
                <div>
                  <p className="font-medium text-sm">
                    {item.title}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    ₹{item.price.toLocaleString()} × {item.quantity}
                  </p>
                </div>

                <p className="font-semibold">
                  ₹{(item.price * item.quantity).toLocaleString()}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT: Price Details */}
        <div className="bg-white rounded shadow sticky top-24 h-fit">
          <h2 className="text-sm font-semibold text-gray-600 px-6 py-4 border-b uppercase">
            Price Details
          </h2>

          <div className="px-6 py-4 text-sm">
            <div className="flex justify-between mb-2">
              <span>Price ({state.items.length} items)</span>
              <span>₹{total.toLocaleString()}</span>
            </div>

            <div className="flex justify-between mb-2">
              <span>Delivery Charges</span>
              <span className="text-green-600 font-medium">
                FREE
              </span>
            </div>

            <div className="border-t pt-3 mt-3 flex justify-between font-semibold text-base">
              <span>Total Amount</span>
              <span>₹{total.toLocaleString()}</span>
            </div>

            <button
              onClick={placeOrder}
              className="mt-6 w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded font-medium"
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
