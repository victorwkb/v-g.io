import "./globals.css";
import clsx from "clsx";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

import { Providers } from "./components/ThemeProvider";
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
          "antialiased width-full bg-primary text-primary"
        )}
      >
        <main>
          <Providers
            attribute="class"
            defaultTheme="system"
            enableSystem
          >
            <Navigation />
            <div
              className={
                "mx-auto max-w-[700px] px-6 pb-24 pt-16 md:px-6 md:pb-44 md:pt-20"
              }
            >
              {children}
            </div>
          </Providers>
        </main>

        <Analytics />
      </body>
    </html>
  );
}
