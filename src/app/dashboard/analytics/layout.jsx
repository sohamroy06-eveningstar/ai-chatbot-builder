import DashboardLayout from "@/components/layout/DashboardLayout";

export const metadata = {
  title: "Analytics | AI Chatbot Builder",
  description:
    "Track chatbot usage, conversations, and user engagement analytics.",
};

export default function AnalyticsPage() {
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
        <KpiCard title="Total Messages" value="1,248" />
        <KpiCard title="Avg. Response Time" value="1.2s" />
        <KpiCard title="User Satisfaction" value="92%" />
        <KpiCard title="Returning Users" value="38%" />
      </section>

      {/* Charts */}
      <section className="mt-8 grid gap-6 lg:grid-cols-2">
        <ChartCard title="Conversations (Last 7 Days)">
          <BarChart />
        </ChartCard>

        <ChartCard title="Top User Intents">
          <IntentList />
        </ChartCard>
      </section>
    </DashboardLayout>
  );
}

/* ---------------- Components ---------------- */

function KpiCard({ title, value }) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5
                    dark:border-gray-800 dark:bg-gray-900">
      <p className="text-sm text-gray-500 dark:text-gray-400">
        {title}
      </p>
      <p className="mt-2 text-3xl font-bold">
        {value}
      </p>
    </div>
  );
}

function ChartCard({ title, children }) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5
                    dark:border-gray-800 dark:bg-gray-900">
      <h3 className="mb-4 text-sm font-semibold text-gray-700 dark:text-gray-300">
        {title}
      </h3>
      {children}
    </div>
  );
}

/* ---------------- Simple Bar Chart ---------------- */

function BarChart() {
  const data = [40, 65, 30, 80, 55, 70, 45];

  return (
    <div className="flex h-40 items-end gap-2">
      {data.map((value, i) => (
        <div
          key={i}
          className="flex-1 rounded-lg bg-primary/80"
          style={{ height: `${value}%` }}
        />
      ))}
    </div>
  );
}

/* ---------------- Intent List ---------------- */

function IntentList() {
  const intents = [
    { label: "Pricing", value: "32%" },
    { label: "Features", value: "24%" },
    { label: "Support", value: "18%" },
    { label: "Other", value: "26%" },
  ];

  return (
    <ul className="space-y-3">
      {intents.map((item) => (
        <li key={item.label} className="flex items-center justify-between">
          <span className="text-sm text-gray-600 dark:text-gray-400">
            {item.label}
          </span>
          <span className="text-sm font-medium">
            {item.value}
          </span>
        </li>
      ))}
    </ul>
  );
}
