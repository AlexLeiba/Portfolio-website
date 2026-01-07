"use client";
import React from "react";
import {
  Book,
  ChevronDown,
  Cog,
  FileBadge2,
  FolderKanban,
  Languages,
  MonitorCog,
} from "lucide-react";
import Image from "next/image";

export type AboutMeType = (typeof aboutMeData)[number];

export const aboutMeData: {
  title: string;
  description: { title: string; description: string[]; link?: string }[];
  icon: React.JSX.Element;
  col: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
}[] = [
  {
    title: "Education",
    description: [
      {
        title: "",
        description: [
          " • Baccalaureate - 2000-2012",
          " • IT school - Front end development school - 2021-2022",
          " • Meta - Front end development course - 2025",
          " • Burlington english school -  2022",
        ],
      },
    ],
    icon: <Book width={50} height={50} />,
    col: 6,
  },
  {
    title: "Certifications",
    description: [
      {
        title: "",
        description: [
          " • IT School - Web development",
          " • Meta - Front-end development specialisation ",
          " • IBM - Developing Back-End Apps with Node.js and Express.js",
          " • Skillup online - React Native: Developing Android and iOS Apps ",
          " • Meta - React Advanced",
          " • Burlington english certificate",
        ],
      },
    ],
    icon: <FileBadge2 width={50} height={50} />,
    col: 6,
  },
  {
    title: "Experience",
    description: [
      {
        title: "5 + years as a front end developer.",
        description: [],
      },
      {
        title: "Mostly experienced with tech: ",
        description: [
          "React.js • Next.js • Typescript • Tailwind • Styled-components • Redux • Zustand.",
        ],
      },
    ],
    icon: <MonitorCog width={50} height={50} />,
    col: 8,
  },
  {
    title: "Languages",
    description: [
      { title: "", description: ["• English", "• Russian", "• Romanian"] },
    ],
    icon: <Languages width={50} height={50} />,
    col: 4,
  },

  {
    title: "Projects Completed",
    description: [
      {
        title: " • Front end",
        description: ["20 + projects completed as a front end developer."],
      },
      {
        title: " • Full stack",
        description: ["6 + Projects completed as a full stack developer."],
      },
    ],
    icon: <Cog width={50} height={50} />,
    col: 6,
  },
  {
    title: "My Projects",
    description: [
      {
        title: "Check the projects I developed in Team.",
        description: [],
        link: "#projects",
      },
      {
        title: "Check My Personal Projects.",
        description: [],
        link: "#personal-projects",
      },
    ],

    icon: <FolderKanban width={50} height={50} />,
    col: 6,
  },
];

export type ProjectsType = {
  id: number;
  title: string;
  description: string;
  techUsed: string[];
  github: string;
  website: string;

  icon: {
    src: string;
    alt: string;
  };
  icon2: {
    src: string;
    alt: string;
  };
};

export const projectsData: ProjectsType[] = [
  {
    id: 4,
    title: "Ledidi",
    description:
      "Ledidi is SaaS platform that offers a complete solution that enables users to securely collect, organise, analyse, and visualise data. The platform is specifically designed to facilitate collaboration within a secure digital environment for healthcare professionals and researchers. The pictures and descriptions were downloaded from: https://enovatika.com/en/work/ledidi ",
    techUsed: [""],
    github: "",
    website: "https://ledidi.com/",

    icon: {
      src: "/projects/ledidi-web-1.webp",

      alt: "ledidi",
    },
    icon2: {
      src: "/projects/ledidi-web-2.webp",

      alt: "ledidi",
    },
  },
  {
    id: 1,
    title: "Wonderland Essentials",
    description:
      "Developed in 2022 and updated in 2025, Wonderland Essentials is a doTERRA products platform which guides users around the world the benefits of essential oils and other wonderful doTERRA products with weekly live events , monthly blends , articles, support and much more.",
    techUsed: [""],
    github: "",
    website: "https://wonderlandessentials.com/",

    icon: {
      src: "/projects/wes-desktop.webp",

      alt: "Wonderland",
    },
    icon2: {
      src: "/projects/wes-mobile.webp",

      alt: "Wonderland",
    },
  },
  {
    id: 2,
    title: "Wonderland Mobile App",
    description:
      "Developed in 2022 and updated in 2025, Wonderland Essentials is a platform dedicated to doTERRA products that guides users around the world through the benefits of essential oils and other amazing offerings. The platform features weekly live events, monthly blends, informative articles, dedicated support, and much more. You can download the app for free from the App Store and Google Play.",
    techUsed: [""],
    github: "",
    website: "https://apps.apple.com/gb/app/wonderland-essentials/id1635968740",
    icon: {
      src: "/projects/wes-app.webp",
      alt: "Wonderland-desktop",
    },
    icon2: {
      src: "/projects/wes-app-2.webp",
      alt: "Wonderland-mobile",
    },
  },
  {
    id: 3,
    title: "Enovatika",
    description:
      "Developed in 2024, the Enovatika website showcases the company`s achievements, successfully completed projects, benefits, web and design approaches, and many other valuable services.",
    techUsed: [""],
    github: "",
    website: "https://enovatika.com/en",
    icon: {
      src: "/projects/enovatika-web.webp",
      alt: "Enovatika",
    },
    icon2: {
      src: "/projects/enovatika-mobile.webp",
      alt: "Enovatika mobile",
    },
  },
  // {
  //   id: 4,
  //   title: "Marketpal",
  //   description:
  //     //  `Marketpal is a SaaS Web app platform designed to simplify the process of requesting quotes, finding suppliers, and acquiring the products and services you need.
  //     // I have been working and maintaining the project on front end part from the beginning.
  //     // This web app consists of Landing page , Dashboard, and Custome Admin CMS.`
  //     "Marketpal brings customers and suppliers together, streamlining the entire sourcing process and infusing it with a healthy blend of simplicity, ease, and efficiency.",
  //   techUsed: [
  //     "",
  //     // "Next.js",
  //     // "Styled components",
  //     // "GraphQL",
  //     // "Redux",
  //     // "TypeScript",
  //     // "React hook form",
  //     // "zod",
  //   ],
  //   github: "",
  //   website: "https://marketpal.com/",
  //   icon: (
  //     <Image
  //       className="w-full object-top object-cover shadow-lg"
  //       src="/projects/marketpal-web.webp"
  //       width={600}
  //       height={400}
  //       alt="Marketpal"
  //     />
  //   ),
  //   icon2: (
  //     <Image
  //       className=" object-cover object-top shadow-lg rounded-lg"
  //       src="/projects/marketpal-moble.webp"
  //       width={250}
  //       height={400}
  //       alt="Marketpal"
  //     />
  //   ),
  // },
  {
    id: 5,
    title: "The Scaleup fest",
    description:
      "Designed for companies that have moved past the early stage , Scaleup Fest is built for scaleups actively navigating growth, market entry, expansion, investment-readiness, and exits. It’s also relevant for mid-sized companies and mature startups looking to learn from others, sharpen their growth strategy, or meet potential partners and investors.",
    techUsed: [""],
    github: "",
    website: "https://thescaleupfest.com/",
    icon: {
      src: "/projects/scaleup-web.webp",
      alt: "Scaleup Fest",
    },
    icon2: {
      src: "/projects/scaleup-mobile.webp",
      alt: "Scaleup Fest mobile",
    },
  },
  {
    id: 6,
    title: "Medforeldre",
    description:
      "Developed in 2022, Medforeldre is a web service which offers parenting advice and co-parent matching, and is intended to advise and guide people who are seeking parenthood in safe and stable parenthood.",
    techUsed: [""],
    github: "",
    website: "https://www.medforeldre.no/",
    icon: {
      src: "/projects/medforeldre-web.webp",
      alt: "Medforeldre",
    },
    icon2: {
      src: "/projects/medforeldre-mobile.webp",
      alt: "Medforeldre mobile",
    },
  },
  {
    id: 7,
    title: "TaskMate",
    description: `" TaskMate is an Agile Task Manager Web App that allows users to create, manage, assign, add attachments , comments and prioritize tasks and many other useful features. 
    It offers a clean ,intuitive and customizable interface, drag-and-drop functionality for lists and cards, and a large variety of beautiful backgrounds, making it easy for users to stay organized and focused while enjoying the beautiful design. "`,
    techUsed: [
      "Next.js",
      "Tailwind",
      "TypeScript",
      "React hook form",
      "zod",
      "Shadcn",
      "Clerk",
    ],
    github: "https://github.com/AlexLeiba/TaskMate",
    website: "https://task-mate-five.vercel.app/",
    icon: {
      src: "/projects/task-mate-desktop.webp",
      alt: "taskmate",
    },
    icon2: {
      src: "/projects/task-mate-mobile.webp",
      alt: "taskmate mobile",
    },
  },
  {
    id: 8,
    title: "Spend or keep",
    description: `" Spend or Keep is a full-stack Web App application designed to help users track expenses and manage their budgets. 
    It provides a user-friendly interface and tools that encourage saving and staying on top of personal finances.
    It features a dashboard that displays all the expenses and incomes, a chart that shows the user's spending habits with sorting options by date, table view for expenses and incomes, sortings, create and edit categories. "`,
    techUsed: [
      "React.js",
      "Next.js",
      "Tailwind",
      "TypeScript",
      "Prisma",
      "Clerk",
      "Shadcn",
    ],
    github: "https://github.com/AlexLeiba/SpendAndKeep",
    website: "https://spend-or-keep.vercel.app/",
    icon: {
      src: "/projects/spend-and-keep-web.webp",
      alt: "spend and keep",
    },
    icon2: {
      src: "/projects/spend-and-keep-mobile.webp",
      alt: "spend and keep mobile",
    },
  },
  {
    id: 9,
    title: "eShop",
    description: `" eShop is a full-stack e-commerce Web App that allows users to browse and purchase products. 
      It features a user-friendly interface ,white and dark mode based on your browser theme, star rating, lightbox view, sortings ,pagination, global search, secure payment processing with Stripe and other e-commerce basic features. "`,
    techUsed: [
      "React.js",
      "TypeScript",
      "Redux Toolkit",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Nodemailer",
      "JWT",
      "Stripe",
    ],
    github: "https://github.com/AlexLeiba/eShop",
    website: "https://eshop-global.onrender.com/",
    icon: {
      src: "/projects/eshop-desktop.webp",
      alt: "eshop-desktop",
    },
    icon2: {
      src: "/projects/eshop-mobile.webp",
      alt: "eshop-mobile",
    },
  },

  {
    id: 10,
    title: "eShop Admin CMS",
    description: `" eShop Admin Dashboard is a full-stack CMS Web App  for handling eShop app data. 
      It provides an intuitive interface for managing products, orders, and customers, also provides a dashboard for tracking sales , revenue, and active users. "`,
    techUsed: ["React.js", "TypeScript", "Node.js", "Express.js", "MongoDB"],
    github: "https://github.com/AlexLeiba/eShop",
    website: "https://eshop-admin-uvel.onrender.com/",
    icon: {
      src: "/projects/eshop-admin-dashboard.webp",
      alt: "eshop-admin-dashboard",
    },
    icon2: {
      src: "/projects/eshop-admin-products.webp",
      alt: "eshop-admin-products",
    },
  },
  {
    id: 19,
    title: "Design System Storybook",
    description: `"The Design System Storybook is a set of reusable components created without ChatGPT or other AI and without additional libraries on purpose. It was developed as a way of testing and showing the ability of a developer to create a design system which can be fully customizable and used in any project. In the future I will improve and extend the current components and add new ones. "`,
    techUsed: ["React.js", "Tailwind", "TypeScript", "Storybook"],
    github: "https://github.com/AlexLeiba/Design-system-storybook",
    website: "https://designsystem-storybook.netlify.app",
    icon: {
      src: "/projects/design-system-1.webp",
      alt: "wt-blogs",
    },
    icon2: {
      src: "/projects/design-system-2.webp",
      alt: "wt-blogs mobile",
    },
  },
  {
    id: 11,
    title: "Travel-Plan",
    description: `" Travel-Plan is a full-stack Web App that allows users to keep track and enjoy again the visited places or to plan a future trip. 
    This Web app is basically a travel album where you can keep all your travel memories , photos and other useful informations.
      It features creating or planning a trip, adding and reviewing the trip photo gallery , star rate , globe view of all your visited and created trips, map view ,drag and drop upload images, links, paginations, sortings , gallery slider, white and dark theme which is adopted to your browser theme"`,
    techUsed: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Custom Components",
      "Stripe",
    ],
    github: "https://github.com/AlexLeiba/travel-plan",
    website: "https://travel-plan-enjoy.vercel.app/",

    icon: {
      src: "/projects/travel-plan-web.webp",
      alt: "travel-plan-web",
    },
    icon2: {
      src: "/projects/travel-plan-mobile.webp",
      alt: "travel-plan-mobile",
    },
  },
  {
    id: 12,
    title: " SyncPoint / Calendly Clone",
    description: `" SyncPoint is a full-stack Calendly like app which allows users to provide services and book appointments on Google Meet which is automatically generated link,  within the availability of the service provider.
    All appointments will be added automatically in your google calendar and will notify you via email with all additional informations and Google Meet link.
    It features: User authentication, Create and edit services, Book or cancel appointments, Sortings, Availability settings, Google calendar notification, Public and unique link for all events provided by the service provider, Automatically provided Google Meet link.
    "`,
    techUsed: [
      "Next.js",
      "Tailwind",
      "TypeScript",
      "Shadcn",
      "Google Calendar Apis",
      "Clerk",
      "Postgres",
      "Prisma",
    ],
    github: "https://github.com/AlexLeiba/SyncPoint",
    website: "https://sync-point.vercel.app/",
    icon: {
      src: "/projects/sync-point-desktop.webp",
      alt: "wt-blogs",
    },
    icon2: {
      src: "/projects/sync-point-mobile.webp",
      alt: "wt-blogs mobile",
    },
  },
  {
    id: 13,
    title: "Web tech blogs",
    description: `" Web Tech Blogs is a full-stack Web App focused on web technology topics, created to share experiences and knowledge about web development that are valuable to the community.
    It features a user-frienfly interface where you can create your own blogs using a rich text editor or just browse through the existing ones. The app also has a built-in search function and other useful informations about the selected article, allowing you to easily find the content you're looking for. "`,
    techUsed: [
      "Next.js",
      "Tailwind",
      "TypeScript",
      "NextAuth",
      "MongoDB",
      "Prisma",
    ],
    github: "https://github.com/AlexLeiba/WT-Blogs-NextJs-fullstack-app",
    website: "https://wt-blogs.vercel.app/",
    icon: {
      src: "/projects/wt-blogs-web-dark-theme.webp",
      alt: "wt-blogs",
    },
    icon2: {
      src: "/projects/wt-blogs-mobile-white-theme.webp",
      alt: "wt-blogs mobile",
    },
  },

  {
    id: 14,
    title: "Chat me",
    description: `" Chat Me is a full-stack Web App.
      It features a real-time chat and notifications which was designed to make connecting with your friends easy. 
      It provides a wide variety of themes which changes the entire aspect of the app and makes the chat experience unique, edit personal profile data, share images and emoji. "`,
    techUsed: [
      "React.js",
      "Tailwind",
      "TypeScript",
      "Material UI",
      "Zustand",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Socket.io",
    ],
    github: "https://github.com/AlexLeiba/Chat-me-ReactJs-fullstack-app",
    website: "https://chat-me-react.onrender.com/sign-in",
    icon: {
      src: "/projects/chat-me-web.webp",
      alt: "chat-me",
    },
    icon2: {
      src: "/projects/chat-me-mobile.webp",
      alt: "chat-me mobile",
    },
  },

  {
    id: 15,
    title: "Dev blog",
    description: `" Developed in 2024, this is a simple full-stack blog app focused on development technologies. It is fully functional, featuring email verification and an admin dashboard. The project was primarily built for the purpose of learning backend development. "`,
    techUsed: [
      "JavaScript",
      "Node.js",
      "Express.js",
      "EJS",
      "Nodemailer",
      "JWT",
    ],
    github:
      "https://github.com/AlexLeiba/Dev-Blog-NodeJs-ExpressJS-fullstack-app",
    website: "https://full-stack-blog-37mi.onrender.com",

    icon: {
      src: "/projects/dev-blog-web.webp",
      alt: "express-blog",
    },
    icon2: {
      src: "/projects/dev-blog-mobile.webp",
      alt: "express-blog mobile",
    },
  },
  {
    id: 16,
    title: "My portfolio",
    description: `" Developed in 2025, My Portfolio App is a simple website that showcases my current skills and the projects I have worked on. "`,
    techUsed: [
      "Next.js",
      "Tailwind",
      "Typescript",
      "React hook form",
      "zod",
      "AOS animation",
    ],
    website: "/",
    github: "https://github.com/AlexLeiba/Portfolio",
    icon: {
      src: "/projects/my-portofolio-web.webp",
      alt: "My portfolio",
    },
    icon2: {
      src: "/projects/portfolio-mobile-white-theme.webp",
      alt: "My portfolio mobile",
    },
  },
  {
    id: 17,
    title: "WW-News",
    description: `" Developed in 2022, World Wide News is a real-time news app that delivers global news updates using the Guardian OpenPlatform API. "`,
    techUsed: ["React.js", "Bootstrap"],
    github: "https://github.com/AlexLeiba/WW-Everyday-news",
    website: "https://worldwide-everyday-news.netlify.app",
    icon: {
      src: "/projects/ww-news-web.webp",
      alt: "world-wide-news",
    },
    icon2: {
      src: "/projects/ww-news-mobile.webp",
      alt: "world-wide-news mobile",
    },
  },
  {
    id: 18,
    title: "Weather forecast",
    description: `" Developed in 2021, Weather Forecast is a simple app that displays a real 5-day weather forecast for major cities in Romania. "`,
    techUsed: ["JavaScript"],
    github: "https://github.com/AlexLeiba/Romania-Weather-forecast",
    website: "https://alex-weather-forecast.netlify.app/",
    icon: {
      src: "/projects/weather-web.webp",
      alt: "Weather-forecast",
    },
    icon2: {
      src: "/projects/weather-mobile-dark-theme.webp",
      alt: "Weather-forecast mobile",
    },
  },
];

export type SkillsType = {
  title: string;
  percentage?: number;
  icon: React.JSX.Element;
  link: string;
  linkTitle: string;
};

export const skillsData: SkillsType[] = [
  {
    title: "JavaScript",
    percentage: 90,
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    linkTitle: "Learn more about JavaScript",
    icon: (
      <Image
        src="/categories/JavaScript.svg"
        width={40}
        height={40}
        alt="JS icon"
        className=" shadow-lg rounded-full w-[50px] h-[50px] object-contain"
      />
    ),
  },
  {
    title: "TypeScript",
    percentage: 90,
    link: "https://www.typescriptlang.org/",
    linkTitle: "Learn more about TypeScript",
    icon: (
      <Image
        src="/categories/TypeScript.svg"
        width={40}
        height={40}
        alt="TS icon"
        className=" shadow-lg rounded-full w-[50px] h-[50px] object-contain"
      />
    ),
  },
  {
    title: "React.js",
    percentage: 90,
    link: "https://react.dev/",
    linkTitle: "Learn more about React.js",
    icon: (
      <Image
        src="/categories/React.svg"
        width={40}
        height={40}
        alt="React icon"
        className=" shadow-lg rounded-full w-[50px] h-[50px] object-contain"
      />
    ),
  },
  {
    title: "Next.js",
    percentage: 80,
    link: "https://nextjs.org/",
    linkTitle: "Learn more about Next.js",
    icon: (
      <Image
        src="/categories/NextJS.svg"
        width={40}
        height={40}
        alt="Next icon"
        className=" shadow-lg rounded-full w-[50px] h-[50px] object-contain"
      />
    ),
  },
  {
    title: "React Native",
    percentage: 60,
    link: "https://reactnative.dev/",
    linkTitle: "Learn more about React Native",
    icon: (
      <Image
        src="/categories/React.svg"
        width={40}
        height={40}
        alt="RN icon"
        className=" shadow-lg rounded-full w-[50px] h-[50px] object-contain"
      />
    ),
  },
  {
    title: "HTML",
    percentage: 90,
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    linkTitle: "Learn more about HTML",
    icon: (
      <Image
        src="/categories/HTML.svg"
        width={40}
        height={40}
        alt="HTML icon"
        className=" shadow-lg rounded-full w-[50px] h-[50px] object-contain"
      />
    ),
  },
  {
    title: "CSS",
    percentage: 90,
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    linkTitle: "Learn more about CSS",
    icon: (
      <Image
        src="/categories/CSS.svg"
        width={40}
        height={40}
        alt="CSS icon"
        className=" shadow-lg rounded-full w-[50px] h-[50px] object-contain"
      />
    ),
  },
  {
    title: "Tailwind",
    percentage: 80,
    link: "https://tailwindcss.com/",
    linkTitle: "Learn more about Tailwind",
    icon: (
      <Image
        src="/categories/Tailwind.svg"
        width={40}
        height={40}
        alt="Tailwind icon"
        className=" shadow-lg rounded-full w-[50px] h-[50px] object-contain"
      />
    ),
  },
  {
    title: "Styled components",
    percentage: 90,
    link: "https://styled-components.com/",
    linkTitle: "Learn more about styled-components",
    icon: (
      <Image
        src="/categories/styled.svg"
        width={40}
        height={40}
        alt="styled-components icon"
        className=" shadow-lg rounded-full w-[50px] h-[50px] object-contain"
      />
    ),
  },
  {
    title: "SCSS",
    percentage: 90,
    link: "https://sass-lang.com/",
    linkTitle: "Learn more about SCSS",
    icon: (
      <Image
        src="/categories/scss.svg"
        width={40}
        height={40}
        alt="scss icon"
        className=" shadow-lg rounded-full w-[50px] h-[50px] object-contain"
      />
    ),
  },
  {
    title: "Redux",
    percentage: 80,
    link: "https://redux.js.org/",
    linkTitle: "Learn more about Redux",
    icon: (
      <Image
        src="/categories/redux.webp"
        width={40}
        height={40}
        alt="Redux icon"
        className=" shadow-lg rounded-full w-[50px] h-[50px] object-cover "
      />
    ),
  },
  {
    title: "Zustand",
    percentage: 80,
    link: "https://zustand-demo.pmnd.rs/",
    linkTitle: "Learn more about Zustand",
    icon: (
      <Image
        src="/categories/zustand.svg"
        width={70}
        height={70}
        alt="Zustand icon"
        className=" shadow-lg rounded-full w-[50px] h-[50px] object-contain "
      />
    ),
  },
  {
    title: "GraphQL",
    percentage: 60,
    link: "https://graphql.org/",
    linkTitle: "Learn more about GraphQL",
    icon: (
      <Image
        src="/categories/GraphQL.svg"
        width={40}
        height={40}
        alt="GraphQL icon"
        className=" shadow-lg rounded-full w-[50px] h-[50px] object-contain"
      />
    ),
  },
  {
    title: "Node.js",
    percentage: 60,
    link: "https://nodejs.org/",
    linkTitle: "Learn more about Node.js",
    icon: (
      <Image
        src="/categories/NodeJS.svg"
        width={40}
        height={40}
        alt="NodeJS icon"
        className=" shadow-lg rounded-full w-[50px] h-[50px] object-contain"
      />
    ),
  },
  {
    title: "Prisma",
    percentage: 30,
    link: "https://www.prisma.io/",
    linkTitle: "Learn more about Prisma",
    icon: (
      <Image
        src="/categories/prisma.svg"
        width={40}
        height={40}
        alt="prisma icon"
        className=" shadow-lg rounded-full w-[50px] h-[50px] object-contain"
      />
    ),
  },
  {
    title: "MongoDB",
    percentage: 40,
    link: "https://www.mongodb.com/",
    linkTitle: "Learn more about MongoDB",
    icon: (
      <Image
        src="/categories/mongodb.svg"
        width={40}
        height={40}
        alt="mongodb icon"
        className=" shadow-lg rounded-full w-[50px] h-[50px] object-contain"
      />
    ),
  },
  {
    title: "Express.js",
    percentage: 70,
    link: "https://expressjs.com/",
    linkTitle: "Learn more about Express.js",
    icon: (
      <Image
        src="/categories/ExpressJS.svg"
        width={40}
        height={40}
        alt="ExpressJS icon"
        className=" shadow-lg rounded-full w-[50px] h-[50px] object-contain"
      />
    ),
  },
  {
    title: "React hook form",
    percentage: 80,
    link: "https://react-hook-form.com/",
    linkTitle: "Learn more about React Hook Form",
    icon: (
      <Image
        src="/categories/react-hook-form.svg"
        width={40}
        height={40}
        alt="react hook form icon"
        className=" shadow-lg rounded-full w-[50px] h-[50px] object-cover"
      />
    ),
  },
  {
    title: "Formik",
    percentage: 70,
    link: "https://formik.org/",
    linkTitle: "Learn more about Formik",
    icon: (
      <Image
        src="/categories/formik.webp"
        width={40}
        height={40}
        alt="Formik icon"
        className=" shadow-lg rounded-full w-[50px] h-[50px] object-cover"
      />
    ),
  },
  {
    title: "Zod",
    percentage: 80,
    link: "https://zod.dev/",
    linkTitle: "Learn more about Zod",
    icon: (
      <Image
        src="/categories/zod.webp"
        width={40}
        height={40}
        alt="Zod icon"
        className=" shadow-lg rounded-full w-[50px] h-[50px] object-cover"
      />
    ),
  },
  {
    title: "Jest",
    percentage: 50,
    link: "https://jestjs.io/",
    linkTitle: "Learn more about Jest",
    icon: (
      <Image
        src="/categories/jest.svg"
        width={40}
        height={40}
        alt="Jest icon"
        className=" shadow-lg rounded-full w-[50px] h-[50px] object-cover"
      />
    ),
  },

  {
    title: "Git",
    percentage: 70,
    link: "https://git-scm.com/",
    linkTitle: "Learn more about Git",
    icon: (
      <Image
        src="/categories/GIT.svg"
        width={40}
        height={40}
        alt="Git icon"
        className=" shadow-lg rounded-full w-[50px] h-[50px] object-contain"
      />
    ),
  },
  {
    title: "Github",
    percentage: 70,
    link: "https://github.com/",
    linkTitle: "Learn more about Github",
    icon: (
      <Image
        src="/categories/github.svg"
        width={40}
        height={40}
        alt="Github icon"
        className=" shadow-lg rounded-full w-[50px] h-[50px] object-contain"
      />
    ),
  },
  {
    title: "Jira",
    percentage: 70,
    link: "https://www.atlassian.com/software/jira",
    linkTitle: "Learn more about Jira",
    icon: (
      <Image
        src="/categories/jira.svg"
        width={40}
        height={40}
        alt="Jira icon"
        className=" shadow-lg rounded-full w-[50px] h-[50px] object-contain"
      />
    ),
  },
  {
    title: "Projects",
    percentage: 100,
    link: "#projects",
    linkTitle: "Check out my projects",
    icon: (
      <ChevronDown
        className="cursor-pointer animate-pulse"
        width={40}
        height={40}
      />
    ),
  },
];

export const floatingIcons = [
  {
    source: "/categories/React.svg",
    width: 40,
    height: 40,
    animate: {
      translateX: 250,
      translateY: 20,
      rotate: 360,
      transition: { duration: 15 },
    },
    className:
      "absolute top-0 left-0 cursor-move hover:drop-shadow-[#6b8dff_0px_0px_10px] dark:hover:drop-shadow-[white_0px_0px_10px] transition-all",
    image: {
      className: "",
    },
  },
  {
    source: "/categories/NextJS.svg",
    width: 50,
    height: 50,
    animate: {
      translateY: 500,
      rotate: 20,
      transition: { duration: 20 },
      scale: 1,
    },
    className:
      "absolute top-0 right-0 cursor-move hover:drop-shadow-[#6b8dff_0px_0px_10px] dark:hover:drop-shadow-[white_0px_0px_10px] transition-all",
    image: {
      className: "",
    },
  },
  {
    source: "/categories/tailwind.svg",
    width: 25,
    height: 25,
    animate: {
      translateX: 110,
      rotate: 360,
      translateY: 100,
      transition: { duration: 20 },
    },
    className:
      "absolute top-[20%] -left-[100px] cursor-move hover:drop-shadow-[#6b8dff_0px_0px_10px] dark:hover:drop-shadow-[white_0px_0px_10px] transition-all",
    image: {
      className: "",
    },
  },
  {
    source: "/categories/TypeScript.svg",
    width: 25,
    height: 25,
    animate: {
      translateX: -150,
      rotate: 30,
      transition: { duration: 20 },
      scale: 1,
    },
    className:
      "absolute top-[5%] -right-[100px] sm:-right-[150px] cursor-move hover:drop-shadow-[#6b8dff_0px_0px_10px] dark:hover:drop-shadow-[white_0px_0px_10px] transition-all",
    image: {
      className: "",
    },
  },
  {
    source: "/categories/JavaScript.svg",
    width: 30,
    height: 30,
    animate: {
      translateX: 50,
      translateY: 60,
      transition: { duration: 20 },
    },
    className:
      "absolute top-[50%] -left-[50px] cursor-move hover:drop-shadow-[#6b8dff_0px_0px_10px] dark:hover:drop-shadow-[white_0px_0px_10px] transition-all",
    image: {
      className: "",
    },
  },
  {
    source: "/categories/CSS.svg",
    width: 30,
    height: 30,
    animate: {
      translateX: 100,
      rotate: 180,
      translateY: 100,

      transition: { duration: 20 },
      scale: -1,
    },
    className:
      "absolute top-[35%] -left-[50px] cursor-move hover:drop-shadow-[#6b8dff_0px_0px_10px] dark:hover:drop-shadow-[white_0px_0px_10px] transition-all",
    image: {
      className: "",
    },
  },
  {
    source: "/categories/HTML.svg",
    width: 30,
    height: 30,
    animate: {
      translateX: 60,
      rotate: 180,
      transition: { duration: 30 },
      scale: -1,
    },
    className:
      "absolute top-[50%] -left-[50px] cursor-move hover:drop-shadow-[#6b8dff_0px_0px_10px] dark:hover:drop-shadow-[white_0px_0px_10px] transition-all",
    image: {
      className: "",
    },
  },
];
