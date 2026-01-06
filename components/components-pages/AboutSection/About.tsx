"use client";
import React from "react";
import { Spacer } from "../../UI/spacer/spacer";
import { ChevronDown } from "lucide-react";
import { Col, Row } from "../../UI/Grid";
import { Button } from "../../UI/Button/Button";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { aboutMeData } from "@/consts/localDB";
import { AboutCard } from "./AboutCard";
import { BackgroundGradientAnimation } from "@/components/UI/BackgroundGradientAnimation";

function About() {
  const router = useRouter();
  const [showMore, setShowMore] = React.useState(false);

  function handleShowMoreOrLess() {
    setShowMore((prev) => !prev);
  }
  return (
    <>
      <Row>
        <Col lgOffset={2} lg={8}>
          <div className="flex justify-center gap-4">
            <h2 className="text-center" data-aos="fade-left">
              About
            </h2>
            <h2 className=" text-primary-400" data-aos="fade-right">
              me
            </h2>
          </div>
          <Spacer size={16} />

          <p
            className={cn(
              "body-lg text-center line-clamp-2",
              showMore ? "line-clamp-none" : "line-clamp-2"
            )}
          >
            My name is Alexandru Leiba Lapteacru, and I am a Front-End Developer
            passionate about creating tools that enhance user experiences and
            solve real-world problems. I consider myself a creative person, and
            this field allows me to design functionalities, craft intuitive
            interfaces, and bring ideas to life—something that gives me a deep
            sense of fulfillment. I also have experience working on large-scale
            projects with cross-functional teams, where effective communication
            and collaboration were key to achieving the best results.
          </p>

          <div
            data-aos="fade-up"
            className="flex gap-1 items-center cursor-pointer"
            onClick={handleShowMoreOrLess}
          >
            <Button variant={"link"} className="text-primary-400">
              {showMore ? "Show less" : "Show more"}
            </Button>
            <ChevronDown
              width={20}
              height={20}
              className={cn(
                "transition-all",
                showMore ? "rotate-180" : "rotate-0"
              )}
            />
          </div>
        </Col>
      </Row>

      <Spacer size={16} />
      <Row>
        {aboutMeData.map((data, index) => {
          return (
            <Col key={index} lg={data.col}>
              <div data-aos-delay={index * 100} data-aos="fade-up">
                <AboutCard data={data} />
              </div>
            </Col>
          );
        })}
        <Col>
          <div
            data-aos-delay={100}
            data-aos="fade-left"
            onClick={() => router.push("#skills")}
            className={cn([
              "cursor-pointer flex justify-center items-center  gap-4 dark:border mb-4 border-primary-200 pb-4  p-4 rounded-xl flex-wrap  shadow-lg  ",
              "conic-gradient-parent relative z-20 ",
            ])}
          >
            {/* GRADIENT */}
            <BackgroundGradientAnimation
              className="-inset-[2px] "
              classNameBackground=" rounded-[10px] dark:rounded-[12px]"
            />
            <p className="text-primary-400 z-20 text-xl">Skills</p>
            <ChevronDown
              className="text-primary-400 animate-pulse z-20"
              width={50}
              height={50}
            />
          </div>
        </Col>
      </Row>
    </>
  );
}

export default About;
