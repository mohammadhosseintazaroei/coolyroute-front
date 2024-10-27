"use client";
import imageVectorGreen from "@/public/assets/images/event/hero-section-vector-green.svg";
import imageVectorOrange from "@/public/assets/images/event/hero-section-vector-orange.svg";
import BannerImage from "@/public/assets/images/event/banner.jpg";
import { EventModel } from "@/__generated__/graphql";
import Image from "next/image";
import { Heart, Share2 } from "react-feather";
import { tv } from "tailwind-variants";
import { useEffect, useState } from "react";
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
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => {
    setOffsetY(window.pageYOffset);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });
  return (
    <section className="relative w-screen left-0 right-0 overflow-hidden py-6 lg:py-12">
      {" "}
      <Image
        src={BannerImage}
        className="absolute  left-0 right-0 w-screen brightness-[.2] "
        alt={props.data.title}
        width={1000}
        style={{
          transform: `translateY(${offsetY * 0.5}px)`,
        }}
      />
      <div className="container flex flex-col items-center">
        <div className="flex justify-center">
          <div className="flex flex-col space-y-2 lg:w-8/12">
            <h1 className="text-3xl font-extrabold md:text-5xl/normal z-10">
              {props.data.title}
            </h1>
            <h2 className="text-lg text-zinc-400 lg:text-2xl/normal z-10">
              {props.data.description}
            </h2>

            <div className="grid grid-cols-2 gap-3 pt-4 md:flex md:gap-8 md:pt-6 z-10">
              {[
                {
                  title: "زمان",
                  description: "۱۰ اسفند ۱۴۰۲",
                },
                {
                  title: "سخنرانان",
                  // description: `${speakersData.length.toLocaleString(
                  //   "fa-IR"
                  // )} نفر`,
                  description: "df",
                },
                {
                  title: "شهر",
                  description: "آمل، مازندران",
                },
                {
                  title: "مکان",
                  description: "مجموعه اریکه آریایی",
                },
              ].map((item, index) => {
                return (
                  <div key={index} className="">
                    <p className="text-sm font-light text-zinc-50 md:text-base">
                      {item.title}
                    </p>
                    <p className="text-orange-500">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      {/* <HeroImages /> */}
    </section>
  );
};
