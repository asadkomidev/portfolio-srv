import { FC } from "react";
import Link from "next/link";
import { Source } from "./source";
import { Website } from "./website";
import { cn } from "@/lib/utils";
import { Doc } from "@/convex/_generated/dataModel";

interface ItemProps {
  project: Doc<"projects">;
}

export const Item: FC<ItemProps> = ({ project }) => {
  return (
    <div className="flex flex-col border-b-[0.2px] border-muted-foreground/20 pb-4">
      <div className="w-full  cursor-pointer flex items-center justify-between gap-2">
        <Link
          target="_blank"
          href={project.liveDemo || ""}
          className="hover:underline flex items-center gap-2"
        >
          <div
            className={cn(
              "flex items-center gap-2 text-sm font-medium dark:text-primary",
              project.archived &&
                "text-muted-foreground decoration-muted-foreground/50 dark:decoration-primary line-through decoration-2"
            )}
          >
            {/* {archived ? (
              <ArchiveX className="size-4" />
            ) : (
              <LinkIcon className="size-4" />
            )} */}
            {project.name}
          </div>
        </Link>
        <div className="flex items-center gap-x-2">
          {project.sourceCode && <Source sourceCode={project.sourceCode} />}
          {project.liveDemo && <Website website={project.liveDemo} />}
        </div>
      </div>

      <p
        className={cn(
          "text-muted-foreground/70 max-w-lg text-sm mt-1",
          project.archived &&
            "decoration-muted-foreground/50 line-through decoration-1"
        )}
      >
        {project.description}
      </p>
    </div>
  );
};

export const ItemSkeleton: FC = () => {
  return (
    <div className="flex flex-col border-b-[0.2px] border-muted-foreground/20 pb-4">
      <div className="w-full flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <div className="h-4 w-32 bg-muted-foreground/20 rounded animate-pulse" />
        </div>
        <div className="flex items-center gap-x-2">
          <div className="h-4 w-4 bg-muted-foreground/20 rounded animate-pulse" />
          <div className="h-4 w-4 bg-muted-foreground/20 rounded animate-pulse" />
        </div>
      </div>

      <div className="text-muted-foreground/70 max-w-lg text-sm mt-1">
        <div className="h-4 w-64 bg-muted-foreground/20 rounded animate-pulse" />
      </div>
    </div>
  );
};
