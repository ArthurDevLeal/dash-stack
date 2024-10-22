import Link from "next/link";

export function ContactAdd() {
  return (
    <Link
      href={"/contact/addNew"}
      className="flex justify-center items-center text-white bg-babyblue py-[10px] px-[30px] rounded-md transition-colors hover:bg-[#457bf8]"
    >
      Add new Contat
    </Link>
  );
}
