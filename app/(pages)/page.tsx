import Hero from "@/components/components-pages/Hero/Hero";
import About from "@/components/components-pages/AboutSection/About";
import Contact from "@/components/components-pages/Contact";
import Projects from "@/components/components-pages/Projects/Projects";
import Skills from "@/components/components-pages/Skills/Skills";
import { Container, Row } from "@/components/UI/Grid";
import { Spacer } from "@/components/UI/spacer/spacer";
import { BlobAnimation } from "@/components/UI/BlobAnimation";

export default function Home() {
  return (
    <>
      <Hero />

      <Container variant={"fluid"} spacing="none" className="relative z-10">
        <BlobAnimation className="top-1/3 blur-lg left-0 blob  w-[700px] h-[300px]" />
        <BlobAnimation className="bottom-10 blur-md right-0 blob2  w-[600px] h-[400px]" />

        <Row className="flex flex-col ">
          <Container id="about">
            <About />
          </Container>
        </Row>
      </Container>

      <Container variant={"fluid"} spacing="none" className="relative z-10">
        <Row className="flex flex-col ">
          <Container id="skills">
            <Skills />
          </Container>
        </Row>
      </Container>

      <Container variant={"fluid"} spacing="none" className="relative z-10">
        <Row className="flex flex-col">
          <Container id="projects" spacing="none">
            <Spacer size={24} />
            <Projects />
          </Container>
        </Row>
      </Container>

      <Container variant={"fluid"} spacing="none" className="relative z-10">
        <Row className="flex flex-col">
          <Container id="contact" spacing="none">
            <Contact />
            <Spacer size={24} />
          </Container>
        </Row>
      </Container>
    </>
  );
}
