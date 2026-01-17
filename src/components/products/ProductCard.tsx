import Link from "next/link";
import Image from "next/image";
import RatingBadge from "@/components/ui/RatingBadge";
import { Product } from "@/types/product";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/products/${product.id}`} className="group">
      <div className="bg-white p-4 rounded hover:shadow-md transition">
        {/* Image */}
        <div className="relative h-40 mb-3">
          <Image
            src={product.images[0]}
            alt={product.title}
            fill
            className="object-contain group-hover:scale-105 transition"
          />
        </div>

        {/* Title */}
        <h3 className="text-sm font-medium line-clamp-2">
          {product.title}
        </h3>

        {/* Rating */}
        <div className="mt-1">
          <RatingBadge
            rating={product.rating}
            reviews={product.reviews}
          />
        </div>

        {/* Price */}
        <div className="mt-2 flex items-center gap-2">
          <span className="text-lg font-semibold">
            ₹{product.price.toLocaleString("en-IN")}
          </span>

          {product.originalPrice && (
            <span className="text-sm text-gray-400 line-through">
              ₹{product.originalPrice.toLocaleString("en-IN")}
            </span>
          )}
        </div>

        {/* Stock warning */}
        {product.stock > 0 && product.stock <= 5 && (
          <p className="text-xs text-orange-600 mt-1">
            Only {product.stock} left
          </p>
        )}
      </div>
    </Link>
  );
}
