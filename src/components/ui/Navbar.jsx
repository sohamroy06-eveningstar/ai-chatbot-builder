"use client";

import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-4 py-3 md:px-8 border-b border-gray-200 dark:border-gray-800">
      <Link  href="/" className="text-lg font-bold md:text-xl">
        AI Chatbot Builder
      </Link>
      <ThemeToggle />
    </nav>
  );
}
