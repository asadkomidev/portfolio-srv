import { FC } from "react";
import { currentFocus } from "@/constants";
import { Item } from "../ui/item";
import { Title } from "../ui/title";

export const Cooking: FC = () => {
  return (
    <div className="flex flex-col gap-2 w-full">
      <Title title="_Cooking" emoji="♨️" />
      <div className="flex flex-col gap-4 ml-6 lg:ml-12">
        {currentFocus.map((focus) => (
          <Item key={focus.name} {...focus} />
        ))}
      </div>
    </div>
  );
};
