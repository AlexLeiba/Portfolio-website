"use client";
import { Col } from "@/components/UI/Grid";
import { COLORS } from "@/consts/colors";
import { SkillsType } from "@/consts/localDB";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

type Props = {
  data: SkillsType;
  index: number;
};
export function SkillsCard({ data, index }: Props) {
  const router = useRouter();

  return (
    <Col key={index} className="w-full lg:mb-6 mb-3 " lg={2} md={2}>
      <div
        data-aos-delay={index * 10}
        data-aos="fade-up"
        className={cn(
          data.title === "Projects" && "cursor-pointer",
          "dark:bg-baseline-900 bg-baseline-50 z-10 w-full lg:h-24 rounded-xl mb-2 gap-4 shadow-lg  transition-transform duration-200 ease-out will-change-transform  group relative skillCard "
        )}
      >
        <Link
          href={data.link}
          target={data.title === "Projects" ? "_self" : "_blank"}
          title={data.linkTitle}
        >
          <div
            style={{
              background: `linear-gradient(to right,${COLORS.blueLight},${COLORS.blueLight},${COLORS.blueDark},${data.percentage}% , transparent 10%)`,
            }}
            key={index}
            className={cn([
              " flex justify-center items-center gap-4 border mb-2  border-primary-200  h-full p-2 rounded-xl flex-wrap overflow-hidden",
              "",
            ])}
          >
            {/* GRADIENT */}
            <div className="absolute  -inset-[2px] rounded-[14px]   conic-gradient"></div>
            {/*  */}

            {/* CONTENT */}
            <div className="flex items-center  ">
              <div className="flex md:flex-col lg:flex-col items-center justify-center gap-2">
                <p className="text-white  body-base  font-bold font-mono shadow-text-base">
                  {data.title}
                </p>
                <div className="gap-2 group-hover:scale-125 transition-transform duration-1000 ease-out ">
                  {data.icon}
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </Col>
  );
}
