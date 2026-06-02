"use client";

import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import ThemeSwitcher from "./ThemeSwitcher";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import NavLink from "./NavLink";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const navItems = [
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Projects", href: "/projects" },
];

export default function Navigation() {
  const pathname = `/${usePathname().split("/")[1]}`;
  const { resolvedTheme } = useTheme();

  return (
    <header className={clsx("relative top-0 z-20 bg-primary md:sticky")}>
      <nav className="lg mx-auto flex max-w-[700px] items-center justify-between gap-3 px-4 py-3 md:px-6">
        <Link href="/" className="shrink-0 text-primary">
          {resolvedTheme === "dark" ? (
            <Image
              alt="favicon"
              src="/gallery/favicon-inversed.png"
              height={36}
              width={36}
            />
          ) : (
            <Image
              alt="favicon"
              src="/gallery/favicon.png"
              height={36}
              width={36}
            />
          )}
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <NavLink href={item.href}>{item.label}</NavLink>
            </li>
          ))}
        </ul>

        <Popover className="relative ml-auto md:hidden">
          <PopoverButton className="flex items-center gap-1 rounded-lg p-1 text-secondary focus:ring-0 focus-visible:outline-none">
            {({ open }: { open: boolean }) => (
              <ChevronDownIcon
                className={clsx(
                  "h-5 w-5",
                  open ? "rotate-180 transform" : "",
                )}
              />
            )}
          </PopoverButton>

          <PopoverPanel
            transition
            className={clsx(
              "absolute right-0 z-10 mt-2 w-40 origin-top-right overflow-auto rounded-xl bg-white p-2 text-base shadow-lg focus:outline-none dark:bg-black sm:text-sm",
              "transition data-[closed]:opacity-0 data-[closed]:-translate-y-1 data-[enter]:duration-200 data-[leave]:duration-150",
            )}
          >
            <div className="grid">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={clsx(
                    "rounded-lg px-4 py-2 text-sm transition-colors hover:text-primary",
                    pathname === item.href
                      ? "bg-tertiary text-primary"
                      : "text-secondary",
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </PopoverPanel>
        </Popover>

        <div className="flex h-8 w-8 items-center justify-center">
          <ThemeSwitcher />
        </div>
      </nav>
    </header>
  );
}
