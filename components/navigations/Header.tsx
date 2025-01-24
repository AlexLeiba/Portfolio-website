import { Code2, Github, Linkedin, Mail } from 'lucide-react';

import React from 'react';
import ThemeToggle from '../ThemeToggle';
import { Col, Container, Row } from '../UI/Grid';
import Link from 'next/link';
import AuthLinks from './AuthLinks';

function header() {
  return (
    <div className='  p-4 bg-baseline-100 dark:bg-black fixed top-0 left-0 right-0  z-50'>
      <Container
        spacing='none'
        variant={'fluid'}
        className=' position-fixed top-0 left-0 right-0 z-50'
      >
        <Row>
          <Container spacing='none'>
            <Row>
              <Col className='relative flex justify-between items-center '>
                {/* Social Icons */}
                <div className='flex gap-4 dark:text-white'>
                  <Link href={'https://github.com/AlexLeiba'}>
                    <Github width={20} height={20} cursor={'pointer'} />
                  </Link>
                  <Link href={'mailto:leiba.alexandru@gmail.com'}>
                    <Mail width={20} height={20} cursor={'pointer'} />
                  </Link>
                  <Link
                    href={
                      'https://www.linkedin.com/in/alex-leiba-9205801ba?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app'
                    }
                  >
                    <Linkedin width={20} height={20} cursor={'pointer'} />
                  </Link>
                </div>

                {/* Links */}
                <div className='flex gap-4'>
                  <ThemeToggle />
                  <AuthLinks />
                </div>
              </Col>
            </Row>
          </Container>
        </Row>
      </Container>
    </div>
  );
}

export default header;
