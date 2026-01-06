import { BackgroundGradientAnimation } from "@/components/UI/BackgroundGradientAnimation";
import { AboutMeType } from "@/consts/localDB";
import { cn } from "@/lib/utils";
import Link from "next/link";

type AboutCardProps = {
  data: AboutMeType;
} & React.HTMLAttributes<HTMLDivElement>;
export function AboutCard({ data }: AboutCardProps) {
  return (
    <div
      className={cn([
        " flex dark:border-[0.2px] mb-4 border-primary-200 z-20  lg:items-center  px-6 py-4 rounded-xl lg:min-h-[250px] flex-wrap  shadow-lg ",
        "conic-gradient-parent relative z-50 backdrop-blur-xl",
      ])}
    >
      <div className=" flex items-start   lg:gap-6 md:gap-6 gap-2  h-full w-full lg:flex-row md:flex-row  flex-col ">
        {/* ICON */}
        <div className=" z-50">{data.icon}</div>
        {/* GRADIENT */}

        <div className="flex justify-start w-full z-20 ">
          <div className="flex flex-col gap-2 justify-between h-full">
            <p className="text-primary-400 text-2xl ">{data.title}</p>

            <div className="flex gap-4 flex-wrap lg:min-h-[115px] md:min-h-[80px] items-center">
              {data.description.map((description, index) => {
                return (
                  <div key={index} className="flex flex-col gap-2 ">
                    {description.link ? (
                      <Link href={description.link}>
                        <p className="body-base font-bold  underline-offset-4 underline text-xl">
                          {description.title}
                        </p>
                      </Link>
                    ) : (
                      <p className="body-xl font-bold">{description.title}</p>
                    )}

                    {description.description.map((desc, index) => (
                      <p className="body-xl ml-2" key={index}>
                        {desc}
                      </p>
                    ))}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
