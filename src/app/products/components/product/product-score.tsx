import { Star } from "lucide-react";

export function ProductScore({ score, scoreNumber }: { score: number; scoreNumber: number }) {
  const normalizedScore = Math.min(Math.max(score, 0), 5);
  const fullStars = Math.floor(normalizedScore);
  const emptyStars = 5 - fullStars;
  return (
    <div className="flex items-center gap-1">
      <div className="flex">
        {fullStars > 0 && <Star fill="gold" color="gold" size={20} />}
        {fullStars > 1 && <Star fill="gold" color="gold" size={20} />}
        {fullStars > 2 && <Star fill="gold" color="gold" size={20} />}
        {fullStars > 3 && <Star fill="gold" color="gold" size={20} />}
        {fullStars > 4 && <Star fill="gold" color="gold" size={20} />}

        {emptyStars > 0 && <Star color="gray" size={20} />}
        {emptyStars > 1 && <Star color="gray" size={20} />}
        {emptyStars > 2 && <Star color="gray" size={20} />}
        {emptyStars > 3 && <Star color="gray" size={20} />}
        {emptyStars > 4 && <Star color="gray" size={20} />}
      </div>
      <span className="text-sm text-gray-600">({scoreNumber})</span>
    </div>
  );
}
