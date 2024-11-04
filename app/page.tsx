import Image from "next/image";
import business from "@/public/assets/images/home-page/business.svg";
import down from "@/public/assets/images/home-page/down.svg";
import HomeCarousel from "@/components/home-page/HomeCarousel";
import WhyCooly from "@/components/home-page/WhyCooly";
import ComboBox from "@/components/home-page/ComboBox";
import codePc from "@/public/assets/images/home-page/codePc.svg";
import codePhone from "@/public/assets/images/home-page/codePhone.svg";

const Home = () => {
  return (
    <>
      <div
        className="w-full bg-cover bg-center opacity-90"
        style={{
          backgroundImage: `linear-gradient(120deg, rgba(202, 58, 121, 0.9), rgba(61, 21, 153, 0.9) 25%), url('/assets/images/home-page/festival.svg')`,
        }}
      >
        <div className="container mx-auto lg:flex lg:flex-row lg:justify-around items-center pt-32">
          <div className="flex flex-col items-center justify-between mb-10 gap-[10px] mx-auto z-50">
            <Image
              src={business}
              alt="business"
              className="block lg:hidden z-50"
            />
            <Image className="hidden lg:block" src={codePc} alt="" />
            <Image className="lg:hidden block" src={codePhone} alt="" />
            <h1 className="hidden">کولی کد، مرجع ایونت های تخصصی</h1>
            <div className="lg:text-[45px] text-[24px] font-light text-nowrap z-50 text-foreground">
              مرجع ایونت های تخصصی
            </div>
            <ComboBox />
          </div>
          <div>
            <Image
              src={business}
              alt="business"
              className="lg:block hidden z-50 lg:w-[674px] lg:h-[504px] w-[268px] h-[232px]"
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
      <div className=" container mx-auto flex flex-col gap-3 md:gap-8 mt-8 md:mt-12">
        <div id="latest-events" className="mx-auto text-[24px] w-fit p-2 ">
          <div className="text-foreground">آخرین ایونت ها</div>
          <div className="border-2 border-white w-[155px] rounded-full mt-1"></div>
        </div>
        <div className="md:mx-12 mr-5 ">
          <HomeCarousel />
        </div>
      </div>
    </>
  );
};

export default Home;
