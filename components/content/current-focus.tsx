import { FC } from "react";
import { currentFocus } from "@/constants";
import { Item } from "./item";

export const CurrentFocus: FC = () => {
  return (
    <div className="flex flex-col gap-4 w-full py-6 ">
      <h2 className="lg:text-xl text-lg font-bold">
        <span className="text-muted-foreground text-sm">&gt;&gt;</span>{" "}
        current_focus
      </h2>
      <div className="flex flex-col gap-4 ml-6 lg:ml-12">
        {currentFocus.map((focus) => (
          <Item key={focus.name} {...focus} />
        ))}
      </div>
    </div>
  );
};
