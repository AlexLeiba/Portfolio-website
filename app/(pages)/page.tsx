import { lazy } from "react";
import Hero from "@/components/components-pages/Hero/Hero";
import About from "@/components/components-pages/AboutSection/About";

import { Container } from "@/components/UI/Grid";
import { BlobAnimation } from "@/components/UI/BlobAnimation";

const LazySections = lazy(() =>
  import("@/components/components-pages/LazySections").then((m) => ({
    default: m.LazySections,
  })),
);

export default function Home() {
  return (
    <>
      <Hero />

      <Container variant={"fluid"} spacing="none" className="relative z-10">
        <BlobAnimation className="top-1/3 blur-2xl left-0 blob  w-[700px] h-[300px]" />
        <BlobAnimation className="bottom-10 blur-2xl right-0 blob2  w-[600px] h-[400px]" />
        <BlobAnimation className="bottom-10 blur-2xl right-0 blob3  w-[350px] h-[250px]" />
        <About />
      </Container>

      <Container variant={"fluid"} spacing="none" className="relative z-10">
        <LazySections />
      </Container>
    </>
  );
}
