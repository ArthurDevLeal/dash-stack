import { ReactNode } from "react";

export function TableRoot({ children }: { children: ReactNode }) {
  return <table className="min-w-full ">{children}</table>;
}
