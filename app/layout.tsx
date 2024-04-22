import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import clsx from "clsx";

import { ThemeProvider } from "@/components/ThemeProvider";
import Navigation from "@/components/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Eren Turkoglu",
  description:
    "Nancy-based Design Engineer and a Writer, sharing insights on well-designed products and technology advancements.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={clsx(
          inter.className,
          "width-full bg-white text-primary antialiased dark:bg-black",
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navigation />
          <div
            className={
              "mx-auto max-w-[700px] px-6 pb-24 pt-16 md:px-6 md:pb-44 md:pt-20"
            }
          >
            {children}
          </div>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
