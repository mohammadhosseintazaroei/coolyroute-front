import Image from "next/image";
import think from "@/public/assets/images/home-page/think.png";
import mountain from "@/public/assets/images/home-page/mountain.png";
import referral from "@/public/assets/images/home-page/referral.png";

const WhyCooly = () => {
  return (
    <div className="mt-2">
      <div className="mx-auto text-[24px] border-b-4 border-white w-fit p-2">
        چرا کولی کد
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center">
        <div className="flex flex-col items-center max-w-[686px] gap-[25px] mx-6 lg:mt-28 mt-10">
          <Image
            src={think}
            alt="think"
            className="max-w-[185.19px] max-h-[250px] lg:hidden block"
          />

          <div className="text-2xl font-normal">
            تا حالا شده بخوای بری کوه، کمپ، طبیعت گردی ،ولی کسی رو نداشته باشی
            که باهات بیاد ؟
          </div>
          <div className="text-neutral-lighter text-lg font-light">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
            زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
            متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان
            رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد
            کرد، در این صورت. سه تا ویژگی مهم داریه
          </div>
        </div>
        <Image
          src={think}
          alt="think"
          className="max-w-[379px] max-h-[513px] hidden lg:block"
        />
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center">
        <Image
          src={mountain}
          alt="mountain"
          className="lg:max-w-[475px] lg:max-h-[342px] max-w-[210px] max-h-[151px]"
        />
        <div className="flex flex-col max-w-[686px] gap-[25px] m-4">
          <div className="text-2xl font-normal">سفر و تفریح</div>
          <div className="text-neutral-lighter text-lg font-light">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
            زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
            متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان
            رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد
            کرد، در این صورت.
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center">
        <div className="flex flex-col lg:mt-28 lg:mx-6 max-w-[686px] gap-[25px] mx-6">
          <Image
            src={referral}
            alt="referral"
            className="max-w-[233px] max-h-[264px] lg:hidden block lg:mx-0 mx-auto"
          />
          <div className="text-2xl font-normal">شبکه سازی و ارتباطات موثر</div>
          <div className="text-neutral-lighter text-lg font-light">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
            زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
            متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان
            رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد
            کرد، در این صورت.
          </div>
        </div>
        <Image
          src={referral}
          alt="referral"
          className="max-w-[450px] max-h-[450px] hidden lg:block"
        />
      </div>
    </div>
  );
};

export default WhyCooly;
