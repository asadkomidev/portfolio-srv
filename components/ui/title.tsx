import { FC } from "react";
import { cn } from "@/lib/utils";

interface TitleProps {
  title: string;
  emoji?: string;
  className?: string;
}

export const Title: FC<TitleProps> = ({ title, emoji, className }) => {
  return (
    <div
      className={cn(
        "text-base font-medium flex items-center gap-2 dark:text-primary",
        className
      )}
    >
      <span className="">{emoji}</span>
      {title}
    </div>
  );
};
