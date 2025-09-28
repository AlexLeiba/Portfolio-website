"use client";
import React from "react";
import {
  Book,
  ChevronDown,
  Cog,
  CreativeCommons,
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
          " • Meta - Front end development ",
          " • Meta - HTML CSS and JS in depth",
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
    col: 7,
  },
  {
    title: "My Projects",
    description: [
      {
        title: "Check my projects developed in company.",
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
    col: 5,
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
    title: "Wonderland Essentials",
    description:
      "Developed in 2022 and updated in 2025, Wonderland Essentials is a doTERRA products platform which guides users around the world the benefits of essential oils and other wonderful doTERRA products with weekly live events , monthly blends , articles, support and much more.",
    techUsed: [
      "Next.js",
      "Tailwind",
      "TypeScript",
      "React hook form",
      "zod",
      "Shadcn",
    ],
    github: "",
    website: "https://wonderlandessentials.com/",
    icon: (
      <Image
        src="/projects/wes-desktop.webp"
        width={600}
        height={400}
        alt="Wonderland"
        className="w-full object-cover shadow-lg"
      />
    ),
    icon2: (
      <Image
        src="/projects/wes-mobile.webp"
        width={250}
        height={400}
        alt="Wonderland"
        className=" object-cover object-top shadow-lg rounded-lg "
      />
    ),
  },
  {
    id: 2,
    title: "Wonderland Mobile App",
    description:
      "Developed in 2022 and updated in 2025, Wonderland Essentials is a platform dedicated to doTERRA products that guides users around the world through the benefits of essential oils and other amazing offerings. The platform features weekly live events, monthly blends, informative articles, dedicated support, and much more. You can download the app for free from the App Store and Google Play.",
    techUsed: ["React Native", "StyleSheets", "TypeScript"],
    github: "",
    website: "https://apps.apple.com/gb/app/wonderland-essentials/id1635968740",
    icon: (
      <Image
        className="w-full object-top object-cover shadow-lg"
        src="/projects/wes-app.webp"
        width={600}
        height={400}
        alt="Wonderland-mobile"
      />
    ),
    icon2: (
      <Image
        className=" object-cover object-top shadow-lg rounded-lg"
        src="/projects/wes-app-2.webp"
        width={250}
        height={400}
        alt="Wonderland-mobile"
      />
    ),
  },
  {
    id: 3,
    title: "Enovatika",
    description:
      "Developed in 2024, the Enovatika website showcases the company`s achievements, successfully completed projects, benefits, web and design approaches, and many other valuable services.",
    techUsed: ["Next.js", "Tailwind", "TypeScript", "React hook form", "zod"],
    github: "",
    website: "https://enovatika.com/en",
    icon: (
      <Image
        className="w-full object-top object-cover shadow-lg"
        src="/projects/enovatika-web.webp"
        width={600}
        height={400}
        alt="Enovatika"
      />
    ),
    icon2: (
      <Image
        className=" object-cover object-top shadow-lg rounded-lg"
        src="/projects/enovatika-mobile.webp"
        width={250}
        height={400}
        alt="Enovatika"
      />
    ),
  },
  {
    id: 4,
    title: "Marketpal",
    description: `Marketpal is a SaaS Web app platform designed to simplify the process of requesting quotes, finding suppliers, and acquiring the products and services you need.
    I have been working and maintaining the project on front end part from the beginning. 
    This web app consists of Landing page , Dashboard, and Custome Admin CMS.`,
    techUsed: [
      "Next.js",
      "Styled components",
      "GraphQL",
      "Redux",
      "TypeScript",
      "React hook form",
      "zod",
    ],
    github: "",
    website: "https://marketpal.com/",
    icon: (
      <Image
        className="w-full object-top object-cover shadow-lg"
        src="/projects/marketpal-web.webp"
        width={600}
        height={400}
        alt="Marketpal"
      />
    ),
    icon2: (
      <Image
        className=" object-cover object-top shadow-lg rounded-lg"
        src="/projects/marketpal-moble.webp"
        width={250}
        height={400}
        alt="Marketpal"
      />
    ),
  },
  {
    id: 5,
    title: "The Scaleup fest",
    description:
      "Designed for companies that have moved past the early stage , Scaleup Fest is built for scaleups actively navigating growth, market entry, expansion, investment-readiness, and exits. It’s also relevant for mid-sized companies and mature startups looking to learn from others, sharpen their growth strategy, or meet potential partners and investors.",
    techUsed: ["HTML", "JavaScript", "SCSS"],
    github: "",
    website: "https://scaleupfest.netinteraction.biz/",
    icon: (
      <Image
        src="/projects/scaleup-web.webp"
        width={600}
        height={400}
        alt="Scaleup Fest"
        className="w-full object-cover shadow-lg"
      />
    ),
    icon2: (
      <Image
        src="/projects/scaleup-mobile.webp"
        width={250}
        height={400}
        alt="Scaleup Fest"
        className=" object-cover object-top shadow-lg rounded-lg "
      />
    ),
  },
  {
    id: 6,
    title: "Medforeldre",
    description:
      "Developed in 2022, Medforeldre is a web service which offers parenting advice and co-parent matching, and is intended to advise and guide people who are seeking parenthood in safe and stable parenthood.",
    techUsed: ["React.js", "AWS Amplify", "GraphQL"],
    github: "",
    website: "https://www.medforeldre.no/",
    icon: (
      <Image
        className="w-full object-top object-cover shadow-lg"
        src="/projects/medforeldre-web.webp"
        width={600}
        height={400}
        alt="Medforeldre"
      />
    ),
    icon2: (
      <Image
        className=" object-cover object-top shadow-lg rounded-lg"
        src="/projects/medforeldre-mobile.webp"
        width={250}
        height={400}
        alt="Medforeldre"
      />
    ),
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
    icon: (
      <Image
        className="w-full object-top object-cover shadow-lg"
        src="/projects/task-mate-desktop.webp"
        width={600}
        height={400}
        alt="taskmate"
      />
    ),
    icon2: (
      <Image
        className=" object-cover object-top shadow-lg rounded-lg"
        src="/projects/task-mate-mobile.webp"
        width={250}
        height={400}
        alt="taskmate"
      />
    ),
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
    icon: (
      <Image
        className="w-full object-top object-cover shadow-lg"
        src="/projects/spend-and-keep-web.webp"
        width={600}
        height={400}
        alt="chat-me"
      />
    ),
    icon2: (
      <Image
        className="h-[665px] w-[380px] object-cover object-top shadow-lg rounded-lg"
        src="/projects/spend-and-keep-mobile.webp"
        width={250}
        height={400}
        alt="chat-me"
      />
    ),
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
      "Custom components",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Nodemailer",
      "JWT",
      "Stripe",
    ],
    github: "https://github.com/AlexLeiba/eShop",
    website: "https://eshop-global.onrender.com/",
    icon: (
      <Image
        className="w-full object-top object-cover shadow-lg"
        src="/projects/eshop-desktop.webp"
        width={600}
        height={400}
        alt="eshop-desktop"
      />
    ),
    icon2: (
      <Image
        className=" object-cover object-top shadow-lg rounded-lg"
        src="/projects/eshop-mobile.webp"
        width={250}
        height={400}
        alt="eshop-mobile"
      />
    ),
  },

  {
    id: 10,
    title: "eShop Admin CMS",
    description: `" eShop Admin Dashboard is a full-stack CMS Web App  for handling eShop app data. 
      It provides an intuitive interface for managing products, orders, and customers, also provides a dashboard for tracking sales , revenue, and active users. "`,
    techUsed: ["React.js", "TypeScript", "Node.js", "Express.js", "MongoDB"],
    github: "https://github.com/AlexLeiba/eShop",
    website: "https://eshop-admin-uvel.onrender.com/",
    icon: (
      <Image
        className="w-full object-top object-cover shadow-lg"
        src="/projects/eshop-admin-dashboard.webp"
        width={600}
        height={400}
        alt="eshop-admin-dashboard"
      />
    ),
    icon2: (
      <Image
        className="w-full object-cover object-top shadow-lg "
        src="/projects/eshop-admin-products.webp"
        width={600}
        height={400}
        alt="eshop-admin-products"
      />
    ),
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
    website: "https://travel-plan-zeta.vercel.app/",
    icon: (
      <Image
        className="w-full object-top object-cover shadow-lg"
        src="/projects/travel-plan-web.webp"
        width={600}
        height={400}
        alt="travel-plan-web"
      />
    ),
    icon2: (
      <Image
        className=" object-cover object-top shadow-lg rounded-lg"
        src="/projects/travel-plan-mobile.webp"
        width={250}
        height={400}
        alt="travel-plan-mobile"
      />
    ),
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
    icon: (
      <Image
        className="w-full object-top object-cover shadow-lg"
        src="/projects/sync-point-desktop.webp"
        width={600}
        height={400}
        alt="wt-blogs"
      />
    ),
    icon2: (
      <Image
        className=" object-cover object-top shadow-lg rounded-lg"
        src="/projects/sync-point-mobile.webp"
        width={250}
        height={400}
        alt="wt-blogs"
      />
    ),
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
    icon: (
      <Image
        className="w-full object-top object-cover shadow-lg"
        src="/projects/wt-blogs-web-dark-theme.webp"
        width={600}
        height={400}
        alt="wt-blogs"
      />
    ),
    icon2: (
      <Image
        className=" object-cover object-top shadow-lg rounded-lg"
        src="/projects/wt-blogs-mobile-white-theme.webp"
        width={250}
        height={400}
        alt="wt-blogs"
      />
    ),
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
    icon: (
      <Image
        className="w-full object-top object-cover shadow-lg"
        src="/projects/chat-me-web.webp"
        width={600}
        height={400}
        alt="chat-me"
      />
    ),
    icon2: (
      <Image
        className="h-[665px] w-[380px] object-cover object-top shadow-lg rounded-lg"
        src="/projects/chat-me-mobile.webp"
        width={250}
        height={400}
        alt="chat-me"
      />
    ),
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
    icon: (
      <Image
        className="w-full object-top object-cover shadow-lg"
        src="/projects/dev-blog-web.webp"
        width={600}
        height={400}
        alt="express-blog"
      />
    ),
    icon2: (
      <Image
        className=" object-cover object-top shadow-lg rounded-lg"
        src="/projects/dev-blog-mobile.webp"
        width={250}
        height={400}
        alt="express-blog"
      />
    ),
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
    github: "https://github.com/AlexLeiba/Portfolio",
    website: "/",
    icon: (
      <Image
        className="w-full object-top object-cover shadow-lg"
        src="/projects/my-portofolio-web.webp"
        width={600}
        height={400}
        alt="W W News"
      />
    ),
    icon2: (
      <Image
        className="object-cover object-top shadow-lg rounded-lg"
        src="/projects/portfolio-mobile-white-theme.webp"
        width={250}
        height={400}
        alt="world wide news"
      />
    ),
  },
  {
    id: 17,
    title: "WW-News",
    description: `" Developed in 2022, World Wide News is a real-time news app that delivers global news updates using the Guardian OpenPlatform API. "`,
    techUsed: ["React.js", "Bootstrap"],
    github: "https://github.com/AlexLeiba/WW-Everyday-news",
    website: "https://worldwide-everyday-news.netlify.app",
    icon: (
      <Image
        className="w-full object-top object-cover shadow-lg"
        src="/projects/ww-news-web.webp"
        width={600}
        height={400}
        alt="world-wide-news"
      />
    ),
    icon2: (
      <Image
        className="h-[650px] w-[365px] object-cover object-top shadow-lg rounded-lg"
        src="/projects/ww-news-mobile.webp"
        width={250}
        height={400}
        alt="world-wide-news"
      />
    ),
  },
  {
    id: 18,
    title: "Weather forecast",
    description: `" Developed in 2021, Weather Forecast is a simple app that displays a real 5-day weather forecast for major cities in Romania. "`,
    techUsed: ["JavaScript"],
    github: "https://github.com/AlexLeiba/Romania-Weather-forecast",
    website: "https://alex-weather-forecast.netlify.app/",
    icon: (
      <Image
        className="w-full object-top object-cover shadow-lg"
        src="/projects/weather-web.webp"
        width={600}
        height={400}
        alt="Weather-forecast"
      />
    ),
    icon2: (
      <Image
        className=" object-cover object-top shadow-lg rounded-lg"
        src="/projects/weather-mobile-dark-theme.webp"
        width={250}
        height={400}
        alt="Weather-forecast"
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
    title: "JavaScript",
    percentage: 90,
    icon: (
      <Image
        src="/categories/JavaScript.svg"
        width={50}
        height={50}
        alt="JavaScript"
        className=" shadow-lg rounded-full w-[50px] h-[50px] object-contain"
      />
    ),
  },
  {
    title: "TypeScript",
    percentage: 90,
    icon: (
      <Image
        src="/categories/TypeScript.svg"
        width={50}
        height={50}
        alt="TypeScript"
        className=" shadow-lg rounded-full w-[50px] h-[50px] object-contain"
      />
    ),
  },
  {
    title: "React.js",
    percentage: 90,
    icon: (
      <Image
        src="/categories/React.svg"
        width={50}
        height={50}
        alt="React.js"
        className=" shadow-lg rounded-full w-[50px] h-[50px] object-contain"
      />
    ),
  },
  {
    title: "Next.js",
    percentage: 80,
    icon: (
      <Image
        src="/categories/NextJS.svg"
        width={50}
        height={50}
        alt="NextJS"
        className=" shadow-lg rounded-full w-[50px] h-[50px] object-contain"
      />
    ),
  },
  {
    title: "React Native",
    percentage: 70,
    icon: (
      <Image
        src="/categories/React.svg"
        width={50}
        height={50}
        alt="React Native"
        className=" shadow-lg rounded-full w-[50px] h-[50px] object-contain"
      />
    ),
  },
  {
    title: "HTML",
    percentage: 80,
    icon: (
      <Image
        src="/categories/HTML.svg"
        width={50}
        height={50}
        alt="HTML"
        className=" shadow-lg rounded-full w-[50px] h-[50px] object-contain"
      />
    ),
  },
  {
    title: "CSS",
    percentage: 80,
    icon: (
      <Image
        src="/categories/CSS.svg"
        width={50}
        height={50}
        alt="CSS"
        className=" shadow-lg rounded-full w-[50px] h-[50px] object-contain"
      />
    ),
  },
  {
    title: "Tailwind",
    percentage: 80,
    icon: (
      <Image
        src="/categories/Tailwind.svg"
        width={50}
        height={50}
        alt="Tailwind"
        className=" shadow-lg rounded-full w-[50px] h-[50px] object-contain"
      />
    ),
  },
  {
    title: "Styled components",
    percentage: 70,
    icon: (
      <Image
        src="/categories/styled.svg"
        width={50}
        height={50}
        alt="styled-components"
        className=" shadow-lg rounded-full w-[50px] h-[50px] object-contain"
      />
    ),
  },
  {
    title: "SCSS",
    percentage: 90,
    icon: (
      <Image
        src="/categories/scss.svg"
        width={50}
        height={50}
        alt="scss"
        className=" shadow-lg rounded-full w-[50px] h-[50px] object-contain"
      />
    ),
  },
  {
    title: "Redux",
    percentage: 70,
    icon: (
      <Image
        src="/categories/redux.svg"
        width={50}
        height={50}
        alt="Redux"
        className=" shadow-lg rounded-full w-[50px] h-[50px] object-cover "
      />
    ),
  },
  {
    title: "Zustand",
    percentage: 80,
    icon: (
      <Image
        src="/categories/zustand.svg"
        width={70}
        height={70}
        alt="Zustand"
        className=" shadow-lg rounded-full w-[50px] h-[50px] object-contain "
      />
    ),
  },
  {
    title: "GraphQL",
    percentage: 50,
    icon: (
      <Image
        src="/categories/GraphQL.svg"
        width={50}
        height={50}
        alt="Git"
        className=" shadow-lg rounded-full w-[50px] h-[50px] object-contain"
      />
    ),
  },
  {
    title: "Node.js",
    percentage: 40,
    icon: (
      <Image
        src="/categories/NodeJS.svg"
        width={50}
        height={50}
        alt="NodeJS"
        className=" shadow-lg rounded-full w-[50px] h-[50px] object-contain"
      />
    ),
  },
  {
    title: "Prisma",
    percentage: 30,
    icon: (
      <Image
        src="/categories/prisma.svg"
        width={50}
        height={50}
        alt="prisma"
        className=" shadow-lg rounded-full w-[50px] h-[50px] object-contain"
      />
    ),
  },
  {
    title: "MongoDB",
    percentage: 30,
    icon: (
      <Image
        src="/categories/mongodb.svg"
        width={50}
        height={50}
        alt="mongodb"
        className=" shadow-lg rounded-full w-[50px] h-[50px] object-contain"
      />
    ),
  },
  {
    title: "Express.js",
    percentage: 30,
    icon: (
      <Image
        src="/categories/ExpressJS.svg"
        width={50}
        height={50}
        alt="ExpressJS"
        className=" shadow-lg rounded-full w-[50px] h-[50px] object-contain"
      />
    ),
  },
  {
    title: "React hook form",
    percentage: 70,
    icon: (
      <Image
        src="/categories/react-hook-form.svg"
        width={50}
        height={50}
        alt="react hook form"
        className=" shadow-lg rounded-full w-[50px] h-[50px] object-cover"
      />
    ),
  },
  {
    title: "Jest",
    percentage: 50,
    icon: (
      <Image
        src="/categories/jest.svg"
        width={50}
        height={50}
        alt="Jest"
        className=" shadow-lg rounded-full w-[50px] h-[50px] object-cover"
      />
    ),
  },

  {
    title: "Git",
    percentage: 70,
    icon: (
      <Image
        src="/categories/GIT.svg"
        width={50}
        height={50}
        alt="Git"
        className=" shadow-lg rounded-full w-[50px] h-[50px] object-contain"
      />
    ),
  },
  {
    title: "Github",
    percentage: 70,
    icon: (
      <Image
        src="/categories/github.svg"
        width={50}
        height={50}
        alt="Github"
        className=" shadow-lg rounded-full w-[50px] h-[50px] object-contain"
      />
    ),
  },
  {
    title: "Jira",
    percentage: 70,
    icon: (
      <Image
        src="/categories/jira.svg"
        width={50}
        height={50}
        alt="Jira"
        className=" shadow-lg rounded-full w-[50px] h-[50px] object-contain"
      />
    ),
  },
  {
    title: "Projects",
    percentage: 100,
    icon: (
      <ChevronDown
        className="cursor-pointer animate-pulse"
        width={50}
        height={50}
      />
    ),
  },
];

export const floatingIcons = [
  {
    source: "/rocket.svg",
    width: 20,
    height: 20,
    animate: {
      translateY: 500,
      transition: { duration: 100 },
      translateX: -4000,
      rotate: -20,
      scale: -1,
    },
    className: "absolute top-[100px] right-[-200px] cursor-move rotate-45",
    image: {
      className: "rotate-[220deg]",
    },
  },

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
    className: "absolute top-0 left-0 cursor-move",
    image: {
      className: "",
    },
  },
  {
    source: "/categories/NextJS.svg",
    width: 50,
    height: 50,
    animate: {
      translateY: -500,
      rotate: 20,
      transition: { duration: 50 },
      scale: 1,
    },
    className: "absolute bottom-0 right-0 cursor-move",
    image: {
      className: "",
    },
  },
  {
    source: "/categories/tailwind.svg",
    width: 30,
    height: 30,
    animate: {
      translateX: 110,
      rotate: 360,
      translateY: 100,
      transition: { duration: 20 },
    },
    className: "absolute top-[20%] -left-[100px] cursor-move",
    image: {
      className: "",
    },
  },
  {
    source: "/categories/TypeScript.svg",
    width: 30,
    height: 30,
    animate: {
      translateX: -150,
      rotate: 30,
      transition: { duration: 20 },
      scale: 1,
    },
    className: "absolute top-[5%] -right-[100px] sm:-right-[150px] cursor-move",
    image: {
      className: "",
    },
  },
  {
    source: "/categories/JavaScript.svg",
    width: 40,
    height: 40,
    animate: {
      translateX: 50,
      translateY: 60,
      transition: { duration: 20 },
    },
    className: "absolute top-[50%] -left-[50px] cursor-move",
    image: {
      className: "",
    },
  },
  {
    source: "/categories/CSS.svg",
    width: 40,
    height: 40,
    animate: {
      translateX: 100,
      rotate: 180,
      translateY: 100,

      transition: { duration: 20 },
      scale: -1,
    },
    className: "absolute top-[35%] -left-[50px] cursor-move",
    image: {
      className: "",
    },
  },
  {
    source: "/categories/HTML.svg",
    width: 60,
    height: 60,
    animate: {
      translateX: 60,
      rotate: 180,
      transition: { duration: 30 },
      scale: -1,
    },
    className: "absolute top-[50%] -left-[50px] cursor-move",
    image: {
      className: "",
    },
  },
];
