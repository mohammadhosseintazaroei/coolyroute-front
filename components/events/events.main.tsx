import { container } from "@/globalStyles/layout";
import React from "react";
import { tv } from "tailwind-variants";
import EventCard from "./event-card.component";
import { gql, useQuery } from "@apollo/client";
import Reveal from "../global/reveal.components";
import { EventModel, GetAllEventsQuery } from "@/__generated__/graphql";

interface Props {
  events: GetAllEventsQuery["getAllEvents"];
}

export default function Page(props: Props) {
  const firstTenProducts = props.events.slice(0, 10);
  const remainingProducts = props.events.slice(10);

  return (
    <div
      className={container({
        column: { md: "col2", lg: "col3", xl: "col4" },
      })}
    >
      {firstTenProducts.map((item: any, i: number) => (
        <EventCard disablseAnimations eventData={item} key={i} />
      ))}
      {remainingProducts.map((item: any, i: number) => (
        <EventCard eventData={item} key={i} />
      ))}
    </div>
  );
}
