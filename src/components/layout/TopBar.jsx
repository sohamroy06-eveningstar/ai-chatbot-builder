"use client";
import Link from "next/link";

export default function Topbar() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/10 
                       bg-[#0b1220]/80 backdrop-blur">
      <div className="flex h-14 items-center justify-between px-4 sm:px-6">
        
        {/* LOGO */}
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg 
                          bg-linear-to-br from-blue-500 to-indigo-600 
                          text-sm font-bold text-white">
            AI
          </div>
          <Link href="/" className="text-sm font-semibold tracking-wide text-white">
            AI Chatbot Builder
          </Link>
        </div>

        {/* RIGHT ACTIONS */}
        <div className="flex items-center gap-3">
          
        </div>

      </div>
    </header>
  );
}
