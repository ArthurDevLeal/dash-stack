export function TableBodyItemImage({ name }: { name: string }) {
  return (
    <td className="px-4 py-2 whitespace-nowrap text-diferentblack flex items-center gap-4">
      <div className="flex-shrink-0 h-10 w-10 bg-babyblue rounded-full"></div>
      <p className="text-sm font-medium">{name}</p>
    </td>
  );
}
