import About from '@/components/components-pages/About';
import Contact from '@/components/components-pages/Contact';
import Hero from '@/components/components-pages/Hero';
import Projects from '@/components/components-pages/Projects';
import Skills from '@/components/components-pages/Skills';
import { Col, Container, Row } from '@/components/UI/Grid';
import { Spacer } from '@/components/UI/spacer/spacer';

export default function Home() {
  return (
    <>
      <Hero />

      <Container variant={'fluid'} spacing='none'>
        <Row>
          <Container id='about-me'>
            <About />
          </Container>
          <Container id='skills'>
            <Skills />
          </Container>
          <Container id='my-projects'>
            <Projects />
          </Container>
          <Container id='contact'>
            <Contact />
          </Container>
        </Row>
      </Container>
    </>
  );
}
