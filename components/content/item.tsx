import { FC } from "react";
import Link from "next/link";
import { Source } from "./source";

export const Item: FC<{
  name: string;
  sourceCode?: string;
  liveDemo?: string;
  description: string;
}> = ({ name, sourceCode, liveDemo, description }) => {
  return (
    <div className="flex flex-col">
      <Link
        href={liveDemo || ""}
        className="hover:underline font-normal flex items-center gap-2">
        <span className="font-medium text-lg">{name}</span>
      </Link>

      <p className="text-muted-foreground text-sm">{description}</p>

      {sourceCode && <Source sourceCode={sourceCode} />}
    </div>
  );
};
