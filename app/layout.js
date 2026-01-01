import "../styles/globals.css";

export const metadata = {
  title: "Gary Varner",
  icons: {
    icon: "https://fav.farm/%F0%9F%98%83",
  },
  openGraph: {
    images: ["https://og-examples.vercel.sh/api/static"],
    title: "Gary Varner Site",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(() => {
  try {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const storedTheme = localStorage.theme;
    const isDark = storedTheme === "dark" || (!("theme" in localStorage) && prefersDark);
    document.documentElement.classList.toggle("dark", isDark);
  } catch (error) {
    // If access to localStorage is blocked, fall back to system preference.
  }
})();`,
          }}
        />
      </head>
      <body className="dark:bg-black">{children}</body>
    </html>
  );
}
