"use client";

import Image from "next/image";
import business from "@/public/assets/images/home-page/business.png";
import {
  CrAutocomplete,
  CrAutocompleteItem,
} from "@/components/global/cr-fields/cr-autocomplete.component";
import { GET_SKILLS_BRIEF } from "@/apis/skills.api";
import { useQuery } from "@apollo/client";
import { Key, useState } from "react";
import { CompleteFurtherInformationDto } from "@/__generated__/graphql";
import down from "@/public/assets/images/home-page/down.png";
import think from "@/public/assets/images/home-page/think.png";
import mountain from "@/public/assets/images/home-page/mountain.png";
import referral from "@/public/assets/images/home-page/referral.png";
import HomeCarousel from "@/components/home-page/HomeCarousel";

export default function Home() {
  const [formData, setFormData] =
    useState<CompleteFurtherInformationDto | null>(null);
  const { data, loading: getSKillsLoading } = useQuery(GET_SKILLS_BRIEF, {
    fetchPolicy: "network-only",
    onCompleted: (data) => {
      console.log(data);
    },
    onError: (err) => {
      console.log(err);
    },
  });
  const onSelectionChange = (key: Key | null) => {
    setFormData({ ...formData, skillId: Number(key) });
  };
  return (
    <div>
      <div className="flex flex-row justify-between">
        <div className="flex flex-col items-center mt-28 gap-[50px] w-1/2">
          <div className="text-8xl">کولی کد</div>
          <div className="text-5xl font-light">مرجع ایونت های تخصصی</div>
          <CrAutocomplete
            className="max-w-[406px]"
            label="حوزه کاری"
            isLoading={getSKillsLoading}
            variant="flat"
            placeholder="حوزه کاری خود را انتخاب کنید"
            color="primary"
            defaultItems={data?.getSkillsBrief}
            allowsCustomValue={true}
            onSelectionChange={onSelectionChange}
            required
            isRequired
            inputProps={{
              required: true,
            }}
          >
            {data?.getSkillsBrief.map((item) => (
              <CrAutocompleteItem
                key={`${item.id}`}
                value={`${item.id}`}
                color="primary"
              >
                {item.name}
              </CrAutocompleteItem>
            ))}
          </CrAutocomplete>
        </div>
        <Image src={business} alt="business" />
      </div>
      <div>
        <div className="text-center text-[36px] animate-bounce animate-infinite">
          مشاهده آخرین ایونت ها
        </div>
        <Image src={down} alt="down" className="mx-auto my-3" />
      </div>
      <div className="mt-10">
        <div className="mx-auto text-[24px] border-b-4 border-white w-fit p-2">
          چرا کولی کد
        </div>

        <div className="flex flex-row justify-center">
          <div className="flex flex-col items-center w-[686px] gap-[25px] mx-6 mt-28">
            <div className="text-2xl font-normal">
              تا حالا شده بخوای بری کوه، کمپ، طبیعت گردی ،ولی کسی رو نداشته باشی
              که باهات بیاد ؟
            </div>
            <div className="text-neutral-lighter text-lg font-light">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
              کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
              جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای
              طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان
              فارسی ایجاد کرد، در این صورت. سه تا ویژگی مهم داریه
            </div>
          </div>
          <Image src={think} alt="think" className="w-[379px] h-[513px]" />
        </div>

        <div className="flex flex-row items-center justify-center">
          <Image
            src={mountain}
            alt="mountain"
            className="w-[475px.37] h-[342px]"
          />
          <div className="flex flex-col w-[686px] gap-[25px] m-4">
            <div className="text-2xl font-normal">سفر و تفریح</div>
            <div className="text-neutral-lighter text-lg font-light">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
              کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
              جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای
              طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان
              فارسی ایجاد کرد، در این صورت.
            </div>
          </div>
        </div>

        <div className="flex flex-row justify-center">
          <div className="flex flex-col mt-28 mx-6 w-[686px] gap-[25px]">
            <div className="text-2xl font-normal">
              شبکه سازی و ارتباطات موثر
            </div>
            <div className="text-neutral-lighter text-lg font-light">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
              کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
              جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای
              طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان
              فارسی ایجاد کرد، در این صورت.
            </div>
          </div>
          <Image
            src={referral}
            alt="referral"
            className="w-[450px] h-[450px]"
          />
        </div>
      </div>
      <div>
        <div className="mx-auto text-[24px] border-b-4 border-white w-fit p-2 mt-12">
          آخرین ایونت ها
        </div>
        <HomeCarousel />
      </div>
    </div>
  );
}
