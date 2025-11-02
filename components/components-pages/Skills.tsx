"use client";
import React from "react";
import { Spacer } from "../UI/spacer/spacer";
import { Col, Row } from "../UI/Grid";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { skillsData } from "@/consts/localDB";

function About() {
  const router = useRouter();

  return (
    <div>
      <Row>
        <Col lgOffset={2} lg={8}>
          <div className="flex justify-center ">
            <h2 className="text-center" data-aos="fade-left">
              Ski
            </h2>
            <h2 className=" text-primary-400" data-aos="fade-right">
              lls
            </h2>
          </div>
        </Col>
      </Row>

      <Spacer size={16} />
      <Row>
        {skillsData.map((data, index) => {
          return (
            <Col key={index} className="w-full lg:mb-6 mb-3 " lg={2} md={2}>
              <div
                data-aos-delay={index * 10}
                data-aos="fade-up"
                onClick={() =>
                  data.title === "Projects"
                    ? router.push("#projects")
                    : () => {}
                }
                className={cn(
                  data.title === "Projects" && "cursor-pointer",
                  "dark:bg-baseline-900 bg-baseline-50 w-full lg:h-24 rounded-xl mb-2 gap-4 shadow-lg"
                )}
              >
                <div
                  style={{
                    background: `linear-gradient(to right, #7493f0 ${data.percentage}% , transparent 10%)`,
                  }}
                  key={index}
                  className={cn(
                    " flex justify-center items-center gap-4 border mb-2 border-primary-200  h-full p-2 rounded-xl flex-wrap overflow-hidden"
                  )}
                >
                  <div className="flex items-center  gap-2">
                    <div className="flex items-center justify-center gap-2">
                      <p className="text-black dark:text-white  body-base text-center  font-bold font-mono">
                        {data.title}
                      </p>

                      {data.icon}
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          );
        })}
      </Row>
    </div>
  );
}

export default About;
