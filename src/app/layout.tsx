import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Naglind",
  description: "High-performance digital solutions",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased bg-[#2F2F2F]">
        {children}
      </body>
    </html>
  );
}