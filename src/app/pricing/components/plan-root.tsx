export function PlanRoot({ children }: { children: JSX.Element | JSX.Element[] }) {
  return (
    <div className="flex flex-col items-center w-full h-[848px] rounded-[24px] bg-white shadow-md py-10 px-[30px] text-diferentblack">
      {children}
    </div>
  );
}
