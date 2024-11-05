import { FC } from "react";
import { currentFocus } from "@/constants";
import { Item } from "./item";

export const CurrentFocus: FC = () => {
  return (
    <div className="flex flex-col gap-4 w-full py-6 ">
      <h2 className="lg:text-xl text-lg font-bold">_current_focus</h2>
      <div className="flex flex-col gap-4 border-l pl-4">
        {currentFocus.map((focus) => (
          <Item key={focus.name} {...focus} />
        ))}
      </div>
    </div>
  );
};
