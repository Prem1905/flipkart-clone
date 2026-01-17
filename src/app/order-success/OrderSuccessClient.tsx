"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useCart } from "@/context/CartContext";

type OrderItem = {
  id: number;
  title: string;
  price: number;
  quantity: number;
};

export default function OrderSuccessClient() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get("orderId");
  const { dispatch } = useCart();

  const [items, setItems] = useState<OrderItem[]>([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const stored = localStorage.getItem("lastOrder");
    if (stored) {
      const order = JSON.parse(stored);
      setItems(order.items);
      setTotal(order.total);
    }

    dispatch({ type: "CLEAR" });
  }, [dispatch]);

  return (
    <main className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded shadow">
        <h1 className="text-2xl font-semibold text-green-600 mb-2">
          🎉 Order Placed Successfully
        </h1>

        <p className="text-sm text-gray-600 mb-6">
          Order ID: <span className="font-mono">{orderId}</span>
        </p>

        {/* Items */}
        <div className="border rounded mb-6">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex justify-between p-4 border-b last:border-b-0"
            >
              <div>
                <p className="font-medium">{item.title}</p>
                <p className="text-sm text-gray-500">
                  ₹{item.price.toLocaleString()} × {item.quantity}
                </p>
              </div>

              <p className="font-semibold">
                ₹{(item.price * item.quantity).toLocaleString()}
              </p>
            </div>
          ))}
        </div>

        {/* Total */}
        <div className="flex justify-between text-lg font-semibold mb-6">
          <span>Total Amount</span>
          <span>₹{total.toLocaleString()}</span>
        </div>

        <p className="text-sm text-gray-600">
          Thank you for shopping with us 💙
        </p>
      </div>
    </main>
  );
}
