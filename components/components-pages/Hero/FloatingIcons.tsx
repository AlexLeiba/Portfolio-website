import React from "react";
import { motion } from "motion/react";

import Image from "next/image";

function FloatingIcons() {
  return (
    <>
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
            alt="illustration"
            draggable="false"
            className={iconData.image.className}
          />
        </motion.div>
      ))}
    </>
  );
}

export default FloatingIcons;
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
