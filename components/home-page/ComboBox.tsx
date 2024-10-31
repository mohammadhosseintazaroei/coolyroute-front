"use client";

import {
  CrAutocomplete,
  CrAutocompleteItem,
} from "@/components/global/cr-fields/cr-autocomplete.component";
import { GET_SKILLS_BRIEF } from "@/apis/skills.api";
import { useQuery } from "@apollo/client";
import { Key, useState } from "react";
import { CompleteFurtherInformationDto } from "@/__generated__/graphql";

export default function ComboBox() {
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
    <CrAutocomplete
      className="lg:text-[406px] text-[268px] lg:w-[406px] w-[268px] mt-10"
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
  );
}
