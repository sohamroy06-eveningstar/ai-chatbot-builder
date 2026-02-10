"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function ChatbotSettingsPage() {
  const router = useRouter();

  const [settings, setSettings] = useState({
    enabled: true,
    followUp: true,
    websiteOnly: false,
    typingIndicator: true,
  });

  const [loading, setLoading] = useState(false);
  const [saved, setSaved] = useState(false);

  const handleToggle = (key) => {
    setSettings((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleSave = async () => {
    setLoading(true);
    setSaved(false);

    // 🔹 Simulate API call
    await new Promise((res) => setTimeout(res, 800));

    console.log("Saved chatbot settings:", settings);

    setLoading(false);
    setSaved(true);

    // Auto-hide success
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="w-full md:flex md:justify-center">
      <section className="relative w-full max-w-3xl">

        {/* ❌ Close (mobile only) */}
        <button
          onClick={() => router.back()}
          className="absolute right-0 top-0 rounded-full p-2 text-gray-500
                     hover:bg-gray-100 dark:hover:bg-gray-800 md:hidden"
        >
          ✕
        </button>

        {/* Header */}
        <header className="mb-6">
          <h2 className="text-lg font-semibold md:text-xl">
            Chatbot Settings
          </h2>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            Control how your chatbot behaves on your website
          </p>
        </header>

        {/* Card */}
        <div className="space-y-6 rounded-2xl border border-gray-200
                        bg-white p-5 dark:border-gray-800 dark:bg-gray-900">

          <Toggle
            title="Enable chatbot"
            description="Turn the chatbot on or off for your website"
            checked={settings.enabled}
            onChange={() => handleToggle("enabled")}
          />

          <Toggle
            title="Allow follow-up questions"
            description="Let users ask multiple related questions"
            checked={settings.followUp}
            onChange={() => handleToggle("followUp")}
          />

          <Toggle
            title="Use website content only"
            description="Restrict answers strictly to your site data"
            checked={settings.websiteOnly}
            onChange={() => handleToggle("websiteOnly")}
          />

          <Toggle
            title="Show typing indicator"
            description="Display typing animation while bot is responding"
            checked={settings.typingIndicator}
            onChange={() => handleToggle("typingIndicator")}
          />

          {/* Footer */}
          <div className="flex items-center justify-between pt-2">
            {saved && (
              <span className="text-sm text-green-500">
                ✓ Settings saved
              </span>
            )}

            <button
              onClick={handleSave}
              disabled={loading}
              className="rounded-xl bg-primary px-6 py-2.5
                         text-sm font-medium text-white
                         disabled:opacity-60"
            >
              {loading ? "Saving..." : "Save Settings"}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ================= TOGGLE ================= */

function Toggle({ title, description, checked, onChange }) {
  return (
    <div className="flex items-start justify-between gap-4">
      <div>
        <p className="text-sm font-medium">
          {title}
        </p>
        <p className="mt-0.5 text-xs text-gray-500 dark:text-gray-400">
          {description}
        </p>
      </div>

      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="mt-1 h-5 w-5 accent-primary cursor-pointer"
      />
    </div>
  );
}
