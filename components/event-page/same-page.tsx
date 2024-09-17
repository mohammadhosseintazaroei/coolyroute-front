"use client";
import { stylesWithCssVar } from "@/utils/motion";
import { useScroll, useTransform, motion } from "framer-motion";
import { Ref, useRef } from "react";
import { BranchIcon } from "../icons/branch";
import RevealInView from "../global/reveal-inview.components";

const animationOrder = {
  initial: 0,
  fadeInEnd: 0.15,
  showParagraphOne: 0.25,
  hideParagraphOne: 0.3,
  showParagraphTwoStart: 0.35,
  showParagraphTwoEnd: 0.4,
  hideParagraphTwo: 0.5,
  showLoadingScreenStart: 0.53,
  showLoadingScreenEnd: 0.58,
  createBranchStart: 0.65,
  createBranchEnd: 0.7,
  createBranchFadeInStart: 0.78,
  createBranchFadeInEnd: 0.85,
  endTextFadeInStart: 0.95,
  endTextFadeInEnd: 1,
};

export const SamePage = ({ container }: { container: Ref }) => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.8, 0.9], [1, 0.3, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 0.8, 1], [1, 1, 1.2, 2]);
  // const scaleY = useTransform(
  //   scrollYProgress,
  //   [0, 0.5, 0.8, 1],
  //   [1, 1, 1.2, 2.5]
  // );

  return (
    <>
      <motion.div
        className="opacity-0  w-[60%] flex flex-col items-center -top-1/2 left-1/2  !h-[100vh] justify-center bg-[red] snap-start transition-all duration-200"
        ref={targetRef}
        style={{ opacity, scale }}
      >
        <h1 className="text-[50px]">dsfd</h1>
        <span className="text-[30px] text-center">
          fdsdsfsdfdalkfsdfdsfsdafsdfsd fdsdsfsdfdalkfsdfdsfsdafsdfsd
          fdsdsfsdfdalkfsdfdsfsdafsdfsd fdsdsfsdfdalkfsdfdsfsdafsdfsd
          fdsdsfsdfdalkfsdfdsfsdafsdfsd fdsdsfsdfdalkfsdfdsfsdafsdfsd
          fdsdsfsdfdalkfsdfdsfsdafsdfsd;fhsdaf
        </span>
      </motion.div>
    </>
  );
};
