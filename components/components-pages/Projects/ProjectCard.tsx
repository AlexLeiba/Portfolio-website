"use client";
import { Button } from "@/components/UI/Button/Button";
import { Spacer } from "@/components/UI/spacer/spacer";
import { ProjectsType } from "@/consts/localDB";
import { cn } from "@/lib/utils";
import { ArrowDown, ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { Description } from "./Description";

function ProjectCard({ data, index }: { data: ProjectsType; index: number }) {
  const [expnded, setExpanded] = useState(false);

  //   function expandDescription(description: string) {
  //     return (
  //       <div>
  //         <p>
  //           {description.substring(0, expnded ? description.length : 100) +
  //           expnded
  //             ? "..."
  //             : ""}
  //         </p>
  //         <Button
  //           variant={"link"}
  //           className="text-primary-400"
  //           onClick={() => setExpanded(!expnded)}
  //         >
  //           <p>{expnded ? "Read less" : "Read more"}</p>
  //           {expnded ? <ChevronUp /> : <ChevronDown />}
  //         </Button>
  //       </div>
  //     );
  //   }
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
          <div
            className={cn(
              data.id === 10 && "mb-64",
              "md:w-[350px] md:hidden sm:hidden "
            )}
          >
            <div data-aos="fade-up">{data.icon}</div>
            <div
              data-aos="fade-left"
              className={cn(
                data.id === 10
                  ? "left-0 top-[412px]"
                  : "top-20 right-[500px] md:right-[300px]",
                "absolute"
              )}
              data-aos-delay={500}
            >
              {data.icon2}
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
            {data.id < 10 ? "0" + data.id : data.id}
          </h5>
          <h5 className="text-xl font-bold">{data.title}</h5>
          <div
            className={cn(
              index % 2 !== 0 ? "justify-end " : "justify-start ",
              "w-full flex "
            )}
          >
            <p
              className={cn(
                index % 2 !== 0 ? "mr-4" : "ml-4",
                "w-[450px]  text-sm  dark:text-baseline-100 whitespace-pre-wrap",
                "md:block lg:block hidden"
              )}
            >
              {data.description}
            </p>
            <Description
              className={cn(
                index % 2 !== 0 ? "mr-4" : "ml-4",
                "w-[450px]  text-sm  dark:text-baseline-100 whitespace-pre-wrap",
                "lg:hidden md:hidden"
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
            <div data-aos="fade-up ">{data.icon}</div>
            <div data-aos="fade-right" className="mt-8" data-aos-delay={500}>
              {data.icon2}
            </div>
          </div>
        </div>

        {/* DESKTOP */}
        {index % 2 === 0 && (
          <div
            className={cn(
              data.id === 10 && "mb-64",
              "md:w-[350px] md:hidden sm:hidden "
            )}
          >
            <div data-aos="fade-up">{data.icon}</div>
            <div
              // className='absolute '
              className={cn(
                data.id === 10
                  ? "right-0 top-[412px]"
                  : "top-20 right-[430px] md:right-[300px]",
                "absolute"
              )}
              data-aos="fade-right"
              data-aos-delay={500}
            >
              {data.icon2}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;
