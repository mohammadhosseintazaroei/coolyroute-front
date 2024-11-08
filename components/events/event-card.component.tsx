"use client";
import { BriefSkillModel, EventModel } from "@/__generated__/graphql";
import { motion, useAnimate } from "framer-motion";
import Image from "next/image";
import { tv } from "tailwind-variants";
import RevealInView from "../global/reveal-inview.components";
import { TransitionLink } from "../global/TransitionLink.component";
import { Button } from "../ui/button";
interface Props {
  eventData: EventModel;
  disablseAnimations?: boolean;
}
const eventCardStyles = tv({
  slots: {
    card: " group  bg-card w-[300px] p-5 -lg shadow-lg rounded-lg relative cursor-pointer",
    cardWrapper: " flex flex-col  gap-4 z-10 bg-inherit relative",
    contentWrapper: "flex flex-col gap-2.5 items-start",
    description: "text-sm text-start text-foreground ",
    detailsWrapper: "flex flex-col gap-2 w-full",
    detailWrapper: "flex justify-between text-sm text-bold text-foreground",
    detailValue: "text-foreground",
    hoveredBg:
      "opacity-0 transition   duration-200 group-hover:opacity-100 absolute  top-0 right-0 size-full rounded-lg",
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
    <TransitionLink href={`/events/${props.eventData.id}`}>
      <RevealInView disable={props.disablseAnimations}>
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
              <RevealInView
                transition={{ duration: 0.5, delay: 0.6 }}
                disable={props.disablseAnimations}
              >
                <Image
                  src="/assets/images/events/event-1.png"
                  width={256}
                  height={50}
                  alt="event"
                />
              </RevealInView>
            </motion.div>
            <RevealInView disable={props.disablseAnimations}>
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

            <Button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                console.log("d");
              }}
              className="bg-success-200 hover:bg-success text-foreground"
            >
              ثبت نام
            </Button>
          </div>
        </motion.div>
      </RevealInView>
    </TransitionLink>
  );
};

export default EventCard;
