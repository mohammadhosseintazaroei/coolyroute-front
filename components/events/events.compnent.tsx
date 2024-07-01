import { container } from "@/globalStyles/layout";
import React from "react";
import { tv } from "tailwind-variants";
import EventCard from "./event-card.component";

interface Events {
  events: any;
}

const events = [
  {
    title: "salam",
    description: "descriptiion",
  },
  {
    title: "salam",
    description: "descriptiion",
  },
];

const Events = (props: Props) => {
  return (
    <div
      className={container({
        column: { initial: "col1", md: "col2", lg: "col3", xl: "col4" },
      })}
    >
      {events.map((item, i) => (
        <EventCard eventData={item} key={i} />
      ))}
    </div>
  );
};

export default Events;
