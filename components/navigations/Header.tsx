"use client";
import React, { useEffect, useRef } from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import ThemeToggle from "../ThemeToggle";
import { Col, Container, Row } from "../UI/Grid";
import Link from "next/link";
import AuthLinks from "./NavLinks";
import { cn } from "@/lib/utils";
import { ProgressBar } from "../ProgressBar";

function Header() {
  const [isVisible, setIsVisible] = React.useState(true);
  const prevScrollRef = useRef(0);
  useEffect(() => {
    function handleHeaderOnScroll() {
      const currentScroll = window.pageYOffset;

      if (currentScroll <= 120) {
        setIsVisible(true);
        return;
      }
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
        " p-4  dark:bg-black bg-[#6b8dff]  fixed top-0 left-0 right-0  z-50 transition-all ease-in-out duration-300 "
      )}
    >
      <Container spacing="none" variant={"fluid"} className="">
        <Row>
          <Container spacing="none">
            <Row>
              <Col className="relative flex justify-between items-center ">
                {/* Social Icons */}
                <div className="flex gap-4 dark:text-white">
                  <Link
                    title="Github"
                    href={`${process.env.NEXT_PUBLIC_GITHUB_URL}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github width={20} height={20} cursor={"pointer"} />
                  </Link>
                  <Link
                    title="Gmail"
                    href={`${process.env.NEXT_PUBLIC_EMAIL_URL}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Mail width={20} height={20} cursor={"pointer"} />
                  </Link>
                  <Link
                    title="Linkedin"
                    href={`${process.env.NEXT_PUBLIC_LINKEDIN_URL}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin width={20} height={20} cursor={"pointer"} />
                  </Link>
                </div>

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
