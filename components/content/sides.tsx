import { FC } from "react";
import { projects } from "@/constants";
import { Title } from "../ui/title";
import { Item } from "../ui/item";

export const Sides: FC = () => {
  return (
    <div className="flex flex-col gap-2 w-full">
      <Title title="_Sides" emoji="🗂️" />
      <div className="flex flex-col gap-4 ml-6 lg:ml-12">
        {projects.map((project) => (
          <Item key={project.name} {...project} />
        ))}
      </div>
    </div>
  );
};
