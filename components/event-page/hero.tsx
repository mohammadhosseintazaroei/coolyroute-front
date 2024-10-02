"use client";

import { EventModel } from "@/__generated__/graphql";
import Image from "next/image";
import { Heart, Share2 } from "react-feather";
import { tv } from "tailwind-variants";
interface Props {
  data: EventModel;
}
const eventHero = tv({
  slots: {
    base: "md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-gray-900",
    avatar:
      "w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto drop-shadow-lg",
    wrapper: "flex-1 pt-6 md:p-8 text-center md:text-left space-y-4",
    description: "text-md font-medium",
    infoWrapper: "font-medium",
    name: "text-sm text-sky-500 dark:text-sky-400",
    role: "text-sm text-slate-700 dark:text-slate-500",
  },
});

export const Hero = (props: Props) => {
  return (
    <div className=" z-10 flex items-center w-full pr-7 pl-7 top-0">
      {" "}
      <div className="relative flex justify-center rounded-[32px] w-full py-6 px-7">
        <div className="flex flex-col gap-2.5 w-full z-10">
          <h1 className="mb-12  font-heading text-3xl leading-[1]">
            {props.data.title}
          </h1>
          <p className="mb-2 text-xl font-light">
            <span className="font-medium">{props.data.description}</span>
          </p>
        </div>
        <div className="w-[420px] flex flex-col rounded-3xl  bg-primary-light z-10">
          <div className="flex justify-between ">
            <Share2 />
            <Heart />
          </div>
        </div>
        <Image
          src="/assets/images/events/event.jpg"
          width={1384}
          height={448}
          className="absolute left-0  top-0  w-full -z-[0] brightness-50 rounded-[32px]"
          objectFit="cover"
          alt={props.data.title}
        />
      </div>
    </div>
  );
};
