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
      ".hero-illustration-dark",
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
        <div className="absolute z-10 -top-[290px] left-[50%]  -translate-x-1/2 ">
          <div className=" relative w-[600px] h-[300px]">
            <Image
              className="object-contain  hover:drop-shadow-[white_0px_4px_10px] lightBulb dark:block hidden"
              src={"/user/lightBulbOn.svg"}
              alt="illustration"
              draggable="false"
              width={30}
              height={30}
              fetchPriority="high"
              priority
              unoptimized
            />
            <Image
              className="object-contain hover:drop-shadow-[white_0px_4px_10px] dark:hidden block  lightBulb "
              src={"/user/lightBulbOff.svg"}
              alt="illustration"
              draggable="false"
              width={30}
              height={30}
              fetchPriority="high"
              priority
              unoptimized
            />

            <Image
              className="object-contain object-top   hero-illustration-dark hidden dark:block"
              src={"/user/user-dark.webp"}
              alt="illustration"
              draggable="false"
              fill
              fetchPriority="high"
            />

            <Image
              fetchPriority="high"
              className="object-contain object-top dark:hidden block"
              src={"/user/user-light.webp"}
              alt="illustration"
              draggable="false"
              fill
            />
          </div>
        </div>
      ) : (
        // mobile
        <></>
      )}
    </>
  );
}
