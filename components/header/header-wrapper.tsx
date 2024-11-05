"use client";

import { FC } from "react";
import { Logo } from "./logo";
import { Details } from "./details";

export const HeaderWrapper: FC = () => {
  return (
    <div className="w-full border-b flex items-start justify-between py-6">
      <Logo />
      <Details />
    </div>
  );
};
