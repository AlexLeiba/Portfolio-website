import Image from "next/image";
import React from "react";
import { DownloadPdf } from "./DownloadPdf";

export function Author() {
  return (
    <div className="relative">
      <Image
        alt="Author"
        width={300}
        height={300}
        src={"/author.png"}
        className="object-cover object-top rounded-full lg:w-[250px] lg:h-[250px] h-[150px] w-[150px] border-2 border-primary-400 "
      />
      <div className="absolute bottom-0 right-0 z-10">
        <DownloadPdf />
      </div>
    </div>
  );
}
