"use client";
import React, { useRef } from "react";
import { Collaboration } from "./collaboration";
import { SamePage } from "./same-page";
import { StreamlinedExperience } from "./streamlined-experience";
import { Features } from "./features";
import { MoreFeatures } from "./more-features";
import { NoLockin } from "./no-lockin";
import { Hero } from "./hero";
import Container from "./container";
import { EventModel } from "@/__generated__/graphql";
import Link from "next/link";
import Image from "next/image";
import Timeline from "./time-line-item";

interface Props {
  data: EventModel;
}

const EventPage = (props: Props) => {
  const ref = useRef();
  return (
    <main>
      <Hero data={props.data} />
      <Timeline />
    </main>
  );
};
export default EventPage;
