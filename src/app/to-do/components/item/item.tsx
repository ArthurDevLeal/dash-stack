import { ItemIndex } from "./item-index";

interface ItemProps {
  name: string;
  id: number;
  favorited: boolean;
  remove: () => void;
  favorite: () => void;
}

export default function Item({ name, id, favorited, remove, favorite }: ItemProps) {
  return (
    <ItemIndex.Root favorited={favorited}>
      <div className="flex items-center gap-[32px]">
        <p className={`font-bold ${favorited ? "text-white" : ""}`}>{id}.</p>
        <h2 className={`font-bold ${favorited ? "text-white" : ""}`}>{name}</h2>
      </div>
      <div className="flex gap-8">
        <ItemIndex.Favorite favorited={favorited} onFavorite={favorite} />
        <ItemIndex.Close onRemove={remove} favorited={favorited} />
      </div>
    </ItemIndex.Root>
  );
}