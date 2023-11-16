import "./globals.css";
import clsx from "clsx";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

import { ThemeProvider } from "./components/ThemeProvider";
import Navigation from "./components/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Home | Victor Goh",
  description: "I am an aspiring data scientist/engineer",
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
          "width-full bg-white text-black dark:bg-black dark:text-white",
        )}
      >
        <main>
          <ThemeProvider>
            <Navigation />
            <div
              className={
                "mx-auto max-w-[700px] px-6 pb-24 pt-16 md:px-6 md:pb-44 md:pt-20"
              }
            >
              <div> children div (all pages) </div>
              {children}
            </div>
          </ThemeProvider>
        </main>

        <Analytics />
      </body>
    </html>
  );
}
