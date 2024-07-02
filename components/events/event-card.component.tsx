import React from "react";
import { tv } from "tailwind-variants";
import CrButton from "../global/cr-button.component";
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
  return (
    <div className={styles.card()}>
      <div className={styles.hoveredBg()}></div>
      <div className={styles.cardWrapper()}>
        <Image
          src="/assets/images/events/event-1.png"
          width={256}
          height={50}
          alt="event"
        />
        <div className={styles.contentWrapper()}>
          <p>{props.eventData.title}</p>
          <p className={styles.description()}>{props.eventData.description}</p>
          <div className={styles.detailsWrapper()}>
            <div className={styles.detailWrapper()}>
              <p>شروع :</p>
              <p className={styles.detailValue()}>1 / 2/ 1403 ساعت 15:40</p>
            </div>
            <div className={styles.detailWrapper()}>
              <p>پایان :</p>
              <p className={styles.detailValue()}>5 / 2 / 1403 ساعت 18:00</p>
            </div>
          </div>
        </div>
        <CrButton>ثبت نام</CrButton>
      </div>
    </div>
  );
};

export default EventCard;
