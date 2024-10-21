"use client";
import { Heart } from "lucide-react";
import { useState } from "react";

export function ProductLike() {
  const [active, setActive] = useState(false);
  return (
    <button onClick={() => setActive((state) => !state)}>
      <Heart fill={active ? "red" : "white"} className="transition-all" />
    </button>
  );
}
