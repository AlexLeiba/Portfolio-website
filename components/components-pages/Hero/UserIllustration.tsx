import React, { useEffect, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
type Props = {
  type: "mobile" | "desktop";
};
export function UserIllustration({ type }: Props) {
  const [lightBulb, setLightBulb] = useState(false);
  useEffect(() => {
    const darkImages = document.querySelectorAll<HTMLImageElement>(
      ".hero-illustration-dark"
    );

    if (!darkImages) return;

    let timeoutId: ReturnType<typeof setTimeout>;
    darkImages.forEach((img) => {
      timeoutId = setTimeout(() => {
        img.style.opacity = "1";
      }, 500);
    });

    const timeoutId2 = setTimeout(() => {
      setLightBulb(true);
    }, 3000);

    return () => {
      clearTimeout(timeoutId);
      clearTimeout(timeoutId2);
    };
  }, []);
  return (
    <>
      {type === "desktop" ? (
        <div className="absolute z-10 bottom-[95%]  left-[50%]  -translate-x-1/2 ">
          <button onClick={() => setLightBulb((prev) => !prev)}>
            {/* Light bulb */}
            {lightBulb ? (
              <Image
                className="object-contain  hover:drop-shadow-[white_0px_4px_10px] lightBulb "
                src={"/user/lightBulbOn.svg"}
                alt="illustration"
                draggable="false"
                width={30}
                height={30}
                fetchPriority="high"
                loading="lazy"
                unoptimized
              />
            ) : (
              <Image
                className="object-contain hover:drop-shadow-[white_0px_4px_10px] lightBulb "
                src={"/user/lightBulbOff.svg"}
                alt="illustration"
                draggable="false"
                width={30}
                height={30}
                fetchPriority="high"
                loading="lazy"
                unoptimized
              />
            )}
          </button>

          <div className=" relative lg:w-[500px] lg:h-[400px]  md:h-[400px] md:w-[500px] w-[200px] h-[400px]   ">
            <Image
              className="object-contain object-top  dark:opacity-100  opacity-0  hero-illustration-dark"
              src={"/user/lightOffUser.svg"}
              alt="illustration"
              draggable="false"
              fill
              unoptimized
            />
            {!lightBulb ? (
              <Image
                className="object-contain object-top  opacity-0 hero-illustration-dark"
                src={"/user/darkUser.svg"}
                alt="illustration"
                draggable="false"
                fill
                fetchPriority="high"
              />
            ) : (
              <Image
                className="object-contain object-top dark:opacity-0 opacity-100"
                src={"/user/lightOnUser.svg"}
                alt="illustration"
                draggable="false"
                fill
                loading="lazy"
                fetchPriority="high"
              />
            )}

            <Image
              className="object-contain object-top dark:opacity-0 opacity-100"
              src={"/user/lightUser.svg"}
              alt="illustration"
              draggable="false"
              fill
            />
          </div>
        </div>
      ) : (
        <div
        // className={cn(
        //   " relative lg:w-[450px] lg:h-[350px]  h-[350px] w-[400px] sm:w-[300px] sm:h-[270px]   ",
        //   "lg:hidden md:hidden block  "
        // )}
        >
          {/* <Image
            className="object-contain object-top  dark:opacity-100  opacity-0  hero-illustration-dark"
            src={"/user/Darkness-2.webp"}
            alt="illustration"
            draggable="false"
            fill
          />
          <Image
            className="object-contain object-top opacity-0 hero-illustration-dark"
            src={"/user/Dark-Theme.webp"}
            alt="illustration"
            draggable="false"
            fill
          />
          <Image
            className="object-contain object-top dark:opacity-0 opacity-100"
            src={"/user/Light-Theme.webp"}
            alt="illustration"
            draggable="false"
            fill
          /> */}
        </div>
      )}
    </>
  );
}
