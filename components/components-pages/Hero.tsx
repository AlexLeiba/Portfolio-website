'use client';
import React from 'react';
import { Col, Container, Row } from '@/components/UI/Grid';
import { motion } from 'motion/react';
import Image from 'next/image';
import { Spacer } from '../UI/spacer/spacer';
import { FileDown, Scale } from 'lucide-react';

function Hero() {
  function handleDownloadPdf() {
    window.open('/Alexandru-Calin-Frontend-Developer.pdf', '_blank');
  }
  return (
    <Container
      variant={'fluid'}
      className='relative h-[100vh] bg-[linear-gradient(to_bottom,_#6b8dff_10%,_#c1dbe7_40%,_#89e0ef_90%,_#ffffff_90%)] dark:bg-[linear-gradient(to_bottom,_#000,_#2B1942_35%,_#8F5C55_60%,_#DBAF6E_80%)] overflow-clip'
    >
      <Row>
        <Col>
          {/* BLACK CIRCLE */}
          <div className=' z-20 position absolute   w-[3000px] h-full dark:bg-[radial-gradient(closest-side,_#000000_80%,#1c102b)] bg-[radial-gradient(closest-side,_#ffffff_80%,#88d7f6_100%)] top-[730px] right-0 left-[50%]  rounded-[50%] -translate-x-1/2 '></div>

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
                  className='flex justify-center items-center flex-col cursor-pointer'
                  onClick={handleDownloadPdf}
                >
                  <FileDown
                    width={50}
                    height={50}
                    className=' dark:text-white text-black'
                  />
                  <p>Download pdf</p>
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
            <Spacer size={12} />

            <Image
              className=''
              src={'/hero-illustration.avif'}
              width={350}
              height={200}
              alt='illustration'
              draggable='false'
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Hero;

const floatingIcons = [
  {
    source: '/rocket.svg',
    width: 40,
    height: 40,
    animate: {
      translateY: 400,
      transition: { duration: 50 },
      translateX: 3000,
      rotate: 40,
    },
    className: 'absolute top-[200px] left-[-200px] cursor-move rotate-45',
    image: {
      className: 'rotate-45',
    },
  },
  {
    source: '/rocket.svg',
    width: 20,
    height: 20,
    animate: {
      translateY: 400,
      transition: { duration: 100 },
      translateX: -3000,
      rotate: -25,
    },
    className: 'absolute top-[100px] right-[-200px] cursor-move rotate-45',
    image: {
      className: 'rotate-[220deg]',
    },
  },
  {
    source: '/drag-illustrations/laptop-illustration2.webp',
    width: 120,
    height: 120,
    animate: {
      translateY: 40,
      transition: { duration: 6 },
    },
    className: 'absolute top-0 right-[50%] cursor-move',
    image: {
      className: '',
    },
  },

  {
    source: '/categories/React.svg',
    width: 80,
    height: 80,
    animate: {
      translateX: 150,
      rotate: 360,
      transition: { duration: 15 },
    },
    className: 'absolute top-0 left-0 cursor-move',
    image: {
      className: '',
    },
  },
  {
    source: '/categories/NextJS.svg',
    width: 80,
    height: 80,
    animate: {
      translateY: -300,
      rotate: 20,
      transition: { duration: 50 },
      scale: 2,
    },
    className: 'absolute bottom-[20%] right-0 cursor-move',
    image: {
      className: '',
    },
  },
  {
    source: '/categories/tailwind.svg',
    width: 50,
    height: 50,
    animate: {
      translateX: 150,
      rotate: 360,
      translateY: 100,
      transition: { duration: 20 },
    },
    className: 'absolute top-[20%] -left-[100px] cursor-move',
    image: {
      className: '',
    },
  },
  {
    source: '/categories/TypeScript.svg',
    width: 70,
    height: 70,
    animate: {
      translateX: -200,
      rotate: 20,
      transition: { duration: 30 },
    },
    className: 'absolute top-[5%] -right-[100px] cursor-move',
    image: {
      className: '',
    },
  },
  {
    source: '/categories/JavaScript.svg',
    width: 80,
    height: 80,
    animate: {
      translateX: 90,
      translateY: 60,
      transition: { duration: 50 },
    },
    className: 'absolute top-[5%] -left-[50px] cursor-move',
    image: {
      className: '',
    },
  },
  {
    source: '/categories/CSS.svg',
    width: 50,
    height: 50,
    animate: {
      translateX: 150,
      rotate: 380,
      translateY: 100,
      transition: { duration: 20 },
      scale: 2,
    },
    className: 'absolute top-[35%] -left-[50px] cursor-move',
    image: {
      className: '',
    },
  },
  {
    source: '/categories/HTML.svg',
    width: 50,
    height: 50,
    animate: {
      translateX: 100,
      rotate: 20,
      transition: { duration: 20 },
      scale: 2,
    },
    className: 'absolute top-[50%] -left-[50px] cursor-move',
    image: {
      className: '',
    },
  },
];
