import { CurrentFocus } from "@/components/content/current-focus";
import { Description } from "@/components/content/description";
import { Projects } from "@/components/content/projects";
import { Archives } from "@/components/content/archives";
import { FooterWrapper } from "@/components/footer/footer-wrapper";
import { HeaderWrapper } from "@/components/header/header-wrapper";
import { Container, Main, Section } from "@/components/layouts/layout";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

export default function Home() {
  return (
    <Main>
      <Container className="flex flex-col items-center w-full h-full lg:pt-12">
        <Section className="flex flex-col w-full  ">
          <HeaderWrapper />
        </Section>
        <Section className="flex flex-col  w-full min-h-24  flex-1">
          <ScrollArea className="h-full">
            <Description />
            <CurrentFocus />
            <Projects />
            <Archives />
            <ScrollBar orientation="vertical" />
          </ScrollArea>
        </Section>

        <Section className="flex flex-col   justify-end w-full">
          <FooterWrapper />
        </Section>
      </Container>
    </Main>
  );
}
