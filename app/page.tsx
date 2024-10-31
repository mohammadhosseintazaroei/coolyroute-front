"use client";

import Image from "next/image";
import business from "@/public/assets/images/home-page/business.png";
import down from "@/public/assets/images/home-page/down.png";
import HomeCarousel from "@/components/home-page/HomeCarousel";
import WhyCooly from "@/components/home-page/WhyCooly";
import ComboBox from "@/components/home-page/ComboBox";

export default function Home() {
  return (
    <div>
      <div>
        <div className="lg:flex lg:flex-row lg:justify-between">
          <div className="flex flex-col items-center lg:mt-20 mb-10 md:mb-10 gap-[10px] w-1/2 mx-auto">
            <Image src={business} alt="business" className="block lg:hidden" />
            <div className="lg:text-[100px] text-[48px] text-nowrap">
              کولی کد
            </div>
            <div className="lg:text-[45px] text-[24px] font-light text-nowrap">
              مرجع ایونت های تخصصی
            </div>
            <ComboBox />
          </div>
          <Image src={business} alt="business" className="lg:block hidden" />
        </div>

        <div className="animate-bounce animate-infinite">
          <div className="text-center text-[20px]">
            <a href="#latest-events">مشاهده آخرین ایونت ها</a>
          </div>
          <Image src={down} alt="down" className="mx-auto my-3" />
        </div>
      </div>
      <WhyCooly />
      <div>
        <div
          id="latest-events"
          className="mx-auto text-[24px] border-b-4 border-white w-fit p-2 my-12"
        >
          آخرین ایونت ها
        </div>
        <div className="mx-12 lg:pb-28 pb-10">
          <HomeCarousel />
        </div>
      </div>
    </div>
  );
}
