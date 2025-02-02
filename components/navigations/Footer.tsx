import React from 'react';
import { Col, Container, Row } from '../UI/Grid';
import Link from 'next/link';
import { format } from 'date-fns';
import { Spacer } from '../UI/spacer/spacer';

function footer() {
  return (
    <Container
      variant={'fluid'}
      spacing='none'
      className=' p-4 bg-baseline-100 dark:bg-baseline-950 '
    >
      <Container>
        <Row className='dark:text-white'>
          <Col lg={5} md={2}>
            {/* Logo */}
            <div className='flex font-bold flex-col gap-2 '>
              <p className='text-xl font-bold'>Portfolio</p>

              <p className='font-bold'>
                Alexandru Leiba Lapteacru · {format(new Date(), 'yyyy')}
              </p>
            </div>
            <Spacer sm={4} />
          </Col>
          <Col lg={2} lgOffset={1} md={2}>
            <p className='text-xl font-bold'>Links</p>
            <div className='dark:text-baseline-200'>
              <Link href='/'>
                <p>Hero</p>
              </Link>
              <Link href='#about'>
                <p>About me</p>
              </Link>
              <Link href='#projects'>
                <p>My projects</p>
              </Link>
              <Link href='#skills'>
                <p>Skills</p>
              </Link>
              <Link href='#contact'>
                <p>Contact</p>
              </Link>
            </div>
            <Spacer sm={4} md={4} />
          </Col>
          <Col lg={2} md={2}>
            <p className='text-xl font-bold'>Tags</p>
            <div className='dark:text-baseline-200'>
              <Link href='#about'>
                <p>Education</p>
              </Link>
              <Link href='#about'>
                <p>Languages</p>
              </Link>
              <Link href='#about'>
                <p>Experience</p>
              </Link>
              <Link href='#about'>
                <p>Projects completed</p>
              </Link>
            </div>
            <Spacer sm={4} />
          </Col>
          <Col lg={2} md={2}>
            <p className='text-xl font-bold'>Social</p>

            <div className='dark:text-baseline-200'>
              <Link href={'https://github.com/AlexLeiba'}>
                <p>Github</p>
              </Link>

              <Link
                href={
                  'https://www.linkedin.com/in/alex-leiba-9205801ba?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app'
                }
              >
                <p>Linkedin</p>
              </Link>
              <Link href={'mailto:leiba.alexandru@gmail.com'}>
                <p>Gmail</p>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default footer;
