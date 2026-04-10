import AuthLinks from "@/components/navigations/NavLinks";
import { SocialLinks } from "@/components/navigations/SocialLinks";
import { BlobAnimation } from "@/components/UI/BlobAnimation";
import Image from "next/image";
import React from "react";
import { Author } from "./Author";

function Greeting() {
  return (
    <div className="flex flex-col md:items-start lg:items-start items-center gap-8 relative">
      <BlobAnimation className="top-1/3 blur-2xl left-0 blob  w-[700px] h-[300px]" />
      <BlobAnimation className="bottom-10 blur-2xl right-0 blob2  w-[600px] h-[400px]" />
      <BlobAnimation className="bottom-10 blur-2xl right-0 blob3  w-[350px] h-[250px]" />

      <SocialLinks size={35} gap={32} />
      <div className="flex flex-col gap-2 md:text-left lg:text-left text-center">
        <div className="flex gap-2 items-center md:flex-row md:justify-start lg:justify-start  justify-center flex-col">
          <Author />

          <div className="flex items-center gap-1">
            <h3 className="dark:text-white font-semibold text-primary-400  z-10">
              Hi,
            </h3>
            <h3 className=" dark:text-primary-400  text-black z-10 font-semibold">
              I&apos;m Alex
            </h3>
          </div>
        </div>
        <div className="flex  gap-4 flex-col md:text-left lg:text-left text-center">
          <h4 className="dark:text-baseline-200 text-baseline-600 z-10">
            I&apos;m a
            <span className="dark:text-primary-400 text-black ml-1">
              Software Developer
            </span>
          </h4>

          <p className=" body-xl z-10 dark:text-baseline-200 text-baseline-600">
            Over the past few years, I&apos;ve been building and scaling
            <span className="text-primary-400 mx-1">frontend</span>
            software while actively taking
            <span className="text-primary-400 mx-1">backend</span>challenges .
          </p>
        </div>
      </div>
    </div>
  );
}

export default Greeting;
