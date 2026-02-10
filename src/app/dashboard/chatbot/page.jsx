import Navbar from "@/components/ui/Navbar";
import ChatWindow from "@/components/chatbot/ChatWindow";

export default function ChatbotPage() {
  return (
    <>
      <Navbar />

      <main className="mx-auto max-w-4xl px-4 py-6 md:px-8">
        <h1 className="mb-4 text-2xl font-bold md:text-3xl">
          AI Chatbot
        </h1>

        <ChatWindow />
      </main>
    </>
  );
}
