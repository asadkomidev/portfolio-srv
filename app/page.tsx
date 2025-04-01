import { Cooking } from "@/components/content/cooking";
import { Description } from "@/components/ui/description";
import { Sides } from "@/components/content/sides";
import { Shipped } from "@/components/content/shipped";
import { Ogs } from "@/components/content/ogs";
import { HeaderWrapper } from "@/components/header/header-wrapper";
import { Container, Main, Section } from "@/components/layouts/layout";

export default function Home() {
  return (
    <Main>
      <Container className="flex flex-col items-center w-full h-full ">
        <Section className="flex flex-col w-full  ">
          <HeaderWrapper />
        </Section>
        <Section className="flex flex-col overflow-hidden  w-full min-h-24 ">
          <div className="h-full overflow-y-auto space-y-12">
            <Description />
            <Cooking />
            <Shipped />
            <Sides />
            <Ogs />
          </div>
        </Section>
      </Container>
    </Main>
  );
}
