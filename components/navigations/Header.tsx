"use client";
import React, { useEffect, useRef, useState } from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import ThemeToggle from "../ThemeToggle";
import { Col, Container, Row } from "../UI/Grid";
import Link from "next/link";
import AuthLinks from "./NavLinks";
import { cn } from "@/lib/utils";
import { ProgressBar } from "../ProgressBar";
import { SocialLinks } from "./SocialLinks";

function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [isOnTop, setIsOnTop] = useState(false);

  const prevScrollRef = useRef(0);
  useEffect(() => {
    function handleHeaderOnScroll() {
      const currentScroll = window.pageYOffset;

      if (currentScroll <= 120) {
        setIsVisible(true);
        setIsOnTop(true);
        return;
      }
      setIsOnTop(false);
      if (currentScroll > prevScrollRef.current) {
        setIsVisible(false);
        prevScrollRef.current = currentScroll;
      }

      if (currentScroll < prevScrollRef.current) {
        setIsVisible(true);
        prevScrollRef.current = currentScroll;
      }
    }

    document.addEventListener("scroll", handleHeaderOnScroll);

    return () => window.removeEventListener("scroll", handleHeaderOnScroll);
  }, []);

  return (
    <div
      className={cn(
        isVisible ? "translate-y-0" : "-translate-y-[54px]",
        isOnTop ? "bg-blend-saturation" : "bg-[#abbefd] ",
        " p-4  dark:bg-black  fixed top-0 left-0 right-0  z-50 transition-all ease-in-out duration-300 ",
      )}
    >
      <Container spacing="none" variant={"fluid"} className="">
        <Row>
          <Container spacing="none">
            <Row>
              <Col className="relative flex justify-between items-center ">
                {/* Social Icons */}
                <SocialLinks size={20} gap={16} />

                {/* Links */}
                <div className="flex gap-4">
                  <ThemeToggle />
                  <AuthLinks />
                </div>
              </Col>
            </Row>
          </Container>
        </Row>
      </Container>
      <ProgressBar />
    </div>
  );
}

export default Header;
