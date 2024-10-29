import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import eventPic from "../../public/assets/images/events/event-1.png";

function HomeCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3.4,
    slidesToScroll: 1,
    rtl: true,
  };
  return (
    <div className="w-3/4 m-auto">
      <div className="mt-20">
        <Slider {...settings}>
          {data.map((d) => (
            <div
              dir="rtl"
              key={d.title}
              className="bg-primary-light rounded-xl"
            >
              <div className="h-56 flex justify-center items-center rounded-t-xl">
                <Image src={eventPic} alt="" className="h-44 w-auto" />
              </div>

              <div className="flex flex-col justify-center gap-4 p-4">
                <p className="text-base font-semibold">{d.title}</p>
                <p className="text-sm text-neutral-light">{d.review}</p>
                <div className="flex flex-row justify-between">
                  <div className="text-sm text-neutral-light">تاریخ:</div>
                  <div className="text-sm font-bold text-[#929292]">
                    {d.date}
                  </div>
                </div>
                <div className="flex flex-row justify-between">
                  <div className="text-sm text-neutral-light">مکان:</div>
                  <div className="text-sm font-bold text-[#929292]">
                    {d.location}
                  </div>
                </div>
                <button className="bg-success text-white text-lg px-6 py-1 rounded-lg w-full">
                  ثبت نام
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

const data = [
  {
    title: `عنوان رویداد`,
    review:
      "توضیحات رویداد برای مثال تاریخ و زمان و موضوعاتی که قراره پوشش داده شه داخخل این رویداد...",
    date: "1 /  2/ 1403 ساعت 15:40",
    location: "مازندران، پارک جنگی جوارم",
  },
  {
    title: `عنوان رویداد`,
    review:
      "توضیحات رویداد برای مثال تاریخ و زمان و موضوعاتی که قراره پوشش داده شه داخخل این رویداد...",
    date: "1 /  2/ 1403 ساعت 15:40",
    location: "مازندران، پارک جنگی جوارم",
  },
  {
    title: `عنوان رویداد`,
    review:
      "توضیحات رویداد برای مثال تاریخ و زمان و موضوعاتی که قراره پوشش داده شه داخخل این رویداد...",
    date: "1 /  2/ 1403 ساعت 15:40",
    location: "مازندران، پارک جنگی جوارم",
  },
  {
    title: `عنوان رویداد`,
    img: `../../public/assets/images/events/event-1.png`,
    review:
      "توضیحات رویداد برای مثال تاریخ و زمان و موضوعاتی که قراره پوشش داده شه داخخل این رویداد...",
    date: "1 /  2/ 1403 ساعت 15:40",
    location: "مازندران، پارک جنگی جوارم",
  },
  {
    title: `عنوان رویداد`,
    review:
      "توضیحات رویداد برای مثال تاریخ و زمان و موضوعاتی که قراره پوشش داده شه داخخل این رویداد...",
    date: "1 /  2/ 1403 ساعت 15:40",
    location: "مازندران، پارک جنگی جوارم",
  },
];

export default HomeCarousel;
