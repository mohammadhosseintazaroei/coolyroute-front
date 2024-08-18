import { container } from "@/globalStyles/layout";
import React from "react";
import { tv } from "tailwind-variants";
import EventCard from "./event-card.component";
import { gql, useQuery } from "@apollo/client";
import Reveal from "../global/reveal.components";

interface Props {
  events: any;
}

export default function Page(props: Props) {
  return (
    <div
      className={container({
        column: { md: "col2", lg: "col3", xl: "col4" },
      })}
    >
      {props.events.map((item: any, i: number) => (
        <EventCard eventData={item} key={i} />
      ))}
    </div>
  );
}
