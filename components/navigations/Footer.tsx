import React from "react";
import { Col, Container, Row } from "../UI/Grid";
import Link from "next/link";
import { format } from "date-fns";
import { Spacer } from "../UI/spacer/spacer";

function footer() {
  return (
    <Container
      variant={"fluid"}
      spacing="none"
      className=" p-4 bg-baseline-100 dark:bg-baseline-950 "
    >
      <Container>
        <Row className="dark:text-white">
          <Col lg={5} md={2}>
            {/* Logo */}
            <div className="flex font-bold flex-col gap-2 ">
              <p className="text-xl font-bold">Portfolio</p>

              <p className="font-bold">
                Alexandru Leiba Lapteacru · {format(new Date(), "yyyy")}
              </p>
            </div>
            <Spacer sm={4} />
          </Col>
          <Col lg={2} lgOffset={1} md={2}>
            <p className="text-xl font-bold">Links</p>
            <div className="dark:text-baseline-200">
              <Link href="/" title="Hero">
                <p>Hero</p>
              </Link>
              <Link href="#about" title="About me">
                <p>About me</p>
              </Link>
              <Link href="#projects" title="My projects">
                <p>My projects</p>
              </Link>
              <Link href="#skills" title="Skills">
                <p>Skills</p>
              </Link>
              <Link href="#contact" title="Contact">
                <p>Contact</p>
              </Link>
            </div>
            <Spacer sm={4} md={4} />
          </Col>
          <Col lg={2} md={2}>
            <p className="text-xl font-bold">Tags</p>
            <div className="dark:text-baseline-200">
              <Link href="#about" title="Education">
                <p>Education</p>
              </Link>
              <Link href="#about" title="Languages">
                <p>Languages</p>
              </Link>
              <Link href="#about" title="Experience">
                <p>Experience</p>
              </Link>
              <Link href="#projects" title="Projects completed">
                <p>Projects completed</p>
              </Link>
            </div>
            <Spacer sm={4} />
          </Col>
          <Col lg={2} md={2}>
            <p className="text-xl font-bold">Social</p>

            <div className="dark:text-baseline-200">
              <Link
                href={`${process.env.NEXT_PUBLIC_GITHUB_URL}`}
                target="_blank"
                rel="noopener noreferrer"
                title="Github"
              >
                <p>Github</p>
              </Link>

              <Link
                href={`${process.env.NEXT_PUBLIC_LINKEDIN_URL}`}
                target="_blank"
                rel="noopener noreferrer"
                title="Linkedin"
              >
                <p>Linkedin</p>
              </Link>
              <Link
                href={`${process.env.NEXT_PUBLIC_EMAIL_URL}`}
                target="_blank"
                rel="noopener noreferrer"
                title="Gmail"
              >
                <p>Gmail</p>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default footer;
