import { PlanIndex } from "./plan-index";

interface PlanProps {
  planName: string;
  price: number;
  level: number;
}
export default function Plan({ planName, price, level }: PlanProps) {
  return (
    <PlanIndex.Root>
      <h2 className="text-[22px] font-bold">{planName}</h2>
      <p>Monthly Charge</p>
      <h3 className="text-babyblue font-extrabold text-[46px]">${price}</h3>
      <PlanIndex.Division />
      <PlanIndex.Benefits level={level} />
      <PlanIndex.Division />
      <PlanIndex.Button />
      <p className="underline font-bold mt-[24px]">Start Your 30 Day Free Trial</p>
    </PlanIndex.Root>
  );
}
