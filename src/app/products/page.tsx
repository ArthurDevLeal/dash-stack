import { ArrowLeft, ArrowRight } from "lucide-react";
import { Tittle } from "../components/ui/tittle";
import Carrousel from "./components/carrousel/carrousel";

export default function Products() {
  return (
    <main className="flex flex-col">
      <Tittle name="Products" />
      <Carrousel />
    </main>
  );
}
