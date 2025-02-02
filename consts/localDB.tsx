'use client';
import React from 'react';
import { Book, ChevronDown, Cog, Languages, MonitorCog } from 'lucide-react';
import Image from 'next/image';

export const aboutMeData: {
  title: string;
  description: { title: string; description: string[] }[];
  icon: React.JSX.Element;
  col: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
}[] = [
  {
    title: 'Education',
    description: [
      {
        title: '',
        description: [
          ' • Baccalaureate - 2000-2012',
          ' • IT school - Front end development - 2021-2022',
          ' • Udemy courses - JavaScript HTML CSS React.js - 2021',
        ],
      },
    ],
    icon: <Book width={50} height={50} />,
    col: 5,
  },
  {
    title: 'Experience',
    description: [
      {
        title: '',
        description: [
          '• More than 3 years employed as a front end developer at enovatika, mostly experienced with • React.js • Next.js • Tailwind • styled-components and • Redux.',
        ],
      },
    ],
    icon: <MonitorCog width={50} height={50} />,
    col: 7,
  },

  {
    title: 'Projects Completed',
    description: [
      {
        title: ' • Front end',
        description: [
          'More than 10 projects completed as a front end developer.',
        ],
      },
      {
        title: ' • Full stack',
        description: ['3 Projects completed as a full stack developer.'],
      },
    ],
    icon: <Cog width={50} height={50} />,
    col: 8,
  },
  {
    title: 'Languages',
    description: [
      { title: '', description: ['• English', '• Russian', '• Romanian'] },
    ],
    icon: <Languages width={50} height={50} />,
    col: 4,
  },
];

export const floatingIcons = [
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

export const projectsData: {
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
      'Developed in 2022, Wonderland Essentials is a doTERRA products platform which guides users around the world the benefits of essential oils and other wonderful doTERRA products with weekly live events , monthly blends , articles, support and much more.',
    techUsed: ['React.js', 'Styled-components', 'TypeScript'],
    github: '',
    website: 'https://wonderlandessentials.com/',
    icon: (
      <Image
        src='/projects/wes-web.webp'
        width={600}
        height={400}
        alt='Wonderland'
        className=' object-cover shadow-lg'
      />
    ),
    icon2: (
      <Image
        src='/projects/wes-mobile.webp'
        width={250}
        height={400}
        alt='Wonderland'
        className=' object-cover object-top shadow-lg rounded-lg '
      />
    ),
  },
  {
    id: 2,
    title: 'Wonderland Mobile App',
    description:
      ' Developed in 2022, Wonderland Essentials is a doTERRA products platform which guides users around the world the benefits of essential oils and other wonderful doTERRA products with weekly live events , monthly blends , articles, support and much more. You can download the app for free from App Store and Google play',
    techUsed: ['React Native', 'Styled components', 'TypeScript'],
    github: '',
    website: 'https://apps.apple.com/gb/app/wonderland-essentials/id1635968740',
    icon: (
      <Image
        className=' object-top object-cover shadow-lg'
        src='/projects/wes-app.webp'
        width={600}
        height={400}
        alt='Wonderland-mobile'
      />
    ),
    icon2: (
      <Image
        className=' object-cover object-top shadow-lg rounded-lg'
        src='/projects/wes-app-2.webp'
        width={250}
        height={400}
        alt='Wonderland-mobile'
      />
    ),
  },
  {
    id: 3,
    title: 'Enovatika',
    description:
      'Developed in 2024, Enovatika website is a website which shows the company achivements,successful completed projects , benefits ,web and design approaches and much more useful services.',
    techUsed: ['Next.js', 'Tailwind', 'TypeScript', 'React hook form', 'zod'],
    github: '',
    website: 'https://enovatika.com/en',
    icon: (
      <Image
        className=' object-top object-cover shadow-lg'
        src='/projects/enovatika-web.webp'
        width={600}
        height={400}
        alt='Enovatika'
      />
    ),
    icon2: (
      <Image
        className=' object-cover object-top shadow-lg rounded-lg'
        src='/projects/enovatika-mobile.webp'
        width={250}
        height={400}
        alt='Enovatika'
      />
    ),
  },
  {
    id: 4,
    title: 'Marketpal',
    description:
      'In development since 2023, Marketpal is a SaaS Platform which makes it easier to request a quote, find a supplier, and acquire the products and services you need',
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
        className=' object-top object-cover shadow-lg'
        src='/projects/marketpal-web.webp'
        width={600}
        height={400}
        alt='Marketpal'
      />
    ),
    icon2: (
      <Image
        className=' object-cover object-top shadow-lg rounded-lg'
        src='/projects/marketpal-moble.webp'
        width={250}
        height={400}
        alt='Marketpal'
      />
    ),
  },
  {
    id: 5,
    title: 'Medforeldre',
    description:
      'Developed in 2022, Medforeldre is a web service which offers parenting advice and co-parent matching, and is intended to advise and guide people who are seeking parenthood in safe and stable parenthood.',
    techUsed: ['React.js', 'AWS Amplify', 'GraphQL'],
    github: '',
    website: 'https://www.medforeldre.no/',
    icon: (
      <Image
        className=' object-top object-cover shadow-lg'
        src='/projects/medforeldre-web.webp'
        width={600}
        height={400}
        alt='Medforeldre'
      />
    ),
    icon2: (
      <Image
        className=' object-cover object-top shadow-lg rounded-lg'
        src='/projects/medforeldre-mobile.webp'
        width={250}
        height={400}
        alt='Medforeldre'
      />
    ),
  },
  {
    id: 6,
    title: 'Web tech blogs',
    description:
      'Developed in 2024, This is a full stack blog app focused on web tech topics for sharing the world of the web development the experiences and knowledges useful for the community.',
    techUsed: [
      'Next.js',
      'Tailwind',
      'TypeScript',
      'NextAuth',
      'MongoDB',
      'Prisma',
    ],
    github: 'https://github.com/AlexLeiba/WT-Blogs-NextJs-fullstack-app',
    website: 'https://wt-blogs.vercel.app/',
    icon: (
      <Image
        className=' object-top object-cover shadow-lg'
        src='/projects/wt-blogs-web-dark-theme.webp'
        width={600}
        height={400}
        alt='wt-blogs'
      />
    ),
    icon2: (
      <Image
        className=' object-cover object-top shadow-lg rounded-lg'
        src='/projects/wt-blogs-mobile-white-theme.webp'
        width={250}
        height={400}
        alt='wt-blogs'
      />
    ),
  },
  {
    id: 7,
    title: 'Chat me',
    description:
      'Developed in 2024, Chat me is a full stack simple realtime chat app which makes it easy to get in touch with your friends and enjoy a large variety of themes and other features provided by the app',
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
    github: 'https://github.com/AlexLeiba/Chat-me-ReactJs-fullstack-app',
    website: 'https://chat-me-react.onrender.com/sign-in',
    icon: (
      <Image
        className=' object-top object-cover shadow-lg'
        src='/projects/chat-me-web.webp'
        width={600}
        height={400}
        alt='chat-me'
      />
    ),
    icon2: (
      <Image
        className='h-[665px] w-[380px] object-cover object-top shadow-lg rounded-lg'
        src='/projects/chat-me-mobile.webp'
        width={250}
        height={400}
        alt='chat-me'
      />
    ),
  },
  {
    id: 8,
    title: 'Dev blog',
    description:
      'Developed in 2024, This is a full stack simple blog app oriented on development technologies, is fully functional with email verification and admin dashboard, which was developed mostly for learning backend purpose',
    techUsed: [
      'JavaScript',
      'Node.js',
      'Express.js',
      'EJS',
      'Nodemailer',
      'JWT',
    ],
    github:
      'https://github.com/AlexLeiba/Dev-Blog-NodeJs-ExpressJS-fullstack-app',
    website: 'https://full-stack-blog-37mi.onrender.com',
    icon: (
      <Image
        className=' object-top object-cover shadow-lg'
        src='/projects/dev-blog-web.webp'
        width={600}
        height={400}
        alt='express-blog'
      />
    ),
    icon2: (
      <Image
        className=' object-cover object-top shadow-lg rounded-lg'
        src='/projects/dev-blog-mobile.webp'
        width={250}
        height={400}
        alt='express-blog'
      />
    ),
  },
  {
    id: 9,
    title: 'My portfolio',
    description:
      'Developed in 2025, My portfolio app is a simple portfolio website which shows my currect skills and projects I have worked on.',
    techUsed: [
      'Next.js',
      'Tailwind',
      'Typescript',
      'React hook form',
      'zod',
      'AOS',
    ],
    github: 'https://github.com/AlexLeiba/Portfolio',
    website: 'https://worldwide-everyday-news.netlify.app',
    icon: (
      <Image
        className=' object-top object-cover shadow-lg'
        src='/projects/my-portofolio-web.webp'
        width={600}
        height={400}
        alt='W W News'
      />
    ),
    icon2: (
      <Image
        className='object-cover object-top shadow-lg rounded-lg'
        src='/projects/portfolio-mobile-white-theme.webp'
        width={250}
        height={400}
        alt='world wide news'
      />
    ),
  },
  {
    id: 10,
    title: 'WW-News',
    description:
      'Developed in 2022, World Wide News is a news app which shows realtime  news from around the world  provided by the Guardian OpenPlatform Api.',
    techUsed: ['React.js', 'Bootstrap'],
    github: 'https://github.com/AlexLeiba/WW-Everyday-news',
    website: 'https://worldwide-everyday-news.netlify.app',
    icon: (
      <Image
        className=' object-top object-cover shadow-lg'
        src='/projects/ww-news-web.webp'
        width={600}
        height={400}
        alt='world-wide-news'
      />
    ),
    icon2: (
      <Image
        className='h-[650px] w-[365px] object-cover object-top shadow-lg rounded-lg'
        src='/projects/ww-news-mobile.webp'
        width={250}
        height={400}
        alt='world-wide-news'
      />
    ),
  },
  {
    id: 11,
    title: 'Weather forecast',
    description:
      'Developed in 2021, Weather forecast is a simple forecast app which shows real 5 days forecast of Romanian big cities',
    techUsed: ['JavaScript'],
    github: 'https://github.com/AlexLeiba/Romania-Weather-forecast',
    website: 'https://alex-weather-forecast.netlify.app/',
    icon: (
      <Image
        className=' object-top object-cover shadow-lg'
        src='/projects/weather-web.webp'
        width={600}
        height={400}
        alt='Weather-forecast'
      />
    ),
    icon2: (
      <Image
        className=' object-cover object-top shadow-lg rounded-lg'
        src='/projects/weather-mobile-dark-theme.webp'
        width={250}
        height={400}
        alt='Weather-forecast'
      />
    ),
  },
  {
    id: 12,
    title: 'Minesweeper simplified game',
    description:
      'Developed in 2023, The minsweeper game is a simplified version of the popular game where you have to identify where are the mines located by putting the flag over that square , the user also has the option to choose between 1 and 20 mines per game ',
    techUsed: ['React.js', 'Styled components'],
    github: 'https://github.com/AlexLeiba/Minesweeper-game',
    website: 'https://minesweeper-simplified.netlify.app',
    icon: (
      <Image
        className=' object-top object-cover shadow-lg'
        src='/projects/minesweeper-web.webp'
        width={600}
        height={400}
        alt='minesweeper web'
      />
    ),
    icon2: (
      <Image
        className=' object-cover object-top shadow-lg rounded-lg'
        src='/projects/minesweeper-mobile.webp'
        width={250}
        height={400}
        alt='minesweeper mobile'
      />
    ),
  },
];

export const skillsData: {
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
        width={50}
        height={50}
        alt='Redux'
        className=' shadow-lg rounded-full w-[50px] h-[50px] object-cover '
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
    title: 'GraphQL',
    percentage: 50,
    icon: (
      <Image
        src='/categories/GraphQL.svg'
        width={50}
        height={50}
        alt='Git'
        className=' shadow-lg rounded-full w-[50px] h-[50px] object-contain'
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
        width={50}
        height={50}
        alt='react hook form'
        className=' shadow-lg rounded-full w-[50px] h-[50px] object-cover'
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
        width={50}
        height={50}
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
        width={50}
        height={50}
        alt='Jira'
        className=' shadow-lg rounded-full w-[50px] h-[50px] object-contain'
      />
    ),
  },
  {
    title: 'Projects',
    percentage: 100,
    icon: (
      <ChevronDown
        className='cursor-pointer animate-pulse'
        width={50}
        height={50}
      />
    ),
  },
];
