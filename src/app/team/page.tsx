import { Tittle } from "../components/ui/tittle";
import PersonList from "./components/person/person-list";
import { TeamAdd } from "./components/team-add";

export default function Team() {
  return (
    <main className="flex flex-col">
      <div className="w-full flex justify-between">
        <Tittle name="Team" />
        <TeamAdd />
      </div>
      <PersonList />
    </main>
  );
}
