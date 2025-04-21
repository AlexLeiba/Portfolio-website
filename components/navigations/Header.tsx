import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import ThemeToggle from '../ThemeToggle';
import { Col, Container, Row } from '../UI/Grid';
import Link from 'next/link';
import AuthLinks from './NavLinks';

function Header() {
  return (
    <div className='  p-4  dark:bg-black bg-[#6b8dff] fixed top-0 left-0 right-0  z-50'>
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
                  <Link
                    href={`${process.env.NEXT_PUBLIC_GITHUB_URL}`}
                    target='_blank'
                  >
                    <Github width={20} height={20} cursor={'pointer'} />
                  </Link>
                  <Link
                    href={`${process.env.NEXT_PUBLIC_EMAIL_URL}`}
                    target='_blank'
                  >
                    <Mail width={20} height={20} cursor={'pointer'} />
                  </Link>
                  <Link
                    href={`${process.env.NEXT_PUBLIC_LINKEDIN_URL}`}
                    target='_blank'
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

export default Header;
