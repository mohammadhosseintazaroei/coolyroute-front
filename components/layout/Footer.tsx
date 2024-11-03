import Image from "next/image";
import group from "@/public/assets/images/footer-section/group.svg";
import car from "@/public/assets/images/footer-section/car.svg";
import logo from "@/public/assets/images/header-logo/logo.svg";
import Link from "next/link";
import telegram from "@/public/assets/images/footer-section/telegram.svg";
import instagram from "@/public/assets/images/footer-section/instagram.svg";
import youtube from "@/public/assets/images/footer-section/youtube.svg";
import namad from "@/public/assets/images/footer-section/namad.svg";
import meli from "@/public/assets/images/footer-section/meli.svg";
import up from "@/public/assets/images/footer-section/up.svg";

const Footer = () => {
  return (
    <div className="container mx-auto py-4">
      <div className="mx-8">
        <div className="flex flex-row justify-around lg:justify-start gap-8 leading-6">
          <div className="flex flex-col lg:flex-row items-center gap-4">
            <Image src={group} alt="" />
            <div className="flex flex-col items-center lg:block">
              <div className="text-[16px]">شبکه سازی</div>
              <div className="text-[12px] text-[#A9A6CF]">ارتباط با افراد</div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-4">
            <Image src={car} alt="" />
            <div className="flex flex-col items-center lg:block">
              <div className="text-[16px]">سفر و تفریح</div>
              <div className="text-[12px] text-[#A9A6CF]">
                سفر و اوقات فراقت
              </div>
            </div>
          </div>
        </div>

        <div className="xl:flex xl:flex-row gap-[40px]">
          <div className="xl:flex xl:flex-row xl:items-center gap-[80px]">
            <div className="lg:max-w-[576px]">
              <Image
                className="-rotate-[120deg] w-[66px] h-[66px] mt-[40px] mb-[12px] mx-auto lg:mx-0"
                src={logo}
                alt=""
              />
              <div className="text-[18px] text-neutral-light text-wrap">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سنرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
                الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در
                این صورت. سه تا ویژگی مهم داریهمهم داریهمهم داریهمهم داریهمهم
                داریهمهم داریهمهم داریهمهم داریهمهم داریه
              </div>
              <div>
                <div className="text-[14px] text-[#6B688D] my-4">
                  ما را در شبکه های اجتماعی دنبال کنید:
                </div>
                <div className="flex flex-row items-center gap-4 mb-6 text-[#6B688D]">
                  <Link href="https://t.me/coolycode" target="_blank">
                    <Image src={telegram} alt="telegram" />
                  </Link>
                  <Link
                    href="https://www.instagram.com/coolycode"
                    target="_blank"
                  >
                    <Image src={instagram} alt="instagram" />
                  </Link>
                  <Link
                    href="https://www.youtube.com/@coolycode"
                    target="_blank"
                  >
                    <Image src={youtube} alt="youtube" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="flex flex-row gap-[12px]">
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
              <div className="flex flex-col items-start leading-10 text-[16px]">
                <div className="text-[16px] text-[#A9A6CF]">
                  راهنمایی و پشتیبانی
                </div>
                <li>
                  <span className="text-white">پشتیبانی</span>
                </li>
                <li>
                  <span className="text-white">سوالات متدوال</span>
                </li>
              </div>
            </div>
          </div>

          <div className="flex flex-row gap-4 mt-4 lg:mt-0">
            <Image src={namad} alt="" />
            <Image src={meli} alt="" />
          </div>
        </div>
        <div className="hidden lg:flex flex-row items-center gap-4">
          <a
            href="#"
            className="bg-[#0C0C26] w-[128px] h-[40px] flex flex-row justify-center items-center gap-2 rounded-md cursor-pointer"
          >
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
          <div className="flex flex-row items-center gap-4 mx-4 my-8">
            <div>شرایط استفاده از خدمات</div>
            <div>قوانین و مقررات</div>
          </div>
          <div className="opacity-[80%] text-center">
            تمامی حقوق محفوظ میباشد. | کولی کد©
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
