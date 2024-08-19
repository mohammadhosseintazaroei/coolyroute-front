"use client";
import React from "react";
import { Card, Skeleton } from "@nextui-org/react";
import { tv } from "tailwind-variants";
export const eventCardStyles = tv({
  slots: {
    card: " group bg-gradient-to-t from-primary-light to-primary-lighter  w-[300px] p-5 -lg shadow-lg rounded-lg relative cursor-pointer",
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
export default function EventCardLoading() {
  return (
    <Card className={styles.card()} radius="lg">
      <div className={styles.cardWrapper()}>
        <Skeleton className="rounded-lg">
          <div className="h-24 rounded-lg bg-default-300"></div>
        </Skeleton>
        <div className={styles.contentWrapper()}>
          <div className="space-y-3">
            <Skeleton className="w-3/5 rounded-lg">
              <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
            </Skeleton>
            <Skeleton className="w-4/5 rounded-lg">
              <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
            </Skeleton>
            <Skeleton className="w-2/5 rounded-lg">
              <div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
            </Skeleton>
          </div>
        </div>
      </div>
    </Card>
  );
}
