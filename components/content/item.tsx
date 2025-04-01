import { FC } from "react";
import Link from "next/link";
import { Source } from "./source";
import { ArchiveX, Globe } from "lucide-react";
import { cn } from "@/lib/utils";

export const Item: FC<{
  name: string;
  sourceCode?: string;
  liveDemo?: string;
  description: string;
  archived?: boolean;
}> = ({ name, sourceCode, liveDemo, description, archived }) => {
  return (
    <div className="flex flex-col border-b pb-4">
      <div className="w-full  cursor-pointer flex items-center justify-between gap-2">
        <Link
          target="_blank"
          href={liveDemo || ""}
          className="hover:underline font-normal flex items-center gap-2"
        >
          <div
            className={cn(
              "flex items-center gap-2 text-base font-semibold",
              archived && "text-muted-foreground line-through"
            )}
          >
            {archived ? (
              <ArchiveX className="size-4" />
            ) : (
              <Globe className="size-4" />
            )}
            {name}
          </div>
        </Link>
        {sourceCode && <Source sourceCode={sourceCode} />}
      </div>

      <p className="text-muted-foreground max-w-lg text-sm mt-2">
        {description}
      </p>
    </div>
  );
};
