"use client";

import clsx from "clsx";
import Link from "next/link";
import ThemeSwitcher from "./ThemeSwitcher"; 
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";

const navItems = {
  "/": { name: "home" },
  "/about": { name: "about" },
  "/blog": { name: "blog" },
  "/projects": { name: "projects" },
};

export default function Navigation() {
  const pathname = `/${usePathname().split("/")[1]}`;
  const { theme } = useTheme();

  return (
    <header className={clsx("relative md:sticky top-0 z-20 bg-primary")}>
      <nav className="lg mx-auto flex max-w-[700px] items-center justify-between gap-3 px-4 py-3 md:px-6">
        <div>icon</div>
        <ul className="hidden items-center gap-1 md:flex">
          <div>item</div>
          <div>item</div>
          <div>item</div>
          <div>item</div>
        </ul>
        <ThemeSwitcher />
      </nav>
    </header>
  );
}
