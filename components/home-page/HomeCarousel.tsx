import Image from "next/image";
import eventPic from "../../public/assets/images/events/event-1.png";

import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "@/app/globals.css";

import { FreeMode, Keyboard, Mousewheel, Navigation } from "swiper/modules";
import { useQuery } from "@apollo/client";
import { GET_ALL_EVENTS } from "@/apis/event.api";

export default function HomeCarousel() {
  const { data, loading: getEventsLoading } = useQuery(GET_ALL_EVENTS, {
    fetchPolicy: "network-only",
    onCompleted: (data) => {
      console.log(data);
    },
    onError: (err) => {
      console.log(err);
    },
  });

  return (
    <>
      <Swiper
        freeMode={true}
        navigation={true}
        slidesPerView={4.5}
        breakpoints={{
          // Tailwind's sm breakpoint (320px)
          320: {
            slidesPerView: 1,
          },
          // Tailwind's sm breakpoint (425px)
          425: {
            slidesPerView: 1.2,
          },
          // Tailwind's md breakpoint (768px)
          768: {
            slidesPerView: 2.5,
          },
          // Tailwind's lg breakpoint (1024px)
          1024: {
            slidesPerView: 3.5,
          },
          // Tailwind's xl breakpoint (1280px)
          1280: {
            slidesPerView: 4.5,
          },
        }}
        spaceBetween={30}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Mousewheel, Keyboard, FreeMode]}
        className="mySwiper"
      >
        {data?.getAllEvents.map((d) => (
          <SwiperSlide>
            <div key={d.title} className="bg-primary-light rounded-xl">
              <div className="flex mx-6 mt-6 justify-center items-center">
                <Image src={eventPic} alt="" className="w-[256px] h-[151px]" />
              </div>

              <div className="flex flex-col gap-4 p-4">
                <div className="text-start">
                  <p className="text-base font-semibold leading-10">
                    {d.title}
                  </p>
                  <p className="text-sm text-neutral-light leading-6">
                    {d.description}
                  </p>
                </div>
                <div className="flex flex-row justify-between">
                  <div className="text-sm text-neutral-light">تاریخ:</div>
                  <div className="text-sm font-bold text-[#929292]">
                    {d.date}
                  </div>
                </div>
                <div className="flex flex-row justify-between">
                  <div className="text-sm text-neutral-light">مکان:</div>
                  <div className="text-sm font-bold text-[#929292]">
                    {/* {d.location} */}
                    مازندران، پارک جنگی جوارم
                  </div>
                </div>
                <button className="bg-success text-white text-lg px-6 py-1 rounded-lg w-full">
                  ثبت نام
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

// const b = [
//   {
//     title: `عنوان رویداد`,
//     review:
//       "توضیحات رویداد برای مثال تاریخ و زمان و موضوعاتی که قراره پوشش داده شه داخخل این رویداد...",
//     date: "1 /  2/ 1403 ساعت 15:40",
//     location: "مازندران، پارک جنگی جوارم",
//   },
//   {
//     title: `عنوان رویداد`,
//     review:
//       "توضیحات رویداد برای مثال تاریخ و زمان و موضوعاتی که قراره پوشش داده شه داخخل این رویداد...",
//     date: "1 /  2/ 1403 ساعت 15:40",
//     location: "مازندران، پارک جنگی جوارم",
//   },
//   {
//     title: `عنوان رویداد`,
//     review:
//       "توضیحات رویداد برای مثال تاریخ و زمان و موضوعاتی که قراره پوشش داده شه داخخل این رویداد...",
//     date: "1 /  2/ 1403 ساعت 15:40",
//     location: "مازندران، پارک جنگی جوارم",
//   },
//   {
//     title: `عنوان رویداد`,
//     img: `../../public/assets/images/events/event-1.png`,
//     review:
//       "توضیحات رویداد برای مثال تاریخ و زمان و موضوعاتی که قراره پوشش داده شه داخخل این رویداد...",
//     date: "1 /  2/ 1403 ساعت 15:40",
//     location: "مازندران، پارک جنگی جوارم",
//   },
//   {
//     title: `عنوان رویداد`,
//     review:
//       "توضیحات رویداد برای مثال تاریخ و زمان و موضوعاتی که قراره پوشش داده شه داخخل این رویداد...",
//     date: "1 /  2/ 1403 ساعت 15:40",
//     location: "مازندران، پارک جنگی جوارم",
//   },
// ];
