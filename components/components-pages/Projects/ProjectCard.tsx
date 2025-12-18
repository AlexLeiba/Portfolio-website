"use client";
import React from "react";
import { Button } from "@/components/UI/Button/Button";
import { Spacer } from "@/components/UI/spacer/spacer";
import { ProjectsType } from "@/consts/localDB";
import { cn } from "@/lib/utils";
import { ArrowDown } from "lucide-react";
import Link from "next/link";
import { Description } from "./Description";
import Image from "next/image";
import { DesktopImage, MobileImage } from "./ProjectImages";

function ProjectCard({ data, index }: { data: ProjectsType; index: number }) {
  return (
    <div>
      {index === 5 && (
        <div id="personal-projects">
          <Spacer size={16} />
          <div data-aos="fade-up" className="flex flex-col gap-4">
            <div className="flex gap-4  items-center justify-end">
              <p className="text-xl ">Personal projects</p>
              <ArrowDown data-aos="fade-up" className="animate-pulse" />
            </div>
            <div className="w-full h-px dark:bg-white bg-black"></div>
          </div>
          <Spacer size={16} />
        </div>
      )}
      <div className="flex gap-12 justify-between items-center relative">
        {/* DESKTOP */}
        {index % 2 !== 0 && (
          <div className={cn(" md:hidden sm:hidden ")}>
            <div data-aos="fade-up">
              <DesktopImage>
                <Image
                  sizes="500px 250px"
                  className="w-full object-top object-cover shadow-lg"
                  src={data.icon.src}
                  fill
                  alt={data.icon.alt}
                />
              </DesktopImage>
            </div>

            <div
              data-aos="fade-left"
              className={cn(
                index === 8
                  ? "left-0 top-[412px]"
                  : "top-20 right-[550px] md:right-[300px]",
                "absolute"
              )}
              data-aos-delay={500}
            >
              <MobileImage className="">
                <Image
                  sizes="500px 250px"
                  fill
                  className=" object-cover object-top shadow-lg rounded-lg"
                  src={data.icon2.src}
                  alt={data.icon2.alt}
                />
              </MobileImage>
            </div>
          </div>
        )}

        <div
          className={cn(
            "flex flex-col gap-4 sm:w-full md:w-full",
            index % 2 !== 0 && " text-end "
          )}
          data-aos="fade-up"
        >
          <h5 className="font-bold text-primary-400">
            {index + 1 < 10 ? "0" + (index + 1) : index + 1}
          </h5>
          <h5 className="text-xl font-bold">{data.title}</h5>
          <div
            className={cn(
              index % 2 !== 0 ? "justify-end " : "justify-start ",
              "w-full flex mb-[110px]"
            )}
          >
            {/* <p className={"h-[110px]"}>{data.description}</p> */}
            <Description
              className={cn(
                index % 2 !== 0 ? "mr-2" : "ml-2",
                "w-[450px]  text-sm  dark:text-baseline-100 whitespace-pre-wrap absolute"
              )}
              description={data.description}
            />
          </div>
          <div className="flex gap-4 flex-col lg:w-[500px] w-full">
            <div
              className={cn(
                "flex gap-4 flex-wrap w-full",
                index % 2 !== 0 ? "justify-end " : "justify-start "
              )}
            >
              {data.techUsed.map((tech, index) => {
                return (
                  <div key={index}>
                    <p className="font-bold text-baseline-400" key={index}>
                      {tech}
                    </p>
                  </div>
                );
              })}
            </div>
            {/* SEPARATOR */}
            <div
              className={cn(
                "w-full flex",
                index % 2 !== 0 ? "justify-end" : "justify-start"
              )}
            >
              <div className={"h-[0.5px] w-[50%] bg-black dark:bg-white"} />
            </div>
            <div className={cn(index % 2 !== 0 && "justify-end", "flex gap-4")}>
              <Link href={data.website} target="_blank">
                <Button className="text-primary-400 underline" variant={"link"}>
                  Website
                </Button>
              </Link>
              {data.github && (
                <Link href={data.github} target="_blank">
                  <Button
                    className="text-primary-400 underline"
                    variant={"link"}
                  >
                    Github
                  </Button>
                </Link>
              )}
            </div>
          </div>
          {/* TABLET/MOBILE */}
          <div className="lg:hidden flex sm:flex-col w-full">
            <div data-aos="fade-up ">
              <DesktopImage>
                <Image
                  sizes="500px 250px"
                  className="w-full object-top object-cover shadow-lg"
                  src={data.icon.src}
                  alt={data.icon.alt}
                  fill
                />
              </DesktopImage>
            </div>
            <div data-aos="fade-right" className="mt-8" data-aos-delay={500}>
              <MobileImage>
                <Image
                  className=" object-cover object-top shadow-lg rounded-lg"
                  src={data.icon2.src}
                  fill
                  alt={data.icon2.alt}
                  sizes="500px 250px"
                />
              </MobileImage>
            </div>
          </div>
        </div>

        {/* DESKTOP */}
        {index % 2 === 0 && (
          <div
            className={cn(
              index === 8 && "mb-64",
              "md:w-[350px] md:hidden sm:hidden "
            )}
          >
            <div data-aos="fade-up">
              <DesktopImage>
                <Image
                  sizes="500px 250px"
                  className="w-full object-top object-cover shadow-lg"
                  src={data.icon.src}
                  fill
                  alt={data.icon.alt}
                />
              </DesktopImage>
            </div>

            <div
              className={cn(
                index === 8
                  ? "right-0 top-[412px]"
                  : "top-20 right-[430px] md:right-[300px]",
                "absolute"
              )}
              data-aos="fade-right"
              data-aos-delay={500}
            >
              <MobileImage
                className={cn(
                  index === 8 && "h-[370px]  aspect-video w-[657.77px]"
                )}
              >
                <Image
                  sizes="500px 250px"
                  className=" object-cover object-top shadow-lg rounded-lg"
                  src={data.icon2.src}
                  fill
                  alt={data.icon2.alt}
                />
              </MobileImage>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;
