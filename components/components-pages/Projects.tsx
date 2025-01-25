'use client';
import React from 'react';
import { Spacer } from '../UI/spacer/spacer';
import { Col, Row } from '../UI/Grid';
import { Button } from '../UI/Button/Button';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';

function Projects() {
  return (
    <div>
      <Row>
        <Col lgOffset={2} lg={8}>
          <div className='flex justify-center '>
            <h2 className='text-center' data-aos='fade-left'>
              Pro
            </h2>
            <h2 className=' text-primary-400' data-aos='fade-right'>
              jects
            </h2>
          </div>
        </Col>
      </Row>

      <Spacer size={16} />
      <Row>
        {projectsData.map((data, index) => {
          return (
            <Col key={index} className='w-full mb-96' lg={12}>
              <div className='flex gap-12 justify-between items-center relative'>
                {index % 2 !== 0 && (
                  <>
                    <div data-aos='fade-up'>{data.icon}</div>
                    <div
                      data-aos='fade-left'
                      className=' absolute top-10 left-96'
                      data-aos-delay={500}
                    >
                      {data.icon2}
                    </div>
                  </>
                )}

                <div
                  className={cn(
                    index % 2 !== 0 && ' text-end ',
                    'flex flex-col gap-4'
                  )}
                  data-aos='fade-up'
                >
                  <h5 className='font-bold text-primary-400'>
                    {data.id !== 10 ? '0' + data.id : data.id}
                  </h5>
                  <h5 className='text-xl font-bold'>{data.title}</h5>

                  <div
                    className={cn(
                      index % 2 !== 0 ? 'justify-end ' : 'justify-start ',
                      'w-full flex '
                    )}
                  >
                    <p
                      className={cn(
                        index % 2 !== 0 ? 'mr-4' : 'ml-4',
                        'w-[450px]  text-sm  dark:text-baseline-100 '
                      )}
                    >
                      {data.description}
                    </p>
                  </div>

                  <div className='flex gap-4 flex-col '>
                    <div
                      className={cn(
                        index % 2 !== 0 ? 'justify-end ' : 'justify-start ',
                        'flex gap-4 flex-wrap w-[450px] '
                      )}
                    >
                      {data.techUsed.map((tech, index) => {
                        return (
                          <div key={index}>
                            <p
                              className='font-bold text-baseline-400'
                              key={index}
                            >
                              {tech}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                    {/* SEPARATOR */}
                    <div
                      className={cn(
                        'w-full flex',
                        index % 2 !== 0 ? 'justify-end' : 'justify-start'
                      )}
                    >
                      <div
                        className={'h-[0.5px] w-[50%] bg-black dark:bg-white'}
                      />
                    </div>
                    <div
                      className={cn(
                        index % 2 !== 0 && 'justify-end',
                        'flex gap-4'
                      )}
                    >
                      <Link href={data.website} target='_blank'>
                        <Button
                          className='text-primary-400 underline'
                          variant={'link'}
                        >
                          Website
                        </Button>
                      </Link>
                      <Link href={data.website} target='_blank'>
                        <Button
                          className='text-primary-400 underline'
                          variant={'link'}
                        >
                          Github
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>

                {index % 2 === 0 && (
                  <>
                    <div data-aos='fade-up'>{data.icon}</div>
                    <div
                      className='absolute top-10 right-96'
                      data-aos='fade-right'
                      data-aos-delay={500}
                    >
                      {data.icon2}
                    </div>
                  </>
                )}
              </div>
            </Col>
          );
        })}
      </Row>
    </div>
  );
}

export default Projects;

const projectsData: {
  id: number;
  title: string;
  description: string;
  techUsed: string[];
  github: string;
  website: string;
  icon: React.JSX.Element;
  icon2: React.JSX.Element;
}[] = [
  {
    id: 1,
    title: 'Wonderland Essentials',
    description:
      'Wonderland Essentials is a doTERRA products platform which guides users around the world the benefits of essential oils and other wonderful doTERRA products with weekly live events , monthly blends , articles, support and much more.',
    techUsed: ['React.js', 'Styled-components', 'TypeScript'],
    github: '',
    website: 'https://wonderlandessentials.com/',
    icon: (
      <Image
        src='/projects/wes-web.webp'
        width={400}
        height={400}
        alt='Wonderland'
        className='h-[400px] w-[600px] object-cover shadow-lg'
      />
    ),
    icon2: (
      <Image
        src='/projects/wes-mobile.webp'
        width={400}
        height={400}
        alt='Wonderland'
        className='h-[650px] w-[370px] object-cover object-top shadow-lg rounded-lg '
      />
    ),
  },
  {
    id: 2,
    title: 'Wonderland Mobile App',
    description:
      'Wonderland Essentials is a doTERRA products platform which guides users around the world the benefits of essential oils and other wonderful doTERRA products with weekly live events , monthly blends , articles, support and much more. You can download the app for free from App Store and Google play',
    techUsed: ['React Native', 'Styled components', 'TypeScript'],
    github: '',
    website: '',
    icon: (
      <Image
        className='h-[400px] w-[600px] object-top object-cover shadow-lg'
        src='/projects/wes-app.webp'
        width={400}
        height={400}
        alt='Wonderland-mobile'
      />
    ),
    icon2: (
      <Image
        className='h-[650px] w-[370px] object-cover object-top shadow-lg rounded-lg'
        src='/projects/wes-app-2.webp'
        width={400}
        height={400}
        alt='Wonderland-mobile'
      />
    ),
  },
  {
    id: 3,
    title: 'Enovatika',
    description:
      'Enovatika website is a website which shows the company achivements,successful completed projects , benefits ,web and design approaches and much more useful services.',
    techUsed: ['Next.js', 'Tailwind', 'TypeScript', 'React hook form', 'zod'],
    github: '',
    website: 'https://marketpal.com/',
    icon: (
      <Image
        className='h-[400px] w-[600px] object-top object-cover shadow-lg'
        src='/projects/enovatika-web.webp'
        width={400}
        height={400}
        alt='Enovatika'
      />
    ),
    icon2: (
      <Image
        className='h-[650px] w-[370px] object-cover object-top shadow-lg rounded-lg'
        src='/projects/enovatika-mobile.webp'
        width={400}
        height={400}
        alt='Enovatika'
      />
    ),
  },
  {
    id: 4,
    title: 'Marketpal',
    description:
      'Marketpal is a SaaS Platform which makes it easier to request a quote, find a supplier, and acquire the products and services you need',
    techUsed: [
      'Next.js',
      'Styled components',
      'GraphQL',
      'Redux',
      'TypeScript',
      'React hook form',
      'zod',
    ],
    github: '',
    website: 'https://marketpal.com/',
    icon: (
      <Image
        className='h-[400px] w-[600px] object-top object-cover shadow-lg'
        src='/projects/marketpal-web.webp'
        width={400}
        height={400}
        alt='Marketpal'
      />
    ),
    icon2: (
      <Image
        className='h-[650px] w-[370px] object-cover object-top shadow-lg rounded-lg'
        src='/projects/marketpal-moble.webp'
        width={400}
        height={400}
        alt='Marketpal'
      />
    ),
  },
  {
    id: 5,
    title: 'Medforeldre',
    description:
      'Medforeldre is a web service which offers parenting advice and co-parent matching, and is intended to advise and guide people who are seeking parenthood in safe and stable parenthood.',
    techUsed: ['React.js', 'AWS Amplify', 'GraphQL'],
    github: '',
    website: 'https://www.medforeldre.no/',
    icon: (
      <Image
        className='h-[400px] w-[600px] object-top object-cover shadow-lg'
        src='/projects/medforeldre-web.webp'
        width={400}
        height={400}
        alt='Medforeldre'
      />
    ),
    icon2: (
      <Image
        className='h-[650px] w-[370px] object-cover object-top shadow-lg rounded-lg'
        src='/projects/medforeldre-mobile.webp'
        width={400}
        height={400}
        alt='Medforeldre'
      />
    ),
  },
  {
    id: 6,
    title: 'Web tech blogs',
    description:
      'This is a blog app focused on web tech topics for sharing the world of the web development the experiences and knowledges useful for the community.',
    techUsed: [
      'Next.js',
      'Tailwind',
      'TypeScript',
      'NextAuth',
      'MongoDB',
      'Prisma',
    ],
    github: '',
    website: 'https://wt-blogs.vercel.app/',
    icon: (
      <Image
        className='h-[400px] w-[600px] object-top object-cover shadow-lg'
        src='/projects/wt-blogs-web-dark-theme.webp'
        width={400}
        height={400}
        alt='wt-blogs'
      />
    ),
    icon2: (
      <Image
        className='h-[650px] w-[370px] object-cover object-top shadow-lg rounded-lg'
        src='/projects/wt-blogs-mobile-white-theme.webp'
        width={400}
        height={400}
        alt='wt-blogs'
      />
    ),
  },
  {
    id: 7,
    title: 'Chat me',
    description:
      'Chat me is a simple realtime chat app which makes it easy to get in touch with your friends and enjoy a large variety of themes and other features provided by the app',
    techUsed: [
      'React.js',
      'Tailwind',
      'TypeScript',
      'Zustand',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Socket.io',
    ],
    github: '',
    website: 'https://chat-me-react.onrender.com/sign-in',
    icon: (
      <Image
        className='h-[400px] w-[600px] object-top object-cover shadow-lg'
        src='/projects/chat-me-web.webp'
        width={400}
        height={400}
        alt='chat-me'
      />
    ),
    icon2: (
      <Image
        className='h-[665px] w-[380px] object-cover object-top shadow-lg rounded-lg'
        src='/projects/chat-me-mobile.webp'
        width={400}
        height={400}
        alt='chat-me'
      />
    ),
  },
  {
    id: 8,
    title: 'Dev blog',
    description:
      'This is a simple blog app oriented on development technologies, is fully functional with email verification and admin dashboard, which was developed mostly for learning backend purpose',
    techUsed: [
      'JavaScript',
      'Node.js',
      'Express.js',
      'EJS',
      'Nodemailer',
      'JWT',
    ],
    github: '',
    website: 'https://full-stack-blog-37mi.onrender.com',
    icon: (
      <Image
        className='h-[400px] w-[600px] object-top object-cover shadow-lg'
        src='/projects/dev-blog-web.webp'
        width={400}
        height={400}
        alt='express-blog'
      />
    ),
    icon2: (
      <Image
        className='h-[650px] w-[370px] object-cover object-top shadow-lg rounded-lg'
        src='/projects/dev-blog-mobile.webp'
        width={400}
        height={400}
        alt='express-blog'
      />
    ),
  },
  {
    id: 9,
    title: 'WW-News',
    description:
      'World Wide News is a news app which shows realtime  news from around the world  provided by the Guardian OpenPlatform Api.',
    techUsed: ['React.js', 'Bootstrap'],
    github: '',
    website: 'https://worldwide-everyday-news.netlify.app',
    icon: (
      <Image
        className='h-[400px] w-[600px] object-top object-cover shadow-lg'
        src='/projects/ww-news-web.webp'
        width={400}
        height={400}
        alt='W W News'
      />
    ),
    icon2: (
      <Image
        className='h-[650px] w-[365px] object-cover object-top shadow-lg rounded-lg'
        src='/projects/ww-news-mobile.webp'
        width={400}
        height={400}
        alt='W W News'
      />
    ),
  },
  {
    id: 10,
    title: 'Weather forecast',
    description:
      'Weather forecast is a simple forecast app which shows real 5 days forecast of Romanian big cities',
    techUsed: ['JavaScript'],
    github: '',
    website: 'https://alex-weather-forecast.netlify.app/',
    icon: (
      <Image
        className='h-[400px] w-[600px] object-top object-cover shadow-lg'
        src='/projects/weather-web.webp'
        width={400}
        height={400}
        alt='Weather-forecast'
      />
    ),
    icon2: (
      <Image
        className='h-[650px] w-[370px] object-cover object-top shadow-lg rounded-lg'
        src='/projects/weather-mobile-dark-theme.webp'
        width={400}
        height={400}
        alt='Weather-forecast'
      />
    ),
  },
];
