"use client";
import React from "react";
import { Container } from "@/components/UI/Grid";
import { cn } from "@/lib/utils";

import Greeting from "./Greeting";
import { Button } from "@/components/UI/Button/Button";
import { ArrowBigRight, ChevronsDown } from "lucide-react";
import Link from "next/link";

function Hero() {
  return (
    <Container
      variant={"fluid"}
      className={cn("relative overflow-hidden h-[calc(100vh-58px)] ")}
    >
      {/* <div
        className={cn(darkMode ? "backgroundDarkHero" : "backgroundLightHero")}
      /> */}
      <Container className="flex flex-col  items-start justify-center gap-8 h-full relative z-10">
        <Greeting />
        <div className="flex items-center gap-8 ">
          <Link href={"#contact"}>
            <Button
              size="large"
              variant="primary"
              className="group bg-gradient-to-r from-primary-400 to-primary-600 hover:opacity-90"
              rightIcon={
                <ArrowBigRight className="ml-2 group-hover:translate-x-6 transition-all duration-500 " />
              }
            >
              <p className=" font-semibold">Get in touch</p>
            </Button>
          </Link>
        </div>
      </Container>
      <div className="flex justify-center">
        <Link href={"#about"}>
          <Button className="hover:animate-bounce " variant={"link"}>
            <ChevronsDown
              size={30}
              className="dark:text-white drop-shadow-[white_0px_4px_10px] transition-all  animate-pulse"
            />
          </Button>
        </Link>
      </div>
    </Container>
  );
}

export default Hero;
