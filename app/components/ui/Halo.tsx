"use client";

import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

type HaloProps = {
  children: ReactNode | ReactNode[];
  size?: number;
  strength?: number;
  className?: string;
};

export default function Halo({
  children,
  size = 600,
  strength = 10,
  className,
}: HaloProps) {
  const offset = size / 2;

  return (
    <motion.div
      className={clsx("relative h-full w-full overflow-hidden", className)}
    >
      <motion.div
        style={
          {
            width: size,
            height: size,
            background:
              "radial-gradient(circle at center, #FFFFFF 0%, rgba(188, 255, 219, 0) 60%)",
          } as React.CSSProperties
        }
        className={`pointer-events-none absolute inset-0 z-50 translate-x-${offset} translate-y-${offset} opacity-0 transition-opacity`}
        variants={{
          hover: {
            opacity: strength / 100,
          },
        }}
      />
      {children}
    </motion.div>
  );
}
