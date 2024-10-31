import Image from "next/image";
import Group from "@/public/assets/images/footer-section/Group.png";
import Car from "@/public/assets/images/footer-section/Car.png";
import logo from "@/public/assets/images/header-logo/logo.png";
import Link from "next/link";
import telegram from "@/public/assets/images/footer-section/telegram.png";
import instagram from "@/public/assets/images/footer-section/instagram.png";
import youtube from "@/public/assets/images/footer-section/youtube.png";
import namad from "@/public/assets/images/footer-section/namad.png";
import meli from "@/public/assets/images/footer-section/meli.png";
import up from "@/public/assets/images/footer-section/up.png";

const Footer = () => {
  return (
    <div className="bg-primary-light py-4">
      <div className="flex flex-row justify-between lg:justify-start items-center gap-8 lg:mx-44 mx-20">
        <div className="flex flex-col lg:flex-row items-center gap-4 leading-7">
          <Image src={Group} alt="" />
          <div>
            <div className="text-foreground text-[16px]">شبکه سازی</div>
            <div className="text-[#A9A6CF] text-[12px]">ارتباط با افراد</div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-center gap-4 leading-7">
          <Image src={Car} alt="" />
          <div>
            <div className="text-foreground text-[16px]">سفر و تفریح</div>
            <div className="text-[#A9A6CF] text-[12px]">سفر و اوقات فراقت</div>
          </div>
        </div>
      </div>
      <div className="lg:mr-52 mx-4">
        <Image
          src={logo}
          alt=""
          className="w-[66px] h-[67px] my-8 -rotate-[120deg] mx-auto lg:mx-0"
        />
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center lg:gap-12">
          <div className="lg:w-[576px] text-[18px] text-neutral-lighter">
            <div>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سنرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
              الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این
              صورت. سه تا ویژگی مهم داریهمهم داریهمهم داریهمهم داریهمهم داریهمهم
              داریهمهم داریهمهم داریهمهم داریه
            </div>
            <div className="w-fit">
              <div className="lg:my-6 my-3 text-[#6B688D] text-[14px] font-bold">
                ما را در شبکه های اجتماعی دنبال کنید:
              </div>
              <div className="flex flex-row items-center gap-4 mb-6">
                <Link href="https://t.me/coolycode">
                  <Image src={telegram} alt="telegram" />
                </Link>
                <Link href="https://www.instagram.com/coolycode">
                  <Image src={instagram} alt="instagram" />
                </Link>
                <Link href="https://www.youtube.com/@coolycode">
                  <Image src={youtube} alt="youtube" />
                </Link>
              </div>
            </div>
          </div>

          <div className="flex flex-row">
            <div className="leading-10 text-[16px]">
              <div className="text-[16px] text-[#A9A6CF]">کولی کد</div>
              <li className="text-[#F5B414]">
                <span className="text-white">درباره ما</span>
              </li>
              <li className="text-[#F5B414]">
                <span className="text-white">تماس با ما</span>
              </li>
              <li className="text-[#F5B414]">
                <span className="text-white">همه ایونت ها</span>
              </li>
              <li className="text-[#F5B414]">
                <span className="text-white">اخرین ایونت ها</span>
              </li>
            </div>
            <div className="leading-10 text-[16px]">
              <div className="text-[16px] text-[#A9A6CF]">
                راهنمایی و پشتیبان
              </div>
              <li className="text-[#F5B414]">
                <span className="text-white">پشتیبانی</span>
              </li>
              <li>
                <span className="text-white">سوالات متدوال</span>
              </li>
            </div>
          </div>
          <div className="flex flex-row my-4">
            <div>
              <Image src={namad} alt="" className="w-[96px] h-[112px]" />
            </div>
            <div className="ml-14">
              <Image src={meli} alt="" className="w-[96px] h-[106px]" />
            </div>
          </div>
        </div>
      </div>
      <div className="hidden lg:flex flex-row items-center justify-center gap-4">
        <a href="#" className="bg-[#0C0C26] w-[128px] h-[40px] flex flex-row justify-center items-center gap-2 rounded-md cursor-pointer">
          <div>
            <Image src={up} alt="" />
          </div>
          <div className="text-[12px] text-[#A9A6CF]">بازگشت به بالا</div>
        </a>
        <div className="w-10/12 h-[40px] bg-[#0C0C26] rounded-md text-[12px] text-[#A9A6CF] flex flex-row gap-4 items-center">
          <div className="mx-auto"> تمامی حقوق محفوظ میباشد. | کولی کد©</div>
          <div>قوانین و مقررات</div>
          <div className="ml-2">شرایط استفاده از خدمات</div>
        </div>
      </div>
      <div className="lg:hidden text-[12px] text-[#A9A6CF]">
        <div className="flex flex-row items-center gap-4 mx-4">
          <div>شرایط استفاده از خدمات</div>
          <div>قوانین و مقررات</div>
        </div>
        <div className="opacity-[80%] text-center mt-8">تمامی حقوق محفوظ میباشد. | کولی کد©</div>
      </div>
    </div>
  );
};

export default Footer;
