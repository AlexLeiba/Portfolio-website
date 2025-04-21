'use client';
import React from 'react';
import { Col, Container, Row } from '@/components/UI/Grid';
import { motion } from 'motion/react';
import Image from 'next/image';
import { Spacer } from '../UI/spacer/spacer';
import { FileDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useTheme } from '@/lib/themeContext';
import { floatingIcons } from '@/consts/localDB';

function Hero() {
  const { darkMode } = useTheme();

  function handleDownloadPdf() {
    // pdf link
    const pdfUrl = process.env.NEXT_PUBLIC_PDF_LINK;

    const link = document.createElement('a');
    link.href = pdfUrl ? pdfUrl : '';
    link.download = 'alexandru-leiba-lapteacru-cv.pdf';
    link.click();
  }

  return (
    <Container
      variant={'fluid'}
      className={cn(
        darkMode ? 'backgroundDarkHero' : 'backgroundLightHero',
        'relative overflow-hidden    '
      )}
    >
      <Row>
        <Col>
          {/* BLACK CIRCLE */}
          <div className='absolute lg:top-[450px]  left-[50%] md:top-[450px] sm:top-[calc(100vh-260px)] -translate-x-1/2 '>
            <div className=' relative lg:w-[450px] lg:h-[350px]  h-[350px] w-[400px] sm:w-[200px] sm:h-[400px]   '>
              <Image
                className='object-contain object-top'
                src={'/hero-illustration.avif'}
                alt='illustration'
                draggable='false'
                fill
              />
            </div>
          </div>
          <div
            className={cn(
              'top-[730px] sm:top-[calc(100vh-100px)]',
              'z-20 position absolute  w-[3000px]  h-full dark:bg-[radial-gradient(closest-side,_#000000_90%,#331d4e)] bg-[radial-gradient(closest-side,_#ffffff_90%,#bfe6f6_100%)] right-0 left-[50%]  rounded-[50%] -translate-x-1/2 '
            )}
          ></div>

          <div className=' flex justify-center flex-col items-center  '>
            <div>
              <div className='font-bold text-center'>
                <div className='flex justify-center items-center gap-4'>
                  <h1 className=' text-white'>Hello </h1>
                  <h1 className=' dark:text-primary-400 text-black'>there,</h1>
                </div>
                <div className='flex justify-center items-center gap-4'>
                  <h2 className=' text-white'>I am </h2>
                  <h2 className=' dark:text-primary-400 text-black'>Alex</h2>
                </div>
                <p className=' body-lg'>
                  I am a Front end developer driven to deliver software tools
                  that provide best experiences for users.
                </p>
                <Spacer size={6} />
                <div
                  className='flex justify-center items-center flex-col cursor-pointer animation-delay-1000 animate-pulse'
                  onClick={handleDownloadPdf}
                >
                  <FileDown
                    width={50}
                    height={50}
                    className=' dark:text-white text-black'
                  />
                  <p>Download my cv pdf</p>
                </div>
              </div>

              {floatingIcons.map((iconData, index) => (
                <motion.div
                  drag
                  className={iconData.className}
                  animate={iconData.animate}
                  key={index}
                >
                  <Image
                    src={iconData.source}
                    width={iconData.width}
                    height={iconData.height}
                    alt='illustration'
                    draggable='false'
                    className={iconData.image.className}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Hero;
