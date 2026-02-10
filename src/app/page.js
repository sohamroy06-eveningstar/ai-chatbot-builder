import Navbar from "@/components/ui/Navbar";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main className="relative overflow-hidden">
        {/* ---------- BACKGROUND 2D SHAPES ---------- */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute top-1/3 -right-24 h-96 w-96 rounded-full bg-indigo-500/20 blur-3xl" />
        </div>

        {/* ---------- HERO SECTION ---------- */}
        <section className="relative mx-auto flex min-h-[calc(100vh-80px)]
                            max-w-7xl flex-col items-center justify-center
                            px-6 text-center">

          {/* Badge */}
          <span className="mb-4 inline-flex items-center rounded-full
                           border border-gray-200 bg-white/70
                           px-4 py-1 text-xs font-medium
                           backdrop-blur
                           dark:border-gray-800 dark:bg-gray-900/70">
            🚀 No-Code AI Platform
          </span>

          {/* Title */}
          <h1 className="max-w-3xl text-4xl font-bold tracking-tight
                         sm:text-5xl md:text-6xl">
            Build AI Chatbots
            <span className="block bg-gradient-to-r from-primary to-indigo-500
                             bg-clip-text text-transparent">
              for Your Website
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-6 max-w-xl text-base text-gray-600
                        sm:text-lg dark:text-gray-400">
            Create, customize, and deploy AI-powered chatbots without writing
            code. Manage conversations, analytics, and users from one dashboard.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/dashboard"
              className="rounded-xl bg-primary px-8 py-3
                         text-sm font-medium text-white
                         shadow-lg shadow-primary/30
                         transition hover:opacity-90"
            >
              Go to Dashboard
            </Link>

            <Link
              href="/dashboard/chatbot"
              className="rounded-xl border border-gray-300
                         px-8 py-3 text-sm font-medium
                         transition hover:bg-gray-100
                         dark:border-gray-700 dark:hover:bg-gray-800"
            >
              View Chatbot
            </Link>
          </div>

          {/* ---------- FEATURE STRIP ---------- */}
          <div className="mt-16 grid w-full max-w-4xl gap-6
                          sm:grid-cols-2 md:grid-cols-3">

            <Feature
              title="No-Code Builder"
              desc="Create chatbots visually without complex setup."
            />
            <Feature
              title="Real-Time Analytics"
              desc="Track conversations, users, and engagement live."
            />
            <Feature
              title="Secure & Scalable"
              desc="Modern authentication with full account control."
            />
          </div>
        </section>
      </main>
    </>
  );
}

/* ---------- FEATURE CARD ---------- */

function Feature({ title, desc }) {
  return (
    <div className="rounded-2xl border border-gray-200
                    bg-white/70 p-5 text-left
                    backdrop-blur
                    dark:border-gray-800 dark:bg-gray-900/70">
      <h3 className="text-sm font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
        {desc}
      </p>
    </div>
  );
}
