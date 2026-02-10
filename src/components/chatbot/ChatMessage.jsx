export default function ChatMessage({ role, text }) {
  const isUser = role === "user";

  if (isUser) {
    return (
      <div className="flex justify-end">
        <div className="max-w-[70%] rounded-full bg-primary px-5 py-2 text-white text-sm">
          {text}
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5 dark:border-gray-800 dark:bg-gray-900">
      <div className="mb-1 text-xs font-semibold text-primary">
        Zics • AI Assistant
      </div>
      <p className="text-sm leading-relaxed text-gray-800 dark:text-gray-200">
        {text}
      </p>
    </div>
  );
}
