"use client";
import React, { useLayoutEffect } from "react";
import { Col, Container, Row } from "@/components/UI/Grid";
import { cn } from "@/lib/utils";
import { useTheme } from "@/hooks/useThemeContext";
import { DownloadPdf } from "./DownloadPdf";
import { UserIllustration } from "./UserIllustration";
import Greeting from "./Greeting";
import FloatingIcons from "./FloatingIcons";
import { Sphere } from "./Sphere";
import { Spacer } from "@/components/UI/spacer/spacer";

function Hero() {
  const { darkMode } = useTheme();

  return (
    <Container
      variant={"fluid"}
      className={cn(
        "relative overflow-hidden h-[calc(100vh)] flex flex-col justify-between items-center pb-0 lg:pb-0 md:pb-0",
      )}
    >
      <Row>
        <Col className="flex flex-col justify-between items-center">
          {/* Background */}
          <div
            className={cn(
              darkMode ? "backgroundDarkHero" : "backgroundLightHero",
            )}
          />

          <Sphere>
            <UserIllustration type="desktop" />
          </Sphere>

          <div className=" flex justify-center flex-col items-center z-40 h-full">
            <div className="font-bold text-center z-40 ">
              <Greeting />

              <DownloadPdf />
            </div>

            <FloatingIcons />
          </div>
        </Col>
      </Row>

      <UserIllustration type="mobile" />
    </Container>
  );
}

export default Hero;
