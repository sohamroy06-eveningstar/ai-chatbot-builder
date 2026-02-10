import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function ChatMessage({ role, text, typing }) {
  const isUser = role === "user";

  /* ================= USER MESSAGE ================= */
  if (isUser) {
    return (
      <div className="flex justify-end">
        <div
          className="max-w-[85%] sm:max-w-[70%]
                     rounded-2xl rounded-br-md
                     px-4 py-2.5 text-sm leading-relaxed
                     text-white shadow-sm"
          style={{ backgroundColor: "var(--primary)" }}
        >
          {text}
        </div>
      </div>
    );
  }

  /* ================= BOT MESSAGE ================= */
  return (
    <div className="flex gap-3">
      {/* Avatar */}
      <div
        className="flex h-9 w-9 shrink-0 items-center justify-center
                   rounded-full text-xs font-semibold text-white"
        style={{
          background:
            "linear-gradient(135deg, var(--primary), #6366f1)",
        }}
      >
        Z
      </div>

      {/* Bubble */}
      <div
        className="max-w-[85%] sm:max-w-[70%]
                   rounded-2xl rounded-bl-md
                   border px-4 py-3 text-sm leading-relaxed
                   shadow-sm"
        style={{
          backgroundColor: "var(--card)",
          borderColor: "var(--border)",
          color: "var(--text)",
        }}
      >
        <div className="mb-1 text-xs font-medium opacity-70">
          Zics • AI Assistant
        </div>

        {/* Typing indicator */}
        {typing ? (
          <TypingDots />
        ) : (
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              code({ inline, children }) {
                return inline ? (
                  <code
                    className="rounded bg-black/10 px-1 py-0.5 text-xs
                               dark:bg-white/10"
                  >
                    {children}
                  </code>
                ) : (
                  <pre
                    className="mt-3 overflow-x-auto rounded-xl
                               bg-black p-3 text-xs text-white"
                  >
                    <code>{children}</code>
                  </pre>
                );
              },
            }}
          >
            {text}
          </ReactMarkdown>
        )}
      </div>
    </div>
  );
}

/* ================= TYPING INDICATOR ================= */

function TypingDots() {
  return (
    <div className="flex items-center gap-1 py-1">
      <Dot delay="0ms" />
      <Dot delay="150ms" />
      <Dot delay="300ms" />
    </div>
  );
}

function Dot({ delay }) {
  return (
    <span
      className="h-2 w-2 rounded-full opacity-60"
      style={{
        backgroundColor: "var(--text)",
        animation: `blink 1.4s infinite both`,
        animationDelay: delay,
      }}
    />
  );
}
