"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="flex h-9 items-center gap-2 rounded-full 
                 bg-white/10 px-3 text-xs font-medium text-white 
                 hover:bg-white/20 transition"
    >
      <span>{dark ? "🌙" : "☀️"}</span>
      <span className="hidden sm:inline">
        {dark ? "Dark" : "Light"}
      </span>
    </button>
  );
}
