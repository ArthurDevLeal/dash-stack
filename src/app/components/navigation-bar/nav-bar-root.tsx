export default function NavBarRoot({ children }: { children: JSX.Element | JSX.Element[] }) {
  return <nav className="sticky top-0 bg-white h-[70px] px-[30px] flex justify-between z-10">{children}</nav>;
}
