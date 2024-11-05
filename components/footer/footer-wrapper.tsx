"use client";

import { FC } from "react";
import { Socials } from "./socials";
import { ThemeToggleFooter } from "./theme-toggle";

export const FooterWrapper: FC = () => {
  return (
    <div className="flex  items-center justify-between w-full border-t py-1">
      <Socials />
      <ThemeToggleFooter />
    </div>
  );
};
