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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
