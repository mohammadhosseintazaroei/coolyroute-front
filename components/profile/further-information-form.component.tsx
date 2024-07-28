"use client";
import { tv } from "tailwind-variants";
import { CrButton } from "../global/cr-button/cr-button.component";
import { CrTextField } from "../global/cr-fields/cr-text-field.compnent";
import { ChangeEvent, ChangeEventHandler, FormEvent, useState } from "react";
import { Autocomplete, AutocompleteItem } from "@nextui-org/autocomplete";
import { useQuery } from "@apollo/client";
import { GET_SKILLS_BRIEF } from "@/apis/skills.api";
import {
  CrAutocomplete,
  CrAutocompleteItem,
} from "../global/cr-fields/cr-autocomplete.component";
import { BriefSkillModel } from "@/__generated__/graphql";

interface Props {}
const furtherInformationStyles = tv({
  slots: {
    formInputsWrapper: "flex flex-col  gap-7",
    mobileInput: "bg-primary-lighter",
    buttonContainer: "flex w-full gap-7",
  },
});
const styles = furtherInformationStyles();
const FurtherInformationForm = (props: Props) => {
  const [formState, setFormState] = useState({});

  const { data, loading: getSKillsLoading } = useQuery(GET_SKILLS_BRIEF, {
    fetchPolicy: "network-only",
    onCompleted: (data) => {
      // setUserInfo(data.userProfile);
      console.log(data);
    },
    onError: (err) => {
      console.log(err);
    },
  });

  const handleChageFields = (e: ChangeEvent<HTMLInputElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const onSelectionChange = (key) => {
    console.log(key);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(formState);
  };
  return (
    <form onSubmit={handleSubmit} className={styles.formInputsWrapper()}>
      <CrTextField
        type="text"
        label="نام"
        color="primary"
        radius="sm"
        name="firstName"
        onChange={handleChageFields}
        required
        errorMessage="شماره تلفن را به درستی وارد کنید"
      />
      <CrTextField
        type="text"
        label="نام خانوادگی"
        color="primary"
        radius="sm"
        name="lastName"
        onChange={handleChageFields}
        required
        errorMessage="شماره تلفن را به درستی وارد کنید"
      />{" "}
      <CrAutocomplete
        label="Search an animal"
        isLoading={getSKillsLoading}
        variant="flat"
        defaultItems={data?.getSkillsBrief}
        className="max-w-xs"
        allowsCustomValue={true}
        onSelectionChange={onSelectionChange}
        // onInputChange={onInputChange}
      >
        {data?.getSkillsBrief.map((item) => (
          <CrAutocompleteItem key={item.id} value={item.id}>
            {item.name}
          </CrAutocompleteItem>
        ))}
      </CrAutocomplete>
      <CrButton
        color="light"
        variant="bordered"
        radius="sm"
        type="submit"
        // isLoading={loading}
      >
        تایید و ادامه
      </CrButton>
    </form>
  );
};

export default FurtherInformationForm;
