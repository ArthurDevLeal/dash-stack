import Link from "next/link";

export function TeamAdd() {
  return (
    <Link href={"team/newTeam"}>
      <button className="text-white bg-babyblue py-[10px] px-[30px] rounded-md transition-colors hover:bg-[#457bf8]">
        Add New Member
      </button>
    </Link>
  );
}
