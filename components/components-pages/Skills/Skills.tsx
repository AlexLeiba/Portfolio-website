"use client";
import React from "react";
import { Spacer } from "../../UI/spacer/spacer";
import { Col, Container, Row } from "../../UI/Grid";
import { skillsData } from "@/consts/localDB";
import { SkillsCard } from "./SkillsCard";
import { BlobAnimation } from "@/components/UI/BlobAnimation";

function About() {
  return (
    <Row className="flex flex-col relative">
      <BlobAnimation className="top-1/2 blur-2xl left-1/2 translate-x-1/2 blob  w-[800px] h-[300px]" />
      <BlobAnimation className="bottom-1/4 blur-2xl left-1/4 translate-x-1/2 blob2  w-[700px] h-[400px]" />
      <Container id="skills">
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
            return <SkillsCard key={data.link} data={data} index={index} />;
          })}
        </Row>
      </Container>
    </Row>
  );
}

export default About;
