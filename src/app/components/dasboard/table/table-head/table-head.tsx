import { TableIndex } from "../table-index";

export function TableHead() {
  return <thead className="bg-bgdashboard h-[48px] rounded-[12px]">
    <tr>
      <TableIndex.Head.Item name="Product Name"/>
      <TableIndex.Head.Item name="Location"/>
      <TableIndex.Head.Item name="Date - Time"/>
      <TableIndex.Head.Item name="Piece"/>
      <TableIndex.Head.Item name="Amout"/>
      <TableIndex.Head.Item name="Status"/>
    </tr>
  </thead>;
}
