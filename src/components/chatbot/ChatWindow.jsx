"use client";

import { useEffect, useRef, useState } from "react";
import ChatInput from "./ChatInput";
import ChatMessage from "./ChatMessage";

/* ================= WEBSITE KNOWLEDGE BASE ================= */

const WEBSITE_CONTEXT = {
  name: "AI Chatbot Builder",
  bot: "Zics",
  description:
    "AI Chatbot Builder is a modern SaaS platform that allows users to create, manage, and deploy AI-powered chatbots for their websites using a clean dashboard, analytics, and customizable settings.",

  features: {
    chatbot: [
      "Create and manage multiple chatbots",
      "Enable or disable chatbot on the website",
      "Allow follow-up questions",
      "Restrict answers to website content only",
      "Show typing indicator for better user experience",
    ],
    dashboard: [
      "View total chatbots",
      "Track conversations",
      "Monitor active users",
    ],
    analytics: [
      "Analyze chatbot conversations",
      "Track user engagement",
      "Understand chatbot usage trends",
    ],
    account: [
      "Update name and email",
      "Manage account preferences",
    ],
    security: [
      "Change account password",
      "Protect user data",
      "Secure chatbot access",
    ],
  },
};

/* ================= SIMPLE INTENT MATCHER ================= */

function getBotAnswer(question) {
  const q = question.toLowerCase();

  if (q.includes("what is") || q.includes("about")) {
    return WEBSITE_CONTEXT.description;
  }

  if (q.includes("chatbot") || q.includes("bot")) {
    return (
      "You can manage chatbots in AI Chatbot Builder. Key features include:\n• " +
      WEBSITE_CONTEXT.features.chatbot.join("\n• ")
    );
  }

  if (q.includes("dashboard")) {
    return (
      "The dashboard gives you an overview of your activity:\n• " +
      WEBSITE_CONTEXT.features.dashboard.join("\n• ")
    );
  }

  if (q.includes("analytics")) {
    return (
      "Analytics helps you understand chatbot usage:\n• " +
      WEBSITE_CONTEXT.features.analytics.join("\n• ")
    );
  }

  if (q.includes("account") || q.includes("profile")) {
    return (
      "Account settings allow you to:\n• " +
      WEBSITE_CONTEXT.features.account.join("\n• ")
    );
  }

  if (q.includes("security") || q.includes("password")) {
    return (
      "Security settings help you:\n• " +
      WEBSITE_CONTEXT.features.security.join("\n• ")
    );
  }

  if (q.includes("dark") || q.includes("theme")) {
    return "The platform supports both dark mode and light mode for a better user experience.";
  }

  // Fallback
  return (
    "I can help you with questions about AI Chatbot Builder, such as chatbot features, dashboard, analytics, account, or security settings."
  );
}

/* ================= CHAT WINDOW ================= */

export default function ChatWindow() {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      text: "Hi 👋 I’m Zics. Ask me anything about this website.",
    },
  ]);

  const bottomRef = useRef(null);

  const handleSend = (text) => {
    if (!text.trim()) return;

    setMessages((prev) => [...prev, { role: "user", text }]);

    // Simulate thinking delay
    setTimeout(() => {
      const answer = getBotAnswer(text);

      setMessages((prev) => [
        ...prev,
        { role: "assistant", text: answer },
      ]);
    }, 700);
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <section className="flex h-[calc(100vh-120px)] flex-col">
      <div className="flex-1 overflow-y-auto px-4 py-8">
        <div className="mx-auto max-w-4xl space-y-6">
          {messages.map((msg, i) => (
            <ChatMessage key={i} role={msg.role} text={msg.text} />
          ))}
          <div ref={bottomRef} />
        </div>
      </div>

      <ChatInput onSend={handleSend} />
    </section>
  );
}
