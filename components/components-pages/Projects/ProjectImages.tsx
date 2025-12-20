import { cn } from "@/lib/utils";
import React, { ComponentProps } from "react";

export const DesktopImage = ({
  children,
  className,
}: { children: React.ReactNode } & ComponentProps<"div">) => {
  return (
    <div
      className={cn(
        "relative lg:h-[350px]  aspect-video w-full hover:z-10 hover:scale-110 transition-all hover:shadow-2xl duration-500 ",
        className
      )}
    >
      {children}
    </div>
  );
};
export const MobileImage = ({
  children,
  className,
}: { children: React.ReactNode } & ComponentProps<"div">) => {
  return (
    <div
      className={cn(
        "relative w-[250px]  h-[500px] hover:z-10 hover:scale-110 transition-all hover:shadow-2xl duration-500",
        className
      )}
    >
      {children}
    </div>
  );
};
