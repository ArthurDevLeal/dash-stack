import { PersonIndex } from "./person-index";

interface PersonProps {
  name: string;
  email: string;
  role: string;
}
export default function Person({ name, email, role }: PersonProps) {
  return (
    <PersonIndex.Root>
      <PersonIndex.Image />
      <div className="flex flex-col items-center gap-1">
        <h2 className="font-bold text-diferentblack">{name}</h2>
        <p className="font-semibold text-[14px] opacity-60">{role}</p>
        <p className="text-[14px] text-diferentblack ">{email}</p>
      </div>
    </PersonIndex.Root>
  );
}
