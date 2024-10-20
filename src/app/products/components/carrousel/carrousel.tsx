import { ArrowLeft, ArrowRight } from "lucide-react";

export default function Carrousel() {
  return (
    <div className="w-full h-[346px] bg-babyblue rounded-2xl flex justify-between">
      <div className="flex">
        <div className="h-full w-[130px] flex items-center justify-center">
          <button className="bg-bgdashboard p-3 rounded-full">
            <ArrowLeft />
          </button>
        </div>

        <div className="flex flex-col gap-2 items-start justify-center">
          <p className="font-semibold text-white">September 12-22</p>
          <h2 className="text-[37px] font-[900] text-white">
            Enjoy free home <br /> delivered in this summer
          </h2>
          <p className="opacity-80 text-white">Designer Dresses - Pick from trendy Designer Dress</p>

          <button className="py-2 px-10 bg-[#FF8743] rounded-[11px] text-white mt-[30px] hover:bg-[#eb7d3d]">
            Get Started
          </button>
        </div>
      </div>
      <div className="h-full w-[130px] flex items-center justify-center">
        <button className="bg-bgdashboard p-3 rounded-full">
          <ArrowRight />
        </button>
      </div>
    </div>
  );
}
