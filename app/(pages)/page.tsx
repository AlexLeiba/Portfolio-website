import About from '@/components/components-pages/About';
import Contact from '@/components/components-pages/Contact';
import Hero from '@/components/components-pages/Hero';
import Projects from '@/components/components-pages/Projects';
import Skills from '@/components/components-pages/Skills';
import { Container, Row } from '@/components/UI/Grid';

export default function Home() {
  return (
    <>
      <Hero />

      <Container variant={'fluid'} spacing='none'>
        <Row>
          <Container id='about'>
            <About />
          </Container>
          <Container id='skills'>
            <Skills />
          </Container>
          <Container id='projects'>
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
