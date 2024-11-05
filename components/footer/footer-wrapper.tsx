"use client";

import { FC } from "react";
import { CopyRight } from "./copy-right";
import { ThemeToggleFooter } from "./theme-toggle";

export const FooterWrapper: FC = () => {
  return (
    <div className="flex  items-center justify-between w-full border-t py-1">
      <CopyRight />
      <ThemeToggleFooter />
    </div>
  );
};
