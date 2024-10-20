export function TableBodyItem({ info }: { info: string | number }) {
  return (
    <td className="px-4 py-2 whitespace-nowrap">
      <p className="text-sm text-gray-900">{info}</p>
    </td>
  );
}
