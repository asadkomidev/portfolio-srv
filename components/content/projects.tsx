import { FC } from "react";
import { projects } from "@/constants";
import { Item } from "./item";

export const Projects: FC = () => {
  return (
    <div className="flex flex-col gap-4 w-full py-6">
      <h2 className="lg:text-xl text-lg font-bold">
        {" "}
        <span className="text-muted-foreground text-sm">&gt;&gt;</span> projects
      </h2>
      <div className="flex flex-col gap-4 ml-6 lg:ml-12">
        {projects.map((project) => (
          <Item key={project.name} {...project} />
        ))}
      </div>
    </div>
  );
};
