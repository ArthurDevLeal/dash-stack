import Card from "./components/dasboard/card/card";
import Graph from "./components/dasboard/graph/graph";
import Table from "./components/dasboard/table/table";
import Subtittle from "./components/ui/subtittle";
import { Tittle } from "./components/ui/tittle";


export default function Dashboard() {
  const cardData = [
    { name: "Total User", data: "40,689", percentageNumber: 8.5, percentageText: "Up from yesterday" },
    { name: "Total Order", data: "10293", percentageNumber: 1.3, percentageText: "Up from past week" },
    { name: "Total Sales", data: "$89,000", percentageNumber: -4.3, percentageText: "Down from yesterday" },
    { name: "Total Pending", data: "2040", percentageNumber: 1.8, percentageText: "Up from yesterday" },
  ];

  return (
    <div className="flex flex-col gap-[30px]">
      <Tittle name="Dashboard" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[30px]">
        {cardData.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>

      <div className="bg-white p-8 rounded-[14px]">
        <div className="flex justify-between items-center mb-6">
          <Subtittle name="Sales Details" />
        </div>
        <Graph />
      </div>

      <div className="bg-white p-8 rounded-[14px]">
        <div className="flex justify-between items-center mb-6">
          <Subtittle name="Deals Details" />
        </div>
        <Table />
      </div>
    </div>
  );
}
