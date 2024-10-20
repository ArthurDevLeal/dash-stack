export function TableBodyItemDelivered({ status }: { status: "Delivered" | "Pending" | "Rejected" }) {
  switch (status) {
    case "Delivered":
      return (
        <td className="px-4 py-2 whitespace-nowrap">
          <span className="justify-center items-center w-[93px] h-[27px] inline-flex text-[14px] font-bold rounded-full bg-[#00B69B] text-white">
            Delivered
          </span>
        </td>
      );
    case "Pending":
      return (
        <td className="px-4 py-2 whitespace-nowrap">
          <span className="justify-center items-center w-[93px] h-[27px] inline-flex text-[14px] font-bold rounded-full bg-[#FCBE2D] text-white">
            Pending
          </span>
        </td>
      );
    case "Rejected":
      return (
        <td className="px-4 py-2 whitespace-nowrap">
          <span className="justify-center items-center w-[93px] h-[27px] inline-flex text-[14px] font-bold rounded-full bg-[#FD5454] text-white">
            Rejected
          </span>
        </td>
      );
  }
}
