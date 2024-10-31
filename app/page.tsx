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
      <div id="banner">
        <div className="lg:flex lg:flex-row lg:justify-between pt-32">
          <div className="flex flex-col items-center lg:mt-20 mb-10 md:mb-10 gap-[10px] mx-auto z-50">
            <Image
              src={business}
              alt="business"
              className="block lg:hidden z-50"
            />
            <div className="lg:text-[100px] text-[48px] text-nowrap z-50">
              کولی کد
            </div>
            <div className="lg:text-[45px] text-[24px] font-light text-nowrap z-50">
              مرجع ایونت های تخصصی
            </div>
            <ComboBox />
          </div>
          <div className="w-1/2">
            <Image
              src={business}
              alt="business"
              className="lg:block hidden z-50 w-[674px] h-[504px]"
            />
          </div>
        </div>

        <a href="#latest-events">
          <div className="animate-bounce animate-infinite">
            <div className="text-center lg:text-[32px] text-[20px]">
              <div>مشاهده آخرین ایونت ها</div>
            </div>
            <Image src={down} alt="down" className="mx-auto my-3" />
          </div>
        </a>
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
