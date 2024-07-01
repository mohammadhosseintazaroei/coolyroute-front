import { container } from "@/globalStyles/layout";
import React from "react";
import { tv } from "tailwind-variants";
import EventCard from "./event-card.component";

interface Props {
  events: any;
}

const Events = (props: Props) => {
  return (
    <div
      className={container({
        column: { md: "col2", lg: "col3", xl: "col4" },
      })}
    >
      {props.events.map((item, i) => (
        <EventCard eventData={item} key={i} />
      ))}
    </div>
  );
};

export default Events;
