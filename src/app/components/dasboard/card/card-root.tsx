
export function CardRoot({ children }: { children: JSX.Element | JSX.Element[] }) {
  return (
    <div className="flex flex-col justify-between w-full h-full bg-white rounded-[14px] p-4">{children}</div>
  )
}
