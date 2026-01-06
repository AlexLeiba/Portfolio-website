"use client";
import React from "react";
import { Button } from "@/components/UI/Button/Button";
import { ProjectsType } from "@/consts/localDB";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Description } from "./Description";
import Image from "next/image";
import { DesktopImage, MobileImage } from "./ProjectImages";
import { PersonalProjectsIndicator } from "./PersonalProjectsIndicator";

function ProjectCard({ data, index }: { data: ProjectsType; index: number }) {
  return (
    <div>
      {index === 6 && <PersonalProjectsIndicator />}

      <div className="flex gap-12 justify-between items-center relative">
        {/* DESKTOP */}
        {index % 2 !== 0 && (
          <div
            className={cn(
              index === 9 && "mb-64",
              "md:w-[350px] md:hidden sm:hidden "
            )}
          >
            <div data-aos="fade-up w-full">
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
                index === 9
                  ? "left-0 top-[412px]"
                  : "top-20 right-[430px] md:right-[300px]",
                "absolute"
              )}
              data-aos-delay={500}
            >
              <MobileImage
                className={cn(
                  index === 9 && "h-[370px]  aspect-video w-[622.22px]"
                )}
              >
                <Image
                  sizes="500px 250px"
                  className={cn(
                    " object-cover object-top shadow-lg ",
                    index !== 9 && "rounded-lg"
                  )}
                  fill
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
          <p className="font-bold text-primary-400 !text-2xl">
            {index + 1 < 10 ? "0" + (index + 1) : index + 1}
          </p>
          <p className="text-xl font-bold">{data.title}</p>
          <div
            className={cn(
              index % 2 !== 0 ? "justify-end " : "justify-start ",
              "w-full flex mb-[110px]"
            )}
          >
            <Description
              className={cn(
                index % 2 !== 0 ? "lg:mr-2 md:mr-2" : "lg:ml-2 md:ml-2",
                "max-w-[415px]  text-sm  dark:text-baseline-100 whitespace-pre-wrap absolute"
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
            <div data-aos="fade-up " className="w-full">
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
            <div
              data-aos="fade-right"
              className="mt-8 w-full"
              data-aos-delay={500}
            >
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
              index === 0 && "mb-64",
              "md:w-[350px] md:hidden sm:hidden "
            )}
          >
            <div data-aos="fade-up w-full">
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
                index === 0
                  ? "right-0 top-[412px]"
                  : "top-20 right-[430px] md:right-[300px]",
                "absolute"
              )}
              data-aos="fade-right"
              data-aos-delay={500}
            >
              <MobileImage
                className={cn(
                  index === 0 && "h-[370px]  aspect-video w-[622.22px]"
                )}
              >
                <Image
                  sizes="500px 250px"
                  className={cn(
                    " object-cover object-top shadow-lg ",
                    index !== 0 && "rounded-lg"
                  )}
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
