import { TrendingDown, TrendingUp } from "lucide-react";
import { CardIndex } from "./card-index";

export function CardPercentage({ number, text }: { number: number; text: string }) {
  return (
    <div className="flex items-center gap-2">
      {number >= 0 ? <TrendingUp color="#00B69B" /> : <TrendingDown color="#F93C65" />}
      <CardIndex.Percentage.Number number={number} />
      <CardIndex.Percentage.Text text={text} />
    </div>
  );
}
