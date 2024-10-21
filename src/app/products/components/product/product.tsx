import { ProductIndex } from "./product-index";

interface ProductProps {
  name: string;
  price: string;
  score: number;
  scoreNumber: number;
}

export default function Product({ name, price, score, scoreNumber }: ProductProps) {
  return (
    <ProductIndex.Root>
      <ProductIndex.Image />
      <div className="flex items-center justify-between">
        <div className="flex flex-col ">
          <p className="text-[18px] font-bold text-diferentblack">{name}</p>
          <p className="font-bold text-babyblue">{price}</p>
        </div>
        <ProductIndex.Like />
      </div>
      <ProductIndex.Score score={score} scoreNumber={scoreNumber} />
      <button className="bg-[#E2EAF8] px-[22px] py-1 w-fit rounded-[12px] font-bold transition-colors hover:bg-[#d1d8e6]">
        Edit Product
      </button>
    </ProductIndex.Root>
  );
}
