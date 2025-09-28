"use client";
import React from "react";
import { Spacer } from "../UI/spacer/spacer";
import { Col, Row } from "../UI/Grid";
import { Button } from "../UI/Button/Button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { projectsData } from "@/consts/localDB";
import { ArrowDown } from "lucide-react";

function Projects() {
  return (
    <div>
      <Row>
        <Col lgOffset={2} lg={8}>
          <div className="flex justify-center ">
            <h2 className="text-center" data-aos="fade-left">
              Pro
            </h2>
            <h2 className=" text-primary-400" data-aos="fade-right">
              jects
            </h2>
          </div>
        </Col>
      </Row>

      <Spacer size={16} />
      <Row>
        {projectsData.map((data, index) => {
          return (
            <Col key={index} className="w-full lg:mb-96 mb-32" lg={12}>
              {index === 6 && (
                <div id="personal-projects">
                  <Spacer size={16} />
                  <div
                    className="flex gap-4  items-center justify-center"
                    data-aos="fade-up"
                  >
                    <h4>My personal projects below</h4>
                    <ArrowDown data-aos="fade-up" className="animate-pulse" />
                  </div>
                  <div className="w-full h-px dark:bg-white bg-black"></div>
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
                        "w-[450px]  text-sm  dark:text-baseline-100 whitespace-pre-wrap"
                      )}
                    >
                      {data.description}
                    </p>
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
                            <p
                              className="font-bold text-baseline-400"
                              key={index}
                            >
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
                      <div
                        className={"h-[0.5px] w-[50%] bg-black dark:bg-white"}
                      />
                    </div>
                    <div
                      className={cn(
                        index % 2 !== 0 && "justify-end",
                        "flex gap-4"
                      )}
                    >
                      <Link href={data.website} target="_blank">
                        <Button
                          className="text-primary-400 underline"
                          variant={"link"}
                        >
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
                    <div
                      data-aos="fade-right"
                      className="mt-8"
                      data-aos-delay={500}
                    >
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
            </Col>
          );
        })}
      </Row>
    </div>
  );
}

export default Projects;
