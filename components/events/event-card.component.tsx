"use client";
import { Suspense } from "react";
import { tv } from "tailwind-variants";
import CrButton from "../global/cr-button.component";
import RevealInView from "../global/reveal-inview.components";
import EventImage from "./event-image.component";
import { useAnimate, motion } from "framer-motion";
import Image from "next/image";
interface Props {
  eventData: any;
}
const eventCardStyles = tv({
  slots: {
    card: " group bg-gradient-to-t from-primary-light to-primary-lighter  w-[300px] p-5 -lg shadow-lg rounded-lg relative",
    cardWrapper: " flex flex-col  gap-4 z-10 bg-inherit relative",
    contentWrapper: "flex flex-col gap-2.5 items-start",
    description: "text-sm text-start text-neutral",
    detailsWrapper: "flex flex-col gap-2 w-full",
    detailWrapper: "flex justify-between text-sm text-bold",
    detailValue: "text-neutral",
    hoveredBg:
      "opacity-0 transition   duration-200 group-hover:opacity-100 bg-gradient-to-br from-primary-lighter to-primary-light absolute  top-0 right-0 size-full rounded-lg",
  },
});
const styles = eventCardStyles();
const EventCard = (props: Props) => {
  const [scope, animate] = useAnimate();

  const image = {
    initial: { rotate: -10, scale: 0.95, y: 0 },
    hover: { y: "-10%", scale: 1.1, rotate: -10 },
  };
  const cardWrapper = {
    click: { y: "-3%", scale: 1.05 },
  };
  return (
    <Suspense fallback={<>loading</>}>
      <RevealInView transition={{ duration: 0.5, delay: 0.35 }}>
        <motion.div
          className={styles.card()}
          ref={scope}
          variants={cardWrapper}
          whileHover={["hover"]}
          whileTap={["click", "initial"]}
        >
          <div className={styles.hoveredBg()}></div>
          <div className={styles.cardWrapper()}>
            <motion.div variants={image}>
              <RevealInView transition={{ duration: 0.5, delay: 0.6 }}>
                <Image
                  src="/assets/images/events/event-1.png"
                  width={256}
                  height={50}
                  alt="event"
                />
              </RevealInView>
            </motion.div>
            <RevealInView>
              <div className={styles.contentWrapper()}>
                <p>{props.eventData.title}</p>
                <p className={styles.description()}>
                  {props.eventData.description}
                </p>
                <div className={styles.detailsWrapper()}>
                  <div className={styles.detailWrapper()}>
                    <p>شروع :</p>
                    <p className={styles.detailValue()}>
                      1 / 2/ 1403 ساعت 15:40
                    </p>
                  </div>
                  <div className={styles.detailWrapper()}>
                    <p>پایان :</p>
                    <p className={styles.detailValue()}>
                      5 / 2 / 1403 ساعت 18:00
                    </p>
                  </div>
                </div>
              </div>
            </RevealInView>
            <CrButton>ثبت نام</CrButton>
          </div>
        </motion.div>
      </RevealInView>
    </Suspense>
  );
};

export default EventCard;
