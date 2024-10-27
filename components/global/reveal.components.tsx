"use client";
import React, { ReactNode, useRef } from "react";
import { AnimationProps, motion } from "framer-motion";
type Props = {
  children?: ReactNode;
  width?: "fit-content" | "100%";
  transition?: AnimationProps["transition"];
};

const Reveal = ({ children, width = "fit-content", transition }: Props) => {
  const ref = useRef(null);
  return (
    <div ref={ref} className={` overflow-hidden w-[${width}]`}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate="visible"
        transition={transition ?? { duration: 0.5, delay: 0.25 }}
      >
        {children}
      </motion.div>
    </div>
  );
};
export default Reveal;
