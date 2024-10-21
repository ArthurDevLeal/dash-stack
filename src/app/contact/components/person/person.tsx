import { PersonIndex } from "./person-index";

interface PersonProps {
  name: string;
  email: string;
}
export default function Person({ name, email }: PersonProps) {
  return (
    <PersonIndex.Root>
      <PersonIndex.Image />
      <h2 className="font-bold text-diferentblack">{name}</h2>
      <p className="text-[14px] text-diferentblack opacity-60">{email}</p>
      <PersonIndex.Message />
    </PersonIndex.Root>
  );
}
