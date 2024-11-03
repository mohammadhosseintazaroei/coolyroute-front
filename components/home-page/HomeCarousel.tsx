"use client";

import Image from "next/image";
import eventPic from "../../public/assets/images/events/event-1.png";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "@/app/globals.css";

import { FreeMode, Keyboard, Mousewheel, Navigation } from "swiper/modules";
import { useQuery } from "@apollo/client";
import { GET_ALL_EVENTS } from "@/apis/event.api";
import { TransitionLink } from "../global/TransitionLink.component";

const HomeCarousel = () => {
  const { data, loading: getEventsLoading } = useQuery(GET_ALL_EVENTS, {
    fetchPolicy: "network-only",
  });

  return (
    <>
      <Swiper
        freeMode={true}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        slidesPerView={4.5}
        breakpoints={{
          320: { slidesPerView: 1 },
          425: { slidesPerView: 1.46 },
          768: { slidesPerView: 2.5 },
          1024: { slidesPerView: 3.5 },
          1440: { slidesPerView: 4.2, spaceBetween: 12 },
        }}
        spaceBetween={7}
        keyboard={true}
        modules={[Navigation, Keyboard, FreeMode]}
        className="mySwiper w-full h-full"
      >
        {data?.getAllEvents.map((event) => (
          <SwiperSlide
            key={event.id}
            className="swiper-slide flex justify-center items-center text-center text-lg"
          >
            <TransitionLink href={`/events/${event.id}`}>
              <div className="bg-primary-light rounded-xl h-auto">
                <div className="flex mx-4 justify-center items-center">
                  <Image
                    src={eventPic}
                    alt={event.title}
                    className="h-[151px] object-cover cursor-pointer mt-8 rounded-3xl"
                  />
                </div>

                <div className="flex flex-col gap-4 p-4">
                  <div className="text-start">
                    <p className="text-base font-semibold leading-10">
                      {event.title}
                    </p>
                    <p className="text-sm text-neutral-light leading-6">
                      {event.description}
                    </p>
                  </div>
                  <div className="flex flex-row justify-between">
                    <div className="text-sm text-neutral-light">تاریخ:</div>
                    <div className="text-sm font-bold text-[#929292]">
                      {event.date}
                    </div>
                  </div>
                  <div className="flex flex-row justify-between">
                    <div className="text-sm text-neutral-light">مکان:</div>
                    <div className="text-sm font-bold text-[#929292]">
                      مازندران، پارک جنگی جوارم
                    </div>
                  </div>
                  <button className="bg-success text-foreground text-lg px-6 py-1 rounded-lg w-full h-[46px]">
                    ثبت نام
                  </button>
                </div>
              </div>
            </TransitionLink>
          </SwiperSlide>
        ))}
        <div className="swiper-button-next after:text-foreground after:text-[15px] w-12 h-12 bg-[#12122f] border-2 border-[#1d1d3d] rounded-full hidden lg:flex justify-center items-center">
          <span className="text-foreground text-sm"></span>
        </div>
        <div className="swiper-button-prev after:text-foreground after:text-[15px] w-12 h-12 bg-[#12122f] border-2 border-[#1d1d3d] rounded-full hidden lg:flex justify-center items-center">
          <span className="text-foreground text-sm"></span>
        </div>
      </Swiper>
    </>
  );
};

export default HomeCarousel;
