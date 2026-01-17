type Review = {
  id: number;
  user: string;
  rating: number;
  title: string;
  comment: string;
};

const MOCK_REVIEWS: Review[] = [
  {
    id: 1,
    user: "Rahul Sharma",
    rating: 5,
    title: "Excellent product",
    comment:
      "Camera quality is amazing and battery lasts a full day. Totally worth it.",
  },
  {
    id: 2,
    user: "Ananya Verma",
    rating: 4,
    title: "Very good, but pricey",
    comment:
      "Performance is top-notch. A bit expensive, but overall satisfied.",
  },
  {
    id: 3,
    user: "Karan Patel",
    rating: 5,
    title: "Best Android phone",
    comment:
      "Display and performance are flagship level. Highly recommended.",
  },
];

export default function ReviewsSection({
  rating,
  reviewsCount,
}: {
  rating: number;
  reviewsCount: number;
}) {
  return (
    <div className="bg-white mt-8 rounded shadow p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold">Ratings & Reviews</h2>

        <button className="text-blue-600 text-sm font-medium hover:underline">
          See all reviews
        </button>
      </div>

      {/* Summary */}
      <div className="flex items-center gap-6 mb-6">
        <div className="flex flex-col items-center">
          <span className="bg-green-600 text-white text-xl font-bold px-3 py-1 rounded">
            {rating} ★
          </span>
          <span className="text-sm text-gray-500 mt-1">
            {reviewsCount.toLocaleString()} ratings
          </span>
        </div>
      </div>

      {/* Reviews list */}
      <div className="space-y-6">
        {MOCK_REVIEWS.map((review) => (
          <div key={review.id} className="border-t pt-4">
            <div className="flex items-center gap-2">
              <span className="bg-green-600 text-white text-xs font-semibold px-2 py-0.5 rounded">
                {review.rating} ★
              </span>
              <h3 className="font-medium">{review.title}</h3>
            </div>

            <p className="mt-2 text-sm text-gray-700">
              {review.comment}
            </p>

            <p className="mt-2 text-xs text-gray-500">
              {review.user}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
