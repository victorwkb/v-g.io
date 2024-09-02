"use client";

import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import ThemeSwitcher from "./ThemeSwitcher";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import NavLink from "./NavLink";
import { Popover, Transition } from "@headlessui/react";
import { RocketLaunchIcon, ChevronDownIcon } from "@heroicons/react/20/solid";
import { Fragment } from "react";

const navItems = [
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Projects", href: "/projects" },
];

export default function Navigation() {
  const pathname = `/${usePathname().split("/")[1]}`;
  const { theme } = useTheme();

  return (
    <header className={clsx("relative top-0 z-20 bg-primary md:sticky")}>
      <nav className="lg mx-auto flex max-w-[700px] items-center justify-between gap-3 px-4 py-3 md:px-6">
        <Link href="/" className="shrink-0 text-primary">
          {theme === "dark" ? (
            <Image
              alt="favicon"
              src="/gallery/favicon.png"
              height={36}
              width={36}
            />
          ) : (
            <Image
              alt="favicon"
              src="/gallery/favicon-inversed.png"
              height={36}
              width={36}
            />
          )}
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {navItems.map((navItems) => (
            <li key={navItems.href}>
              <NavLink href={navItems.href}>{navItems.label}</NavLink>
            </li>
          ))}
        </ul>

        <Popover className="relative ml-auto md:hidden">
          {({ open }) => (
            <>
              <Popover.Button className="flex items-center gap-1 rounded-lg p-1 text-secondary focus:ring-0 focus-visible:outline-none">
                <ChevronDownIcon
                  className={clsx(
                    "h-5 w-5",
                    open ? "rotate-180 transform" : "",
                  )}
                />
              </Popover.Button>

              <Transition
                enter="transition ease-out duration-250"
                enterFrom="opacity-0 translate-y--1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-250"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y--1"
              >
                <Popover.Panel className="absolute right-0 z-10 mt-2 w-40 origin-top-right overflow-auto rounded-xl bg-white p-2 text-base shadow-lg focus:outline-none dark:bg-black sm:text-sm">
                  <div className="grid">
                    {navItems.map((navItems) => (
                      <Link
                        key={navItems.href}
                        href={navItems.href}
                        className={clsx(
                          "rounded-lg px-4 py-2 text-sm transition-colors hover:text-primary",
                          pathname === navItems.href
                            ? "bg-tertiary text-primary"
                            : "text-secondary",
                        )}
                      >
                        {navItems.label}
                      </Link>
                    ))}
                  </div>
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>

        <div className="flex h-8 w-8 items-center justify-center">
          <ThemeSwitcher />
        </div>
      </nav>
    </header>
  );
}
