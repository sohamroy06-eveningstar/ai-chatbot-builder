import "./globals.css";

export const metadata = {
  title: "AI Chatbot Builder",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Prevents flash + fixes hydration */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
(function () {
  const theme = localStorage.getItem("theme");
  if (theme === "dark") {
    document.documentElement.classList.add("dark");
  }
})();
            `,
          }}
        />
      </head>
      <body className="bg-gray-100 dark:bg-gray-950 text-gray-900 dark:text-gray-100">
        {children}
      </body>
    </html>
  );
}
