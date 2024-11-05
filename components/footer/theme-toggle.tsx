import { FC } from "react";
import ThemeToggle from "@/components/shared/theme-toggle";

export const ThemeToggleFooter: FC = () => {
  return (
    <div className="w-full text-right">
      <ThemeToggle />
    </div>
  );
};
