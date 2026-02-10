"use client";

import { useEffect, useState } from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";

export default function AnalyticsPage() {
  const [stats, setStats] = useState({
    totalMessages: 0,
    avgResponse: "1.2s",
    satisfaction: "92%",
    returningUsers: "38%",
    weeklyConversations: [0, 0, 0, 0, 0, 0, 0],
    intents: {
      pricing: 0,
      features: 0,
      support: 0,
      other: 0,
    },
  });

  useEffect(() => {
    /* ---------- TOTAL MESSAGES ---------- */
    const conversations =
      Number(localStorage.getItem("conversations")) || 0;

    /* ---------- WEEKLY CONVERSATIONS (SIMPLE DISTRIBUTION) ---------- */
    const weekly = Array(7).fill(0);
    for (let i = 0; i < conversations; i++) {
      weekly[i % 7] += 1;
    }

    /* ---------- INTENT ANALYTICS ---------- */
    const intents =
      JSON.parse(localStorage.getItem("intent_stats")) || {
        pricing: 32,
        features: 24,
        support: 18,
        other: 26,
      };

    setStats((prev) => ({
      ...prev,
      totalMessages: conversations,
      weeklyConversations: weekly,
      intents,
    }));

    /* ---------- REALTIME SYNC ---------- */
    const syncAnalytics = () => {
      const conv =
        Number(localStorage.getItem("conversations")) || 0;

      setStats((prev) => ({
        ...prev,
        totalMessages: conv,
      }));
    };

    window.addEventListener("storage", syncAnalytics);
    return () => window.removeEventListener("storage", syncAnalytics);
  }, []);

  return (
    <DashboardLayout>
      {/* Header */}
      <header className="mb-6">
        <h1 className="text-2xl font-bold md:text-3xl">
          Analytics
        </h1>
        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
          Insights into how users interact with your chatbot
        </p>
      </header>

      {/* KPI Cards */}
      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <KpiCard title="Total Messages" value={stats.totalMessages} />
        <KpiCard title="Avg. Response Time" value={stats.avgResponse} />
        <KpiCard title="User Satisfaction" value={stats.satisfaction} />
        <KpiCard title="Returning Users" value={stats.returningUsers} />
      </section>

      {/* Charts */}
      <section className="mt-8 grid gap-6 lg:grid-cols-2">
        <ChartCard title="Conversations (Last 7 Days)">
          <BarChart data={stats.weeklyConversations} />
        </ChartCard>

        <ChartCard title="Top User Intents">
          <IntentList intents={stats.intents} />
        </ChartCard>
      </section>
    </DashboardLayout>
  );
}

/* ---------------- UI COMPONENTS ---------------- */

function KpiCard({ title, value }) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900">
      <p className="text-sm text-gray-500 dark:text-gray-400">{title}</p>
      <p className="mt-2 text-3xl font-bold">{value}</p>
    </div>
  );
}

function ChartCard({ title, children }) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900">
      <h3 className="mb-4 text-sm font-semibold text-gray-700 dark:text-gray-300">
        {title}
      </h3>
      {children}
    </div>
  );
}

/* ---------------- BAR CHART ---------------- */

function BarChart({ data }) {
  return (
    <div className="flex h-40 items-end gap-2">
      {data.map((value, i) => (
        <div
          key={i}
          className="flex-1 rounded-lg bg-primary/80"
          style={{ height: `${Math.min(value * 8, 100)}%` }}
        />
      ))}
    </div>
  );
}

/* ---------------- INTENT LIST ---------------- */

function IntentList({ intents }) {
  return (
    <ul className="space-y-3">
      {Object.entries(intents).map(([key, value]) => (
        <li key={key} className="flex items-center justify-between">
          <span className="text-sm capitalize text-gray-600 dark:text-gray-400">
            {key}
          </span>
          <span className="text-sm font-medium">{value}%</span>
        </li>
      ))}
    </ul>
  );
}
