export default function RatingBadge({
  rating,
  reviews,
}: {
  rating: number;
  reviews: number;
}) {
  return (
    <div className="flex items-center gap-2">
      <span className="flex items-center gap-1 bg-green-600 text-white text-xs font-semibold px-2 py-0.5 rounded">
        {rating}
        <span className="text-[10px]">★</span>
      </span>

      <span className="text-xs text-gray-500">
        ({reviews.toLocaleString()})
      </span>
    </div>
  );
}
