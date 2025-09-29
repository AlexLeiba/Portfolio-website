"use client";
import React from "react";
import { Spacer } from "../../UI/spacer/spacer";
import { Col, Row } from "../../UI/Grid";
import { Button } from "../../UI/Button/Button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { projectsData } from "@/consts/localDB";
import { ArrowDown } from "lucide-react";
import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <div>
      <Row>
        <Col lgOffset={2} lg={8}>
          <div className="flex justify-center ">
            <h2 className="text-center" data-aos="fade-left">
              Pro
            </h2>
            <h2 className=" text-primary-400" data-aos="fade-right">
              jects
            </h2>
          </div>
        </Col>
      </Row>

      <Spacer size={16} />
      <Row>
        {projectsData.map((data, index) => {
          return (
            <Col key={data.id} className="w-full lg:mb-96 mb-32" lg={12}>
              <ProjectCard data={data} index={index} />
            </Col>
          );
        })}
      </Row>
    </div>
  );
}

export default Projects;
