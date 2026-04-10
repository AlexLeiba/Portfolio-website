import Image from "next/image";
import React from "react";
import { DownloadPdf } from "./DownloadPdf";

export function Author() {
  return (
    <div className="relative">
      <Image
        alt="Author"
        width={200}
        height={200}
        src={"/author.jpg"}
        className="object-cover rounded-full w-[150px] h-[150px] border-2 border-primary-400 "
      />
      <div className="absolute bottom-0 right-0 z-10">
        <DownloadPdf />
      </div>
    </div>
  );
}
