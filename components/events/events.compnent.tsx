import { container } from "@/globalStyles/layout";
import React from "react";
import { tv } from "tailwind-variants";
import EventCard from "./event-card.component";
import { gql, useQuery } from "@apollo/client";
import { appoloclient } from "@/components/providers/share/appolo-config";
import { getClient } from "@/share/appolo-";

interface Props {
  events: any;
}
export const GET_ALL_EVENTS = gql(`
query getAllEvents{
  getAllEvents {
    id
    title
    description
  }
}
`);

const Events = async (props: Props) => {
  const { data, loading, error } = await getClient().query({
    query: GET_ALL_EVENTS,
  });
  // Handle loading and error states appropriately
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
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
