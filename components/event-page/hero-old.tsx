"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import { Ref, useEffect, useRef } from "react";
import { GithubIcon } from "../icons/github";
import { tv } from "tailwind-variants";
import { EventModel } from "@/__generated__/graphql";
import { Heart, Share2 } from "react-feather";
import Image from "next/image";
interface Props {
  data: EventModel;
  container: Ref;
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

export const HeroOld = (props: Props) => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.3, 0.8], [1, 1, 0]);
  const scale = useTransform(scrollYProgress, [1, 1, 0.5], [1, 0.5]);
  const position = useTransform(scrollYProgress, (pos) =>
    pos >= 1 ? "relative" : "sticky"
  );

  useEffect(() => {
    const updateMousePosition = (ev: MouseEvent) => {
      if (!targetRef.current) return;
      const { clientX, clientY } = ev;
      targetRef.current.style.setProperty("--x", `${clientX}px`);
      targetRef.current.style.setProperty("--y", `${clientY}px`);
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);
  return (
    <motion.section
      // style={{ opacity }}
      ref={targetRef}
      className=" relative h-[50vh] text-white before:pointer-events-none before:fixed before:inset-0 before:z-0 before:bg-[radial-gradient(circle_farthest-side_at_var(--x,_100px)_var(--y,_100px),_var(--color-primary-lightest)_0%,_transparent_100%)] before:opacity-40 snap-center"
    >
      <motion.div
        // style={{ position, scale }}
        className=" z-10 flex items-center w-full pr-7 pl-7 top-0"
      >
        {" "}
        <div className="relative flex justify-center rounded-[32px] w-full py-6 px-7">
          <div className="flex flex-col gap-2.5 w-full">
            <h1 className="mb-12  font-heading text-3xl leading-[1]">
              {props.data.title}
            </h1>
            <p className="mb-2 text-xl font-light">
              <span className="font-medium">{props.data.description}</span>
            </p>
          </div>
          <div className="w-[420px] flex flex-col rounded-3xl  bg-primary-light">
            <div className="flex justify-between ">
              <Share2 />
              <Heart />
            </div>
          </div>
          <Image
            src="/assets/images/events/event.jpg"
            width={1384}
            height={448}
            className="absolute left-0  top-0  w-full -z-10 brightness-50 rounded-[32px]"
            objectFit="cover"
            alt={props.data.title}
          />
        </div>
      </motion.div>
    </motion.section>
  );
};
