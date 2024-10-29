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
import HomeCarousel from "@/components/home-page/HomeCarousel";
import WhyCooly from "@/components/home-page/WhyCooly";

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
            <CrAutocomplete
              className="lg:text-[406px] text-[268px] max-w-[406px] mt-10"
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
          <Image src={business} alt="business" className="lg:block hidden" />
        </div>

        <div className="animate-bounce animate-infinite">
          <div className="text-center lg:text-[36px] text-[20px]">
            مشاهده آخرین ایونت ها
          </div>
          <Image src={down} alt="down" className="mx-auto my-3" />
        </div>
      </div>
      <WhyCooly />
      <div>
        <div className="mx-auto text-[24px] border-b-4 border-white w-fit p-2 my-12">
          آخرین ایونت ها
        </div>
        <HomeCarousel />
      </div>
    </div>
  );
}
