import { Tittle } from "../components/ui/tittle";
import Carrousel from "./components/carrousel/carrousel";
import Product from "./components/product/product";

export default function Products() {
  return (
    <main className="flex flex-col gap-[30px]">
      <Tittle name="Products" />
      <Carrousel />
      <div className="grid grid-cols-3 gap-[30px] mt-8">
        <Product name="Apple watch Series 4" price="$120.00" score={2} scoreNumber={1231} />
        <Product name="Apple watch Series 4" price="$120.00" score={3} scoreNumber={1231} />
        <Product name="Apple watch Series 4" price="$120.00" score={5} scoreNumber={1231} />
        <Product name="Apple watch Series 4" price="$120.00" score={2} scoreNumber={1231} />
        <Product name="Apple watch Series 4" price="$120.00" score={3} scoreNumber={1231} />
        <Product name="Apple watch Series 4" price="$120.00" score={5} scoreNumber={1231} />
        <Product name="Apple watch Series 4" price="$120.00" score={2} scoreNumber={1231} />
        <Product name="Apple watch Series 4" price="$120.00" score={3} scoreNumber={1231} />
        <Product name="Apple watch Series 4" price="$120.00" score={5} scoreNumber={1231} />
      </div>
    </main>
  );
}
