export function PersonRoot({ children }: { children: JSX.Element | JSX.Element[] }) {
  return (
    <div className="flex flex-col justify-center items-center gap-6 h-[289px] bg-white rounded-[18px] p-9">
      {children}
    </div>
  );
}
