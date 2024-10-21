import { TrendingDown, TrendingUp } from "lucide-react";

export function CardPercentage({ number, text }: { number: number; text: string }) {
  return (
    <div className="flex items-center gap-2">
      {number >= 0 ? <TrendingUp color="#00B69B" /> : <TrendingDown color="#F93C65" />}
      {number >= 0 ? (
        <p className="text-[#00B69B] font-semibold">{Math.abs(number)}%</p>
      ) : (
        <p className="text-[#F93C65] font-semibold">{Math.abs(number)}%</p>
      )}
      <p className="text-[#606060] font-semibold">{text}</p>
    </div>
  );
}
