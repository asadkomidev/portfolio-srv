import { FC } from "react";
import { archivedProjects } from "@/constants";
import { Item } from "./item";
import { Title } from "./title";

export const Archives: FC = () => {
  return (
    <div className="flex flex-col gap-2 w-full">
      <Title
        title="_OGs"
        emoji="📜"
        className="text-muted-foreground decoration-muted-foreground/50 dark:decoration-primary line-through decoration-1"
      />
      <div className="flex flex-col gap-4 ml-6 lg:ml-12">
        {archivedProjects.map((project) => (
          <Item key={project.name} {...project} archived />
        ))}
      </div>
    </div>
  );
};
