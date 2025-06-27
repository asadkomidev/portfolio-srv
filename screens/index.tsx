"use client";

import React from "react";

import { useQuery } from "convex/react";
import { api } from "../convex/_generated/api";

import { ProjectsSection } from "@/components/content/projects-section";
import { Description } from "@/components/ui/description";
import { HeaderWrapper } from "@/components/header/header-wrapper";
import { Container, Main, Section } from "@/components/layouts/layout";

export const HomeScreen = () => {
  const projects = useQuery(api.content.projects);

  const isLoading = projects === undefined;

  return (
    <Main>
      <Container className="flex flex-col items-center w-full h-full pb-32 ">
        <Section className="flex flex-col w-full  ">
          <HeaderWrapper />
        </Section>
        <Section className="flex flex-col overflow-hidden  w-full min-h-24 ">
          <div className="h-full overflow-y-auto space-y-12">
            <Description />
            <ProjectsSection
              title="_Cooking"
              emoji="♨️"
              projects={projects?.cooking ?? []}
              isLoading={isLoading}
            />
            <ProjectsSection
              title="_Shipped"
              emoji="🚀"
              projects={projects?.shipped ?? []}
              isLoading={isLoading}
            />
            <ProjectsSection
              title="_Sides"
              emoji="🗂️"
              projects={projects?.sides ?? []}
              isLoading={isLoading}
            />
            <ProjectsSection
              title="_OGs"
              emoji="📜"
              projects={projects?.archived ?? []}
              isLoading={isLoading}
              className="text-muted-foreground decoration-muted-foreground/50 dark:decoration-primary line-through decoration-1"
            />
          </div>
        </Section>
      </Container>
    </Main>
  );
};
