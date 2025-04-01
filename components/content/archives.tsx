import { FC } from "react";
import { archivedProjects } from "@/constants";
import { Item } from "./item";

export const Archives: FC = () => {
  return (
    <div className="flex flex-col gap-4 w-full py-6 mt-12">
      <h2 className="lg:text-xl text-lg font-bold text-muted-foreground">
        {" "}
        <span className="text-muted-foreground text-sm">&gt;&gt;</span> archived
      </h2>
      <div className="flex flex-col gap-4 ml-6 lg:ml-12">
        {archivedProjects.map((project) => (
          <Item key={project.name} {...project} archived />
        ))}
      </div>
    </div>
  );
};
