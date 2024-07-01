import React from "react";
import { tv } from "tailwind-variants";

interface Props {
  eventData: any;
}
const styles = tv({
  slots: {
    cardWrapper: "bg-primary-light w-[300px] p-5 -lg shadow-lg ",
  },
});
const eventsStyles = styles();
const EventCard = (props: Props) => {
  return (
    <div className={eventsStyles.cardWrapper()}>
      <img src="./assets/images/events/event-1.png" />
    </div>
  );
};

export default EventCard;
