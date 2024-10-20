import { TableBody } from "./table-body/table-body";
import { TableHead } from "./table-head/table-head";
import { TableIndex } from "./table-index";

export default function Table() {
  return (
    <TableIndex.Root>
        <TableHead />
        <TableBody />
    </TableIndex.Root>
  );
}
