import { FC } from "react";
import { projects } from "@/constants";
import { Title } from "./title";
import { Item } from "./item";

export const Projects: FC = () => {
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
