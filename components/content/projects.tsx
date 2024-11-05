import { FC } from "react";
import { projects } from "@/constants";
import Link from "next/link";

export const Projects: FC = () => {
  return (
    <div className="flex flex-col gap-4 w-full py-6">
      <h2 className="lg:text-xl text-lg font-bold">_projects</h2>
      <div className="flex flex-col gap-4 border-l pl-4">
        {projects.map((project) => (
          <ProjectItem key={project.name} {...project} />
        ))}
      </div>
    </div>
  );
};

const ProjectItem: FC<{ name: string; url: string; description: string }> = ({
  name,
  url,
  description,
}) => {
  return (
    <div className="flex flex-col">
      <Link
        href={url}
        className="hover:underline font-normal flex items-center gap-2">
        <span className="font-medium ">{name}</span>
      </Link>

      <p className="text-muted-foreground text-sm">{description}</p>
    </div>
  );
};
