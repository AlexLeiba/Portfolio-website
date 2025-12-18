"use client";
import React from "react";
import { Spacer } from "../../UI/spacer/spacer";
import { Col, Row } from "../../UI/Grid";
import { useRouter } from "next/navigation";
import { skillsData } from "@/consts/localDB";
import { SkillsCard } from "./SkillsCard";

function About() {
  const router = useRouter();
  // add circle animation on border on hover
  // add icons on hero: redux,nodejs,github
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
          return <SkillsCard key={data.link} data={data} index={index} />;
        })}
      </Row>
    </div>
  );
}

export default About;
