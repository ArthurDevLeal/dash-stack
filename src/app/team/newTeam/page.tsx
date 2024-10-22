import { Tittle } from "@/app/components/ui/tittle";
import Form from "./components/form/form";

export default function Team() {
  return (
    <main className="flex flex-col">
      <Tittle name="Team" />
      <div className="flex flex-col items-center w-full bg-white mt-[30px] rounded-[14px] p-[60px]">
        <Form />
      </div>
    </main>
  );
}
