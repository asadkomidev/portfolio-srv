import { FC } from "react";
import Link from "next/link";
import { currentFocus } from "@/constants";

export const CurrentFocus: FC = () => {
  return (
    <div className="flex flex-col gap-4 w-full py-6 ">
      <h2 className="lg:text-xl text-lg font-bold">_current_focus</h2>
      <div className="flex flex-col gap-4 border-l pl-4">
        {currentFocus.map((focus) => (
          <FocusItem key={focus.title} {...focus} />
        ))}
      </div>
    </div>
  );
};

const FocusItem: FC<{ title: string; description: string }> = ({
  title,
  description,
}) => {
  return (
    <div className="flex flex-col ">
      <Link href={`/current/${title}`} className="font-medium">
        {title}
      </Link>
      <p className="text-muted-foreground text-sm">{description}</p>
    </div>
  );
};
