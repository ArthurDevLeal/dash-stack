import { TableIndex } from "../table-index";

export function TableBody() {
  return (
    <tbody className="divide-y divide-gray-200">
      <tr>
        <TableIndex.Body.ItemImage name="Apple Watch" />
        <TableIndex.Body.Item info={"6096 Marjolaine Landing"} />
        <TableIndex.Body.Item info={"12.09.2019 - 12:53 PM"} />
        <TableIndex.Body.Item info={423} />
        <TableIndex.Body.Item info={"$34,295"} />
        <TableIndex.Body.Delivered status="Delivered" />
      </tr>
      <tr>
        <TableIndex.Body.ItemImage name="Apple Watch" />
        <TableIndex.Body.Item info={"6096 Marjolaine Landing"} />
        <TableIndex.Body.Item info={"12.09.2019 - 12:53 PM"} />
        <TableIndex.Body.Item info={423} />
        <TableIndex.Body.Item info={"$34,295"} />
        <TableIndex.Body.Delivered status="Rejected" />
      </tr>
      <tr>
        <TableIndex.Body.ItemImage name="Apple Watch" />
        <TableIndex.Body.Item info={"6096 Marjolaine Landing"} />
        <TableIndex.Body.Item info={"12.09.2019 - 12:53 PM"} />
        <TableIndex.Body.Item info={423} />
        <TableIndex.Body.Item info={"$34,295"} />
        <TableIndex.Body.Delivered status="Pending" />
      </tr>
      <tr>
        <TableIndex.Body.ItemImage name="Apple Watch" />
        <TableIndex.Body.Item info={"6096 Marjolaine Landing"} />
        <TableIndex.Body.Item info={"12.09.2019 - 12:53 PM"} />
        <TableIndex.Body.Item info={423} />
        <TableIndex.Body.Item info={"$34,295"} />
        <TableIndex.Body.Delivered status="Pending" />
      </tr>
      <tr>
        <TableIndex.Body.ItemImage name="Apple Watch" />
        <TableIndex.Body.Item info={"6096 Marjolaine Landing"} />
        <TableIndex.Body.Item info={"12.09.2019 - 12:53 PM"} />
        <TableIndex.Body.Item info={423} />
        <TableIndex.Body.Item info={"$34,295"} />
        <TableIndex.Body.Delivered status="Delivered" />
      </tr>
      <tr>
        <TableIndex.Body.ItemImage name="Apple Watch" />
        <TableIndex.Body.Item info={"6096 Marjolaine Landing"} />
        <TableIndex.Body.Item info={"12.09.2019 - 12:53 PM"} />
        <TableIndex.Body.Item info={423} />
        <TableIndex.Body.Item info={"$34,295"} />
        <TableIndex.Body.Delivered status="Rejected" />
      </tr>
    </tbody>
  );
}
