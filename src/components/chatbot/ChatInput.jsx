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
    <div className="border-t border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-950 px-4 py-4">
      <div className="mx-auto flex max-w-4xl items-center gap-3 rounded-2xl border border-gray-300 bg-white px-4 py-3 dark:border-gray-700 dark:bg-gray-900">
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && submit()}
          placeholder="Ask Zics about this website..."
          className="flex-1 bg-transparent text-sm outline-none"
        />
        <button
          onClick={submit}
          className="rounded-xl bg-primary px-4 py-2 text-sm text-white"
        >
          Send
        </button>
      </div>
    </div>
  );
}
