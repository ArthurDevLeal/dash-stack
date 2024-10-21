import { X } from "lucide-react";

interface ItemCloseProps {
  onRemove: () => void;
  favorited: boolean;
}

export function ItemClose({ onRemove, favorited }: ItemCloseProps) {
  return (
    <button
      className={`border rounded-full w-fit ${favorited ? "border-white" : "border-[#888888]"}`}
      onClick={onRemove}
    >
      <X className={favorited ? "text-white" : "text-[#888888]"} />
    </button>
  );
}
