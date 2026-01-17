import { Suspense } from "react";
import OrderSuccessClient from "@/app/order-success/OrderSuccessClient";

export default function Page() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          <p className="text-gray-600">Loading order details...</p>
        </div>
      }
    >
      <OrderSuccessClient />
    </Suspense>
  );
}
