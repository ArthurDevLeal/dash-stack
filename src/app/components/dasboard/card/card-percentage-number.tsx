export function CardPercentageNumber({ number }: { number: number }) {
  if (number >= 0) {
    return <p className="text-[#00B69B] font-semibold">{Math.abs(number)}%</p>;
  } else {
    return <p className="text-[#F93C65] font-semibold">{Math.abs(number)}%</p>;
  }
}   
