import { CurrentFocus } from "@/components/content/current-focus";
import { Description } from "@/components/content/description";
import { Projects } from "@/components/content/projects";
import { Shipped } from "@/components/content/shipped";
import { Archives } from "@/components/content/archives";
import { FooterWrapper } from "@/components/footer/footer-wrapper";
import { HeaderWrapper } from "@/components/header/header-wrapper";
import { Container, Main, Section } from "@/components/layouts/layout";

export default function Home() {
  return (
    <Main>
      <Container className="flex flex-col items-center w-full h-full lg:pt-12">
        <Section className="flex flex-col w-full  ">
          <HeaderWrapper />
        </Section>
        <Section className="flex flex-col overflow-hidden  w-full min-h-24  flex-1">
          <div className="h-full overflow-y-auto space-y-12">
            <Description />
            <CurrentFocus />
            <Shipped />
            <Projects />
            <Archives />
          </div>
        </Section>

        <Section className="flex flex-col   justify-end w-full">
          <FooterWrapper />
        </Section>
      </Container>
    </Main>
  );
}
