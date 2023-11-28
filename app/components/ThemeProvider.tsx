"use client";

import { ThemeProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";

export function Providers({ children, ...props }: ThemeProviderProps) {
  return (
    <ThemeProvider
      themes={["light", "dark"]}
      {...props}
    >
      {children}
    </ThemeProvider>
  );
}
