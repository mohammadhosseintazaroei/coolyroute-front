"use client";
import React, { ReactNode, useEffect, useRef } from "react";
import {
  AnimationProps,
  motion,
  useAnimation,
  useInView,
  type UseInViewOptions,
} from "framer-motion";
type Props = {
  children?: ReactNode;
  width?: "fit-content" | "100%";
  transition?: AnimationProps["transition"];
  disable?: boolean;
  useInViewOptions?: UseInViewOptions;
};

const RevealInView = ({
  children,
  width = "fit-content",
  transition,
  disable,
  useInViewOptions = { once: true },
}: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, useInViewOptions);
  const mainControls = useAnimation();
  useEffect(() => {
    if (isInView) mainControls.start("visible");
    if(!isInView) mainControls.set("hidden")
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInView]);

  if (disable) return children;

  return (
    <div ref={ref} className={` w-[${width}]`}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={transition ?? { duration: 0.5, delay: 0.25 }}
      >
        {children}
      </motion.div>
    </div>
  );
};
export default RevealInView;
