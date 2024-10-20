import { TableBodyItem } from "./table-body/table-body-item";
import { TableBodyItemDelivered } from "./table-body/table-body-item-delivered";
import { TableBodyItemImage } from "./table-body/table-body-item-image";
import { TableHeadItem } from "./table-head/table-head-item";
import { TableRoot } from "./table-root";

export const TableIndex = {
  Root: TableRoot,
  Head: {
    Item: TableHeadItem,
  },
  Body: {
    Item: TableBodyItem,
    Delivered: TableBodyItemDelivered,
    ItemImage: TableBodyItemImage,
  },
};
