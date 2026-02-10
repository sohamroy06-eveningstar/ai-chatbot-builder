"use client";

import { useEffect, useState } from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";

export default function DashboardPage() {
  const [stats, setStats] = useState({
    chatbots: 1,
    conversations: 0,
    activeUsers: 1,
  });

  useEffect(() => {
    /* ---------------- ACTIVE USERS (TAB BASED) ---------------- */

    const TAB_ID = Date.now().toString();
    const ACTIVE_KEY = "active_users";

    const activeUsers =
      JSON.parse(localStorage.getItem(ACTIVE_KEY)) || [];

    localStorage.setItem(
      ACTIVE_KEY,
      JSON.stringify([...activeUsers, TAB_ID])
    );

    const updateActiveUsers = () => {
      const users =
        JSON.parse(localStorage.getItem(ACTIVE_KEY)) || [];
      setStats((prev) => ({
        ...prev,
        activeUsers: users.length,
      }));
    };

    updateActiveUsers();

    const handleUnload = () => {
      const users =
        JSON.parse(localStorage.getItem(ACTIVE_KEY)) || [];
      localStorage.setItem(
        ACTIVE_KEY,
        JSON.stringify(users.filter((id) => id !== TAB_ID))
      );
    };

    window.addEventListener("beforeunload", handleUnload);
    window.addEventListener("storage", updateActiveUsers);

    /* ---------------- CONVERSATIONS ---------------- */

    const conversations =
      Number(localStorage.getItem("conversations")) || 0;

    setStats((prev) => ({
      ...prev,
      conversations,
    }));

    return () => {
      handleUnload();
      window.removeEventListener("beforeunload", handleUnload);
      window.removeEventListener("storage", updateActiveUsers);
    };
  }, []);

  return (
    <DashboardLayout>
      {/* Page Header */}
      <header className="mb-6">
        <h1 className="text-2xl font-bold md:text-3xl">
          Dashboard
        </h1>
        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
          Overview of your chatbot performance
        </p>
      </header>

      {/* Stats Grid (UNCHANGED UI) */}
      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <StatCard
          title="Total Chatbots"
          value={stats.chatbots}
          subtitle="Active & inactive"
        />
        <StatCard
          title="Conversations"
          value={stats.conversations}
          subtitle="User messages"
        />
        <StatCard
          title="Active Users"
          value={stats.activeUsers}
          subtitle="Currently online"
        />
      </section>
    </DashboardLayout>
  );
}

/* ---------- Reusable Stat Card ---------- */

function StatCard({ title, value, subtitle }) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 transition
                    hover:shadow-md dark:border-gray-800 dark:bg-gray-900">
      <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400">
        {title}
      </h3>

      <div className="mt-2 text-3xl font-bold">
        {value}
      </div>

      <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
        {subtitle}
      </p>
    </div>
  );
}
