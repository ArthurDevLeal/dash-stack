import { Tittle } from "../components/ui/tittle";
import Plan from "./components/plan";

export default function Pricing() {
  return (
    <main>
      <Tittle name="Pricing" />
      <div className="grid grid-cols-3 gap-[40px] mt-[30px]">
        <Plan planName="Basic" price={14.99} level={1} />
        <Plan planName="Basic" price={14.99} level={2} />
        <Plan planName="Basic" price={14.99} level={3} />
      </div>
    </main>
  );
}
