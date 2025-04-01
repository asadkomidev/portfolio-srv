import { cn } from "@/lib/utils";
import { FC, ReactNode } from "react";

export const Main: FC<{ children: ReactNode; className?: string }> = ({
  children,
  className,
}) => {
  return (
    <main className={cn("container mx-auto max-w-screen-sm  p-4", className)}>
      {children}
    </main>
  );
};

export const Container: FC<{ children: ReactNode; className?: string }> = ({
  children,
  className,
}) => {
  return <div className={cn("", className)}>{children}</div>;
};

export const Header: FC<{ children: ReactNode; className?: string }> = ({
  children,
  className,
}) => {
  return <header className={cn("", className)}>{children}</header>;
};

export const Section: FC<{ children: ReactNode; className?: string }> = ({
  children,
  className,
}) => {
  return <section className={cn("", className)}>{children}</section>;
};
