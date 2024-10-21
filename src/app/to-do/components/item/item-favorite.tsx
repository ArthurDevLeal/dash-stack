import { Star } from "lucide-react";

interface ItemFavoriteProps {
  favorited: boolean;
  onFavorite: () => void;
}

export function ItemFavorite({ favorited, onFavorite }: ItemFavoriteProps) {
  return (
    <button onClick={onFavorite}>
      <Star className={favorited ? "text-yellow-300 fill-yellow-300" : "text-[#888888] fill-[#888888]"} />
    </button>
  );
}
