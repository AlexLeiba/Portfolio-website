import { BlobAnimation } from "@/components/UI/BlobAnimation";
import React from "react";
import { Author } from "./Author";
import { SocialLinks } from "./SocialLinks";
import { TypeAnimation } from "react-type-animation";
import { Button } from "@/components/UI/Button/Button";

function Greeting() {
  function handleDownloadPdf() {
    // pdf link
    const pdfUrl = process.env.NEXT_PUBLIC_PDF_LINK;

    const link = document.createElement("a");
    link.href = pdfUrl ? pdfUrl : "";
    link.download = "alexandru-leiba-lapteacru-cv.pdf";
    link.click();
  }
  return (
    <div className="flex flex-col md:items-start lg:items-start items-center gap-8 relative">
      <BlobAnimation className="top-1/3 blur-2xl left-0 blob  w-[700px] h-[300px]" />
      <BlobAnimation className="bottom-10 blur-2xl right-0 blob2  w-[600px] h-[400px]" />
      <BlobAnimation className="bottom-10 blur-2xl right-0 blob3  w-[350px] h-[250px]" />

      <SocialLinks size={35} gap={32} />
      <div className="flex flex-col  gap-2 md:text-left lg:text-left text-center">
        <div className="flex gap-2 items-center md:flex-row lg:flex-row md:justify-start lg:justify-start  justify-center flex-col">
          <Author />

          <div className="flex items-center gap-1">
            <TypeAnimation
              sequence={[
                "Hi,",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
              ]}
              wrapper="h4"
              speed={50}
              // style={{ fontSize: "2em", display: "inline-block" }}
              className="dark:text-white font-semibold text-primary-400  z-10 h-[20px]"
              repeat={1}
              cursor={false}
            />
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                1000,
                "I'm Alex",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
              ]}
              wrapper="h4"
              speed={50}
              // style={{ fontSize: "2em", display: "inline-block" }}
              className="dark:text-primary-400  text-black z-10 font-semibold h-[20px]"
              repeat={1}
              cursor={false}
            />
            {/* <h3
              className="dark:text-white font-semibold text-primary-400  z-10"
              data-aos="fade-"
            ></h3>
            <h3 className=" dark:text-primary-400  text-black z-10 font-semibold">
              I&apos;m Alex
            </h3> */}
          </div>
        </div>
        <div className="flex  gap-2 flex-col md:text-left lg:text-left text-center">
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              2000,
              "I'm a",
              1000, // wait 1s before replacing "Mice" with "Hamsters"
            ]}
            wrapper="h5"
            speed={40}
            // style={{ fontSize: "2em", display: "inline-block" }}
            className="dark:text-baseline-200 text-baseline-600 z-10 md:h-[30px] lg:h-[40px] h-[20px]"
            repeat={1}
            cursor={false}
          />
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              2500,
              "Software Developer",
              2000, // wait 1s before replacing "Mice" with "Hamsters"
              "React.js Developer",
              2000,
              "Node.js Developer",
              2000,
            ]}
            wrapper="h5"
            speed={50}
            className="dark:text-primary-400 text-black h-[30px] md:h-[30px] lg:h-[40px]"
            repeat={Infinity}
            cursor={true}
          />

          <div className="flex flex-col">
            <p className=" lg:text-xl md:text-xl z-10 dark:text-baseline-200 text-baseline-600 text-balance">
              Over the past few years, I&apos;ve been building and scaling
              <span className="text-primary-400 mx-1">frontend</span>
              software while actively taking
              <span className="text-primary-400 mx-1">backend</span>challenges .
            </p>

            <div className="flex gap-1 md:justify-start lg:justify-start justify-center">
              <p className="text-xl">download my</p>
              <Button
                onClick={handleDownloadPdf}
                title="Download my pdf resume"
                aria-label="Download my pdf resume"
                className="animate-pulse"
                variant={"link"}
              >
                <p className="text-primary-500 text-xl font-semibold">
                  pdf resume here
                </p>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Greeting;
