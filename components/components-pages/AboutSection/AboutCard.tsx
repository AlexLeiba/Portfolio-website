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
        "bg-black flex border mb-4 border-primary-200 z-20  lg:items-center lg:h-56 min-h-72 p-4 rounded-xl flex-wrap  shadow-lg ",
        "conic-gradient-parent relative",
      ])}
    >
      <div className=" flex items-start   lg:gap-6 md:gap-6 gap-2  h-full w-full lg:flex-row md:flex-row  flex-col ">
        {/* Icon */}
        <div>{data.icon}</div>
        {/* GRADIENT */}
        <BackgroundGradientAnimation
          className="-inset-[2px] rounded-xl"
          classNameBackground="rounded-[10px] dark:rounded-[12px]"
        />

        {/* Content */}
        <div className="flex justify-start w-full z-20">
          <div className="flex flex-col gap-2 justify-between h-full">
            <h5 className="text-primary-400 ">{data.title}</h5>

            <div className="flex gap-4 flex-wrap lg:h-[115px] md:h-[80px] items-center">
              {data.description.map((description, index) => {
                return (
                  <div key={index} className="flex flex-col gap-2">
                    {description.link ? (
                      <Link href={description.link}>
                        <p className="body-base font-bold  underline-offset-4 underline text-xl">
                          {description.title}
                        </p>
                      </Link>
                    ) : (
                      <p className="body-base font-bold">{description.title}</p>
                    )}

                    {description.description.map((desc, index) => (
                      <p className="body-base ml-2" key={index}>
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
