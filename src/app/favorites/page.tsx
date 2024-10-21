import { Tittle } from "../components/ui/tittle";
import Product from "../products/components/product/product";

export default function Favorites() {
  return (
    <main className="flex flex-col gap-[30px]">
      <Tittle name="Favorites" />
      <div className="grid grid-cols-3 gap-[30px] ">
        <Product name="Apple watch Series 4" price="$120.00" score={2} scoreNumber={1231} />
        <Product name="Apple watch Series 4" price="$120.00" score={2} scoreNumber={1231} />
        <Product name="Apple watch Series 4" price="$120.00" score={2} scoreNumber={1231} />
        <Product name="Apple watch Series 4" price="$120.00" score={2} scoreNumber={1231} />
        <Product name="Apple watch Series 4" price="$120.00" score={2} scoreNumber={1231} />
        <Product name="Apple watch Series 4" price="$120.00" score={2} scoreNumber={1231} />
      </div>
    </main>
  );
}
