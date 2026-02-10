"use client";

import { useEffect, useState } from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import Link from "next/link";

export default function SettingsPage() {
  const [open, setOpen] = useState(false);

  // ✅ STABLE responsive logic
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setOpen(true);   // mobile / tablet → modal
      } else {
        setOpen(false);  // desktop → normal page
      }
    };

    handleResize(); // run on mount
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <DashboardLayout>
      {/* ================= DESKTOP HEADER (UNCHANGED) ================= */}
      <header className="mb-6 hidden md:block">
        <h1 className="text-xl font-bold sm:text-2xl md:text-3xl">
          Settings
        </h1>
        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
          Manage your account and chatbot preferences
        </p>
      </header>

      {/* ================= DESKTOP VIEW (UNCHANGED) ================= */}
      <div className="hidden md:flex gap-6">
        <SettingsNav />
        <SettingsPlaceholder />
      </div>

      {/* ================= MOBILE / TABLET MODAL (AUTO OPEN) ================= */}
      {open && (
        <SettingsModal onClose={() => setOpen(false)}>
          <SettingsNav mobile />
        </SettingsModal>
      )}
    </DashboardLayout>
  );
}

/* ================= MODAL ================= */

function SettingsModal({ children, onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 md:hidden">
      <div className="relative w-full max-w-sm rounded-3xl bg-white dark:bg-gray-900 shadow-2xl">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-gray-200 px-5 py-4 dark:border-gray-800">
          <h2 className="text-base font-semibold">
            Settings
          </h2>
          <button
            onClick={onClose}
            className="rounded-full p-2 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            ✕
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-4 space-y-3">
          {children}
        </div>
      </div>
    </div>
  );
}

/* ================= NAV ================= */

function SettingsNav({ mobile }) {
  return (
    <aside className={mobile ? "w-full" : "w-64 shrink-0"}>
      <div
        className={`bg-white dark:bg-gray-900 ${
          mobile
            ? "space-y-2"
            : "space-y-1 p-4 rounded-2xl border border-gray-200 dark:border-gray-800"
        }`}
      >
        <NavLink href="/dashboard/settings/account" label="Account" />
        <NavLink href="/dashboard/settings/chatbot" label="Chatbot" />
        <NavLink href="/dashboard/settings/security" label="Security" />
      </div>
    </aside>
  );
}

function NavLink({ href, label }) {
  return (
    <Link
      href={href}
      className="group flex items-center justify-between rounded-xl px-4 py-3
                 text-sm font-medium text-gray-700 dark:text-gray-300
                 hover:bg-primary hover:text-white transition"
    >
      <span>{label}</span>
      <span className="opacity-0 group-hover:opacity-100 transition">
        →
      </span>
    </Link>
  );
}

/* ================= DESKTOP PLACEHOLDER ================= */

function SettingsPlaceholder() {
  return (
    <div className="flex-1 rounded-2xl border border-dashed border-gray-300
                    bg-white p-6 text-sm text-gray-500
                    dark:border-gray-700 dark:bg-gray-900 dark:text-gray-400">
      Select a settings category from the left.
    </div>
  );
}
