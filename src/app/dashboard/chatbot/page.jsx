import Navbar from "@/components/ui/Navbar";
import ChatWindow from "@/components/chatbot/ChatWindow";
import Link from "next/link";

export default function ChatbotPage() {
  return (
    <>
      <Navbar />

      <main
        className="mx-auto flex max-w-5xl flex-col gap-4
                   px-4 py-4 md:px-8 md:py-6"
      >
        {/* Header */}
        <header className="flex flex-col gap-1">
          <Link
            href="/dashboard"
            className="inline-flex items-center gap-2
                       text-sm font-medium opacity-70
                       hover:opacity-100"
          >
            ← Back to Dashboard
          </Link>

          <h1 className="text-2xl font-bold md:text-3xl">
            AI Chatbot
          </h1>

          <p className="text-sm opacity-70">
            Chat with <span className="font-medium">Zics</span> about this website
          </p>
        </header>

        {/* Chat Container */}
        <section
          className="flex flex-1 flex-col overflow-hidden
                     rounded-3xl border shadow-sm"
          style={{
            backgroundColor: "var(--card)",
            borderColor: "var(--border)",
          }}
        >
          <ChatWindow />
        </section>
      </main>
    </>
  );
}
