import { Spacer } from "@/components/UI/spacer/spacer";
import { ArrowDown } from "lucide-react";
import React from "react";

export function PersonalProjectsIndicator() {
  return (
    <div id="personal-projects">
      <Spacer size={16} />
      <div data-aos="fade-up" className="flex flex-col gap-4">
        <div className="flex gap-4  items-center justify-end">
          <p className="text-xl ">Personal projects</p>
          <ArrowDown data-aos="fade-up" className="animate-pulse" />
        </div>
        <div className="w-full h-px dark:bg-white bg-black"></div>
      </div>
      <Spacer size={16} />
    </div>
  );
}
