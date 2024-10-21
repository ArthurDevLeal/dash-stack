export default function SideBarRoot({ children }: { children: JSX.Element | JSX.Element[] }) {
  return (
    <div className="fixed w-[240px] z-50 bg-white h-full flex flex-col items-center border-r overflow-y-auto scrollbar-hidden">
      {children}
    </div>
  );
}
