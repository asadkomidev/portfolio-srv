import { FC } from "react";
import { ItemSkeleton, Item } from "../ui/item";
import { Title } from "../ui/title";
import { Doc } from "@/convex/_generated/dataModel";

interface ProjectsSectionProps {
  projects: Doc<"projects">[];
  isLoading: boolean;
  title: string;
  emoji: string;
  className?: string;
  skeletonCount?: number;
}

export const ProjectsSection: FC<ProjectsSectionProps> = ({
  projects,
  isLoading,
  title,
  emoji,
  className,
  skeletonCount = 2,
}) => {
  return (
    <div className="flex flex-col gap-2 w-full pb-12">
      <Title title={title} emoji={emoji} className={className} />
      <div className="flex flex-col gap-4 ml-6 lg:ml-12">
        {isLoading ? (
          <div className="flex flex-col gap-4">
            {Array.from({ length: skeletonCount }).map((_, index) => (
              <ItemSkeleton key={index} />
            ))}
          </div>
        ) : (
          projects.map((project) => (
            <Item key={project._id} project={project} />
          ))
        )}
      </div>
    </div>
  );
};
