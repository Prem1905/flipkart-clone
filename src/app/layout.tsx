import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import CategoryBar from "@/components/layout/CategoryBar";
import Footer from "@/components/layout/Footer";
import { CartProvider } from "@/context/CartContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-black antialiased">
        <CartProvider>
        <Navbar />
        <CategoryBar />
        <div className="min-h-screen">{children}</div>
        <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
