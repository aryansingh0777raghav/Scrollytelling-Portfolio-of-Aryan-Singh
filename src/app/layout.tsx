import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aryan Singh | Creative Developer & Filmmaker",
  description: "Portfolio of Aryan Singh - Software Engineer, AI Enthusiast, Filmmaker, and Creative Developer.",
  authors: [{ name: "Aryan Singh" }],
  openGraph: {
    title: "Aryan Singh | Creative Developer",
    description: "Portfolio of Aryan Singh - Software Engineer & Filmmaker.",
    url: "https://aryansingh.com",
    siteName: "Aryan Singh Portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-[#121212] text-white antialiased min-h-screen selection:bg-white/30 selection:text-white`}>
        {children}
      </body>
    </html>
  );
}
