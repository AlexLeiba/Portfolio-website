import { Button } from "@/components/UI/Button/Button";
import { FileDown } from "lucide-react";
import React from "react";

export function DownloadPdf() {
  function handleDownloadPdf() {
    // pdf link
    const pdfUrl = process.env.NEXT_PUBLIC_PDF_LINK;

    const link = document.createElement("a");
    link.href = pdfUrl ? pdfUrl : "";
    link.download = "alexandru-leiba-lapteacru-cv.pdf";
    link.click();
  }
  return (
    <div className="flex justify-center items-center flex-col  animation-delay-1000 animate-pulse  z-20">
      <Button
        title="Download my resume"
        aria-label="Download my resume"
        variant={"link"}
        className="flex flex-col justify-center items-center cursor-pointer  drop-shadow-[white_0px_4px_10px] transition-all"
        onClick={handleDownloadPdf}
      >
        <FileDown
          width={50}
          height={50}
          className=" dark:text-white text-baseline-600 hover:text-primary-600 dark:hover:text-primary-600"
        />
      </Button>
    </div>
  );
}
