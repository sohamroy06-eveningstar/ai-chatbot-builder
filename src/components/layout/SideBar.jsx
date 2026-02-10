"use client";

import Link from "next/link";
import {
  Bot,
  BarChart3,
  Settings,
  LayoutDashboard,
} from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="flex h-screen w-64 flex-col border-r border-white/10 bg-[#0b1220] text-white">
      
      {/* Logo */}
      <div className="flex items-center gap-3 px-6 py-5">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl
                        bg-gradient-to-br from-blue-500 to-indigo-600
                        text-sm font-bold text-white">
          AI
        </div>
        <Link href="/" className="text-sm font-semibold tracking-wide text-white">
          AI Chatbot
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1 px-3">
        <SidebarItem
          href="/dashboard"
          label="Dashboard"
          icon={LayoutDashboard}
        />

        <SidebarItem
          href="/dashboard/chatbot"
          label="Chatbots"
          icon={Bot}
        />

        <SidebarItem
          href="/dashboard/analytics"
          label="Analytics"
          icon={BarChart3}
        />

        <SidebarItem
          href="/dashboard/settings"
          label="Settings"
          icon={Settings}
        />
      </nav>
    </aside>
  );
}

/* ================= SIDEBAR ITEM ================= */

function SidebarItem({ href, label, icon: Icon }) {
  return (
    <Link
      href={href}
      className="group flex items-center gap-3 rounded-xl px-3 py-2.5
                 text-sm font-medium text-gray-400
                 hover:bg-white/10 hover:text-white
                 transition-colors"
    >
      <Icon
        size={18}
        className="text-gray-500 group-hover:text-white"
      />
      <span>{label}</span>
    </Link>
  );
}
