"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SecuritySettingsPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState(false);
  const [saved, setSaved] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    if (form.newPassword !== form.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    setLoading(true);
    setSaved(false);

    // 🔹 simulate API call
    await new Promise((res) => setTimeout(res, 900));

    console.log("Security settings saved:", form);

    setLoading(false);
    setSaved(true);

    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="w-full md:flex md:justify-center">
      <section className="relative w-full max-w-3xl">

        {/* ❌ Close button (mobile / tablet only) */}
        <button
          onClick={() => router.back()}
          className="absolute right-0 top-0 rounded-full p-2 text-gray-500
                     hover:bg-gray-100 dark:hover:bg-gray-800 md:hidden"
          aria-label="Close"
        >
          ✕
        </button>

        {/* Header */}
        <header className="mb-6">
          <h2 className="text-lg font-semibold md:text-xl">
            Security Settings
          </h2>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            Update your password and secure your account
          </p>
        </header>

        {/* Card */}
        <div className="space-y-6 rounded-2xl border border-gray-200
                        bg-white p-5
                        dark:border-gray-800 dark:bg-gray-900">

          <Input
            label="Current Password"
            name="currentPassword"
            type="password"
            value={form.currentPassword}
            onChange={handleChange}
          />

          <Input
            label="New Password"
            name="newPassword"
            type="password"
            value={form.newPassword}
            onChange={handleChange}
          />

          <Input
            label="Confirm New Password"
            name="confirmPassword"
            type="password"
            value={form.confirmPassword}
            onChange={handleChange}
          />

          {/* Footer */}
          <div className="flex items-center justify-between pt-2">
            {saved && (
              <span className="text-sm text-green-500">
                ✓ Password updated
              </span>
            )}

            <button
              onClick={handleSave}
              disabled={loading}
              className="rounded-xl bg-primary px-6 py-2.5
                         text-sm font-medium text-white
                         disabled:opacity-60"
            >
              {loading ? "Updating..." : "Update Password"}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ================= INPUT ================= */

function Input({ label, name, type = "text", value, onChange }) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm text-gray-600 dark:text-gray-400">
        {label}
      </label>
      <input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        className="rounded-xl border border-gray-300
                   bg-white px-3 py-2.5 text-sm
                   focus:outline-none focus:ring-2 focus:ring-primary
                   dark:border-gray-700 dark:bg-gray-800"
      />
    </div>
  );
}
