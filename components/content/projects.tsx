import { FC } from "react";
import { projects } from "@/constants";
import { Item } from "./item";

export const Projects: FC = () => {
  return (
    <div className="flex flex-col gap-4 w-full py-6">
      <h2 className="lg:text-xl text-lg font-bold">_projects</h2>
      <div className="flex flex-col gap-4 border-l pl-4">
        {projects.map((project) => (
          <Item key={project.name} {...project} />
        ))}
      </div>
    </div>
  );
};
