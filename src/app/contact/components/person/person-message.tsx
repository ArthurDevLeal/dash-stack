import { MessageCircle } from "lucide-react";

export function PersonMessage() {
  return (
    <button className="flex items-center justify-center gap-3 py-2 px-6 rounded-[6px] border border-[#767676] bg-white text-[#767676] font-bold text-[14px] transition-all group hover:bg-[#767676] hover:text-white">
      <MessageCircle size={16} className="text-[#767676] group-hover:text-white" /> Message
    </button>
  );
}
