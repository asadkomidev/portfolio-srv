"use client";

import { FC } from "react";
import { Socials } from "./socials";
import { ThemeToggleFooter } from "./theme-toggle";

export const FooterWrapper: FC = () => {
  return (
    <footer className="flex px-4 items-center justify-between container mx-auto max-w-screen-sm  border-t-[0.5px]  border-muted-foreground/20 py-2">
      <Socials />
      <ThemeToggleFooter />
    </footer>
  );
};
