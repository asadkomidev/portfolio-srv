import { FC } from "react";
import Link from "next/link";
import { Source } from "./source";
import { Website } from "./website";
import { cn } from "@/lib/utils";

export const Item: FC<{
  name: string;
  sourceCode?: string;
  liveDemo?: string;
  description: string;
  archived?: boolean;
}> = ({ name, sourceCode, liveDemo, description, archived }) => {
  return (
    <div className="flex flex-col border-b-[0.2px] border-muted-foreground/20 pb-4">
      <div className="w-full  cursor-pointer flex items-center justify-between gap-2">
        <Link
          target="_blank"
          href={liveDemo || ""}
          className="hover:underline flex items-center gap-2"
        >
          <div
            className={cn(
              "flex items-center gap-2 text-sm font-medium dark:text-primary",
              archived &&
                "text-muted-foreground decoration-muted-foreground/50 dark:decoration-primary line-through decoration-2"
            )}
          >
            {/* {archived ? (
              <ArchiveX className="size-4" />
            ) : (
              <LinkIcon className="size-4" />
            )} */}
            {name}
          </div>
        </Link>
        <div className="flex items-center gap-x-2">
          {sourceCode && <Source sourceCode={sourceCode} />}
          {liveDemo && <Website website={liveDemo} />}
        </div>
      </div>

      <p
        className={cn(
          "text-muted-foreground/70 max-w-lg text-sm mt-1",
          archived && "decoration-muted-foreground/50 line-through decoration-1"
        )}
      >
        {description}
      </p>
    </div>
  );
};
