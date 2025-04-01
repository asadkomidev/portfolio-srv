import { description } from "@/constants";
import { FC } from "react";

export const Description: FC = () => {
  return (
    <div className="flex flex-col gap-4 max-w-md py-6">
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
};
