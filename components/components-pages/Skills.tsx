'use client';
import React from 'react';
import { Spacer } from '../UI/spacer/spacer';
import { title } from 'process';
import { Book, ChevronDown, Cog, Languages, MonitorCog } from 'lucide-react';
import { Col, Row } from '../UI/Grid';
import { Button } from '../UI/Button/Button';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

function About() {
  const router = useRouter();

  const skillsData: {
    title: string;
    percentage?: number;
    icon: React.JSX.Element;
  }[] = [
    {
      title: 'JavaScript',
      percentage: 80,
      icon: (
        <Image
          src='/categories/JavaScript.svg'
          width={50}
          height={50}
          alt='JavaScript'
          className=' shadow-lg rounded-full w-[50px] h-[50px] object-contain'
        />
      ),
    },
    {
      title: 'TypeScript',
      percentage: 70,
      icon: (
        <Image
          src='/categories/TypeScript.svg'
          width={50}
          height={50}
          alt='TypeScript'
          className=' shadow-lg rounded-full w-[50px] h-[50px] object-contain'
        />
      ),
    },
    {
      title: 'React.js',
      percentage: 90,
      icon: (
        <Image
          src='/categories/React.svg'
          width={50}
          height={50}
          alt='React.js'
          className=' shadow-lg rounded-full w-[50px] h-[50px] object-contain'
        />
      ),
    },
    {
      title: 'Next.js',
      percentage: 70,
      icon: (
        <Image
          src='/categories/NextJS.svg'
          width={50}
          height={50}
          alt='NextJS'
          className=' shadow-lg rounded-full w-[50px] h-[50px] object-contain'
        />
      ),
    },
    {
      title: 'React Native',
      percentage: 50,
      icon: (
        <Image
          src='/categories/React.svg'
          width={50}
          height={50}
          alt='React Native'
          className=' shadow-lg rounded-full w-[50px] h-[50px] object-contain'
        />
      ),
    },
    {
      title: 'HTML',
      percentage: 80,
      icon: (
        <Image
          src='/categories/HTML.svg'
          width={50}
          height={50}
          alt='HTML'
          className=' shadow-lg rounded-full w-[50px] h-[50px] object-contain'
        />
      ),
    },
    {
      title: 'CSS',
      percentage: 80,
      icon: (
        <Image
          src='/categories/CSS.svg'
          width={50}
          height={50}
          alt='CSS'
          className=' shadow-lg rounded-full w-[50px] h-[50px] object-contain'
        />
      ),
    },
    {
      title: 'Tailwind',
      percentage: 80,
      icon: (
        <Image
          src='/categories/Tailwind.svg'
          width={50}
          height={50}
          alt='Tailwind'
          className=' shadow-lg rounded-full w-[50px] h-[50px] object-contain'
        />
      ),
    },
    {
      title: 'Styled components',
      percentage: 70,
      icon: (
        <Image
          src='/categories/styled.svg'
          width={50}
          height={50}
          alt='styled-components'
          className=' shadow-lg rounded-full w-[50px] h-[50px] object-contain'
        />
      ),
    },
    {
      title: 'Redux',
      percentage: 70,
      icon: (
        <Image
          src='/categories/redux.svg'
          width={40}
          height={40}
          alt='Redux'
          className=' shadow-lg rounded-full w-[50px] h-[50px] object-contain '
        />
      ),
    },
    {
      title: 'Zustand',
      percentage: 60,
      icon: (
        <Image
          src='/categories/zustand.svg'
          width={70}
          height={70}
          alt='Zustand'
          className=' shadow-lg rounded-full w-[50px] h-[50px] object-contain '
        />
      ),
    },
    {
      title: 'Node.js',
      percentage: 40,
      icon: (
        <Image
          src='/categories/NodeJS.svg'
          width={50}
          height={50}
          alt='NodeJS'
          className=' shadow-lg rounded-full w-[50px] h-[50px] object-contain'
        />
      ),
    },
    {
      title: 'Prisma',
      percentage: 30,
      icon: (
        <Image
          src='/categories/prisma.svg'
          width={50}
          height={50}
          alt='prisma'
          className=' shadow-lg rounded-full w-[50px] h-[50px] object-contain'
        />
      ),
    },
    {
      title: 'MongoDB',
      percentage: 30,
      icon: (
        <Image
          src='/categories/mongodb.svg'
          width={50}
          height={50}
          alt='mongodb'
          className=' shadow-lg rounded-full w-[50px] h-[50px] object-contain'
        />
      ),
    },
    {
      title: 'Express.js',
      percentage: 30,
      icon: (
        <Image
          src='/categories/ExpressJS.svg'
          width={50}
          height={50}
          alt='ExpressJS'
          className=' shadow-lg rounded-full w-[50px] h-[50px] object-contain'
        />
      ),
    },
    {
      title: 'React hook form',
      percentage: 70,
      icon: (
        <Image
          src='/categories/react-hook-form.svg'
          width={30}
          height={30}
          alt='react hook form'
          className=' shadow-lg rounded-full w-[50px] h-[50px] object-contain'
        />
      ),
    },

    {
      title: 'Git',
      percentage: 70,
      icon: (
        <Image
          src='/categories/GIT.svg'
          width={50}
          height={50}
          alt='Git'
          className=' shadow-lg rounded-full w-[50px] h-[50px] object-contain'
        />
      ),
    },
    {
      title: 'Github',
      percentage: 70,
      icon: (
        <Image
          src='/categories/github.svg'
          width={30}
          height={30}
          alt='Github'
          className=' shadow-lg rounded-full w-[50px] h-[50px] object-contain'
        />
      ),
    },
    {
      title: 'Jira',
      percentage: 70,
      icon: (
        <Image
          src='/categories/jira.svg'
          width={30}
          height={30}
          alt='Jira'
          className=' shadow-lg rounded-full w-[50px] h-[50px] object-contain'
        />
      ),
    },
    {
      title: 'Projects',
      percentage: 100,
      icon: <ChevronDown className='cursor-pointer' width={50} height={50} />,
    },
  ];

  return (
    <div>
      <Row>
        <Col lgOffset={2} lg={8}>
          <div className='flex justify-center '>
            <h2 className='text-center'>Ski</h2>
            <h2 className=' text-primary-400'>lls</h2>
          </div>
        </Col>
      </Row>

      <Spacer size={16} />
      <Row>
        {skillsData.map((data, index) => {
          return (
            <Col key={index} className='w-full mb-6' lg={2}>
              <div
                onClick={() =>
                  data.title === 'Projects'
                    ? router.push('#my-projects')
                    : () => {}
                }
                className={cn(
                  data.title === 'Projects' && 'cursor-pointer',
                  'dark:bg-baseline-900 bg-baseline-50 w-full h-24 rounded-xl mb-2 gap-4 shadow-lg'
                )}
              >
                <div
                  style={{
                    background: `linear-gradient(to right, #7493f0 ${data.percentage}%, transparent 0%)`,
                  }}
                  key={index}
                  className={cn(
                    ' flex justify-center items-center gap-4 border mb-2 border-primary-200  h-full p-4 rounded-xl flex-wrap overflow-hidden'
                  )}
                >
                  <div className='flex items-center  gap-2'>
                    <div className='flex items-center justify-center gap-2'>
                      <p className='text-black dark:text-white  body-base text-center  font-bold'>
                        {data.title}
                      </p>

                      {data.icon}
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          );
        })}
        {/* <Col className='w-full'>
          <div
            onClick={() => router.push('#my-skills')}
            className='cursor-pointer flex justify-center items-center  gap-4 border mb-4 border-primary-200 pb-4  p-4 rounded-xl flex-wrap overflow-hidden'
          >
            <h5 className='text-primary-400'>Skills</h5>
            <ChevronDown className='text-primary-400' width={50} height={50} />
          </div>
        </Col> */}
      </Row>
    </div>
  );
}

export default About;
