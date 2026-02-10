"use client";

import { useState } from "react";

export default function ChatInput({ onSend }) {
  const [value, setValue] = useState("");

  const submit = () => {
    if (!value.trim()) return;
    onSend(value);
    setValue("");
  };

  return (
    <div
      className="border-t px-4 py-4"
      style={{ borderColor: "var(--border)", backgroundColor: "var(--bg)" }}
    >
      <div
        className="mx-auto flex max-w-4xl items-end gap-3
                   rounded-2xl border px-3 py-2 shadow-sm"
        style={{
          backgroundColor: "var(--card)",
          borderColor: "var(--border)",
        }}
      >
        {/* Text Input */}
        <textarea
          rows={1}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              submit();
            }
          }}
          placeholder="Ask Zics about this website…"
          className="flex-1 resize-none bg-transparent
                     px-2 py-2 text-sm leading-relaxed
                     outline-none"
          style={{ color: "var(--text)" }}
        />

        {/* Send Button */}
        <button
          onClick={submit}
          className="flex h-9 w-9 items-center justify-center
                     rounded-xl text-white transition
                     hover:opacity-90 active:scale-95"
          style={{ backgroundColor: "var(--primary)" }}
          aria-label="Send message"
        >
          ➤
        </button>
      </div>

      {/* Hint */}
      <p className="mx-auto mt-2 max-w-4xl text-xs opacity-60">
        Press <kbd className="rounded border px-1">Enter</kbd> to send ·{" "}
        <kbd className="rounded border px-1">Shift</kbd> +{" "}
        <kbd className="rounded border px-1">Enter</kbd> for new line
      </p>
    </div>
  );
}
