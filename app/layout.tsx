import type { Metadata } from "next";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: "Hello World App",
  description: "A simple Next.js app displaying Hello World",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-black">{children}</body>
    </html>
  );
}
