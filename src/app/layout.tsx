import type { Metadata } from "next";
import { Bricolage_Grotesque, Geist } from "next/font/google";
import { Toaster } from "sonner";
import { Providers } from "./providers";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const geist = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Intern Review Dashboard",
    template: "%s | Intern Review Dashboard",
  },
  description:
    "Intern Review Dashboard is a platform for reviewing interns and teams based on their weekly performance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <body
        className={`${bricolage.variable} ${geist.variable} antialiased font-sans`}
      >
        <Providers>
          {children}
          <Toaster richColors position="top-right" theme="light" />
        </Providers>
      </body>
    </html>
  );
}
