import "./globals.css";
import clsx from "clsx";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

import { Providers } from "./components/ThemeProvider";
import Navigation from "./components/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://v-g-io.vercel.app"),
  title: "Victor Goh",
  description:
    "Melbourne-based data scientist and engineer, sharing insights on data driven solutions.",
  openGraph: {
    title: "Victor Goh",
    url: "https://v-g-io.vercel.app",
    images: [
      { url: "https://v-g-io.vercel.app/gallery/favicon.png", alt: "v-g.io" },
    ],
  },
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
          "width-full bg-primary text-primary antialiased",
        )}
      >
        <main>
          <Providers attribute="class" defaultTheme="system" enableSystem>
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
