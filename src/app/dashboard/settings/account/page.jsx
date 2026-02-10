"use client";

import { useRouter } from "next/navigation";

export default function AccountSettingsPage() {
  const router = useRouter();

  return (
    <div className="w-full md:flex md:justify-center">
      <section className="relative w-full max-w-3xl">
        
        {/* ❌ Close button (mobile / tablet only) */}
        <button
          onClick={() => router.back()}
          className="absolute right-0 top-0 rounded-full p-2 text-gray-500
                     hover:bg-gray-100 dark:hover:bg-gray-800
                     md:hidden"
          aria-label="Close"
        >
          ✕
        </button>

        {/* Header */}
        <header className="mb-6">
          <h2 className="text-lg font-semibold md:text-xl">
            Account Settings
          </h2>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            Manage your personal information and account preferences
          </p>
        </header>

        {/* Profile Card */}
        <div className="space-y-6 rounded-2xl border border-gray-200
                        bg-white p-5
                        dark:border-gray-800 dark:bg-gray-900">

          {/* Avatar */}
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-full
                            bg-gradient-to-br from-blue-500 to-indigo-600
                            text-lg font-bold text-white">
              UR
            </div>

            <div>
              <p className="text-sm font-medium">User</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                user@example.com
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gray-200 dark:bg-gray-800" />

          {/* Form */}
          <div className="grid gap-4 sm:grid-cols-2">
            <Input label="Full Name" placeholder="User" />
            <Input label="Email Address" placeholder="user@example.com" />
          </div>

          {/* Actions */}
          <div className="flex justify-end">
            <button className="rounded-xl bg-primary px-6 py-2.5
                               text-sm font-medium text-white">
              Save Changes
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ================= UI COMPONENTS ================= */

function Input({ label, placeholder }) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm text-gray-600 dark:text-gray-400">
        {label}
      </label>
      <input
        placeholder={placeholder}
        className="rounded-xl border border-gray-300
                   bg-white px-3 py-2.5 text-sm
                   focus:outline-none focus:ring-2 focus:ring-primary
                   dark:border-gray-700 dark:bg-gray-800"
      />
    </div>
  );
}
