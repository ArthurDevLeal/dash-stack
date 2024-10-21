interface ItemRootProps {
  children: React.ReactNode;
  favorited: boolean;
}

export function ItemRoot({ children, favorited }: ItemRootProps) {
  return (
    <div
      className={`w-full h-[93px] rounded-[12px] flex justify-between items-center border p-[30px] transition-all ${
        favorited ? "bg-babyblue border-babyblue" : "bg-white border-[#D5D5D5]"
      }`}
    >
      {children}
    </div>
  );
}
