import Link from "next/link";
import { FC } from "react";
import { LinkIcon } from "lucide-react";

interface WebsiteProps {
  website?: string;
}

export const Website: FC<WebsiteProps> = ({ website }) => {
  return (
    <div className="flex items-center gap-x-4">
      <div className="flex items-center gap-x-2">
        <Link
          target="_blank"
          href={website || ""}
          className="text-xs hover:underline cursor-pointer"
        >
          <LinkIcon className="text-muted-foreground hover:text-primary size-4" />
        </Link>
      </div>
    </div>
  );
};
