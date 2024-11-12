import { FC } from "react";
import Link from "next/link";
import { Source } from "./source";
import { Label } from "../ui/label";
import { Globe } from "lucide-react";

export const Item: FC<{
  name: string;
  sourceCode?: string;
  liveDemo?: string;
  description: string;
}> = ({ name, sourceCode, liveDemo, description }) => {
  return (
    <div className="flex flex-col border p-4 rounded-md border-l-4 border-primary">
      <Link
        target="_blank"
        href={liveDemo || ""}
        className="hover:underline font-normal flex items-center gap-2">
        <Label className="font-medium cursor-pointer text-base flex items-center gap-2">
          <Globe className="size-4" />
          {name}
        </Label>
      </Link>

      <p className="text-muted-foreground text-sm">{description}</p>

      {sourceCode && <Source sourceCode={sourceCode} />}
    </div>
  );
};
