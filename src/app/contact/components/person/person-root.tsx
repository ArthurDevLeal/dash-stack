export function PersonRoot({ children }: { children: JSX.Element | JSX.Element[] }) {
  return (
    <div className="bg-white h-[414px] rounded-[16px] flex flex-col items-center justify-between pb-4">
      {children}
    </div>
  );
}
