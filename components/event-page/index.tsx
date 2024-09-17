"use client";
import React, { useRef } from "react";
import { Collaboration } from "./collaboration";
import { SamePage } from "./same-page";
import { StreamlinedExperience } from "./streamlined-experience";
import { Features } from "./features";
import { MoreFeatures } from "./more-features";
import { NoLockin } from "./no-lockin";
import { Hero } from "./hero";
import { EventModel } from "@/__generated__/graphql";
import Container from "./container";

interface Props {
  data: EventModel;
}
const EventPage = (props: Props) => {
  const ref = useRef();
  return (
    <main ref={ref}>
      <Hero data={props.data} container={ref} />
      {/* <Container /> */}
      <div className="relative z-10 w-full overflow-x-clip  h-screen">
        <div className="flex flex-col items-center justify-center">
          <SamePage container={ref} />
          <SamePage container={ref} />
          <SamePage container={ref} />
          <SamePage container={ref} />
          <SamePage container={ref} />
          <SamePage container={ref} />
          <SamePage container={ref} />
          <SamePage container={ref} />
          <SamePage container={ref} />
          <SamePage container={ref} />
          <SamePage container={ref} />
          <SamePage container={ref} />
          <SamePage container={ref} />
        </div>
        {/* <StreamlinedExperience /> */}
        {/* <Features /> */}
        {/* <MoreFeatures /> */}
        {/* <NoLockin /> */}
      </div>
    </main>
  );
};
export default EventPage;
