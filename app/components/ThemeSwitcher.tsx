"use client";

import clsx from "clsx";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from "@headlessui/react";
import { motion, AnimatePresence } from "framer-motion";

import { MoonIcon, CheckIcon, SunIcon } from "@heroicons/react/20/solid";

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme, themes } = useTheme();

  useEffect(() => {
    setMounted(true); // eslint-disable-line react-hooks/set-state-in-effect
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Listbox value={theme} onChange={(value) => setTheme(value)}>
      {({ open }: { open: boolean }) => {
        const iconClassName = clsx(
          "w-5 h-5 text-secondary hover:text-primary cursor-pointer transition-colors",
          open ? "text-primary" : "text-secondary",
        );
        return (
          <div className="relative">
            <ListboxButton
              className={clsx(
                "relative flex h-8 w-8 cursor-default items-center justify-center rounded-full focus:outline-none",
              )}
            >
              {resolvedTheme === "dark" ? (
                <MoonIcon className={iconClassName} />
              ) : (
                <SunIcon className={iconClassName} />
              )}
            </ListboxButton>
            <AnimatePresence>
              {open && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ type: "spring", bounce: 0.5, duration: 0.25 }}
                  className="absolute right-0 mt-2 origin-top-right"
                >
                <ListboxOptions
                  static
                  className="max-h-70 w-42 overflow-auto rounded-xl bg-white p-2 text-base capitalize shadow-lg focus:outline-none dark:bg-black sm:text-sm"
                >
                  {themes.map((t) => (
                    <ListboxOption
                      key={t}
                      className={({ focus }: { focus: boolean }) =>
                        clsx(
                          "relative cursor-default select-none rounded-md py-2 pl-10 pr-4",
                          focus ? "bg-tertiary" : "",
                        )
                      }
                      value={t}
                    >
                      {({ selected }: { selected: boolean }) => (
                        <>
                          <span
                            className={`block truncate ${
                              selected ? "font-medium" : "font-normal"
                            }`}
                          >
                            {t === "system" ? "Automatic" : t}
                          </span>
                          {selected ? (
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 dark:text-neutral-50">
                              <CheckIcon
                                className="h-5 w-5"
                                aria-hidden="true"
                              />
                            </span>
                          ) : null}
                        </>
                      )}
                    </ListboxOption>
                  ))}
                </ListboxOptions>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      }}
    </Listbox>
  );
}
