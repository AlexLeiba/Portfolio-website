import React from "react";
import { motion } from "motion/react";
import { floatingIcons } from "@/consts/localDB";
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
