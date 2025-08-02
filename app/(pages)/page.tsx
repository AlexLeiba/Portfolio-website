import About from '@/components/components-pages/AboutSection/About';
import Contact from '@/components/components-pages/Contact';
import Hero from '@/components/components-pages/Hero';
import Projects from '@/components/components-pages/Projects';
import Skills from '@/components/components-pages/Skills';
import { Container, Row } from '@/components/UI/Grid';
import { Spacer } from '@/components/UI/spacer/spacer';

export default function Home() {
  return (
    <>
      <Hero />

      <Container variant={'fluid'} spacing='none'>
        <Row className='flex flex-col'>
          <Container id='about'>
            <About />
          </Container>
          <Container id='skills'>
            <Skills />
          </Container>
          <Container id='projects' spacing='none'>
            <Spacer size={24} />
            <Projects />
          </Container>
          <Container id='contact' spacing='none'>
            <Contact />
            <Spacer size={24} />
          </Container>
        </Row>
      </Container>
    </>
  );
}
