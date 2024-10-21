import { Tittle } from "../components/ui/tittle";
import { ContactAdd } from "./components/contact-add";
import { ContactClear } from "./components/contact-clear";
import PersonList from "./components/person/person-list";

export default function Contact() {
  return (
    <main>
      <div className="flex justify-between w-full">
        <Tittle name="Contact" />
        <div className="flex gap-2">
          <ContactClear />
          <ContactAdd />
        </div>
      </div>
      <PersonList />
    </main>
  );
}
