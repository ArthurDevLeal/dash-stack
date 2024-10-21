import { CardIndex } from "./card-index";
import { CardPercentage } from "./card-percentage";

interface CardProps {
  name: string;
  data: string | number;
  percentageNumber: number;
  percentageText: string;
}
export default function Card({ name, data, percentageNumber, percentageText }: CardProps) {
  return (
    <CardIndex.Root>
      <div className="flex justify-between">
        <div className="flex flex-col gap-4">
          <h2 className="font-semibold text-diferentblack opacity-70">{name}</h2>
          <p className="text-[28px] font-bold text-diferentblack">{data}</p>
        </div>
        <CardIndex.Icon />
      </div>
      <CardPercentage number={percentageNumber} text={percentageText} />
    </CardIndex.Root>
  );
}
