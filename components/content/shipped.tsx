import { FC } from "react";
import { shippedProjects } from "@/constants";
import { Title } from "../ui/title";
import { Item } from "../ui/item";

export const Shipped: FC = () => {
  return (
    <div className="flex flex-col gap-2 w-full">
      <Title title="_Shipped" emoji="🚀" />
      <div className="flex flex-col gap-4 ml-6 lg:ml-12">
        {shippedProjects.map((project) => (
          <Item key={project.name} {...project} />
        ))}
      </div>
    </div>
  );
};
