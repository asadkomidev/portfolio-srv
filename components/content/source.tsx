import Link from "next/link";
import { FC } from "react";
import { FaGithub } from "react-icons/fa";

interface SourceProps {
  sourceCode?: string;
}

export const Source: FC<SourceProps> = ({ sourceCode }) => {
  return (
    <div className="flex items-center gap-x-4 mt-4">
      <div className="flex items-center gap-x-2">
        <Link
          target="_blank"
          href={sourceCode || ""}
          className="text-xs hover:underline cursor-pointer">
          <FaGithub className="text-muted-foreground hover:text-primary size-4" />
        </Link>
      </div>
    </div>
  );
};
